import React from 'react';
import { WhiteboardPage } from './components/whiteboard-page';
import './whiteboard.style.css';
import {
    App,
    TLInstance,
    TLInstanceId,
    TLInstancePageState,
    TLPage,
    TLPageId,
    TLUser,
    TLUserId,
    TLUserPresence,
    TldrawEditorConfig,
} from '@tldraw/tldraw';
import { debugService } from '../debug/debug.module';
import { tldrawSettings } from '../tldraw/tldraw.module';
import { JournalPageSheetReact } from '../foundry/journal-page.sheet';
import {
    getShapes,
    getTools,
} from '../custom-components/custom-components.service';
import { collaborativeStore } from '../collaboration/collaboration.module';
import { WhiteboardProvider } from './contexts/whiteboard.context';

export class JournalWhiteboardPageSheet extends JournalPageSheetReact {
    store: any;
    tldrawApp: App;
    tldrawConfig: TldrawEditorConfig;
    userId: TLUserId;
    user: TLUser;
    userPresence: TLUserPresence
    instanceId: TLInstanceId;
    instance: TLInstance;
    instancePageState: TLInstancePageState
    pageId: TLPageId
    page: TLPage
    removeStoreListener: any;
    autoSaveInterval: any

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 960,
            height: 800,
            classes: ['sheet', 'journal-entry-page', 'journal-sheet', 'journal-whiteboard.whiteboard'],
        });
    }

    componentDidMount(sheet: any) {
        this.tldrawConfig = new TldrawEditorConfig({
            shapes: getShapes(),
            tools: getTools(),
            allowUnknownShapes: true,
        });

        this.userId = TLUser.createCustomId(game.user.id);
        this.user = TLUser.create({
            id: this.userId,
            name: game.user.name,
        });
        this.instanceId = TLInstance.createCustomId(this.object.id)
        this.pageId = TLPage.createCustomId(this.object.id)
        this.page = TLPage.create({ id: this.pageId, name: sheet.title, index: 'a0' })
        this.store = this.tldrawConfig.createStore({
            initialData: {
                [this.pageId]: this.page,
                [this.userId]: this.user,
            },
            userId: this.userId,
            instanceId: this.instanceId,
        })
        collaborativeStore.registerStore(this.instanceId, this.store)
        const whiteboard = this.object.system?.whiteboard;
        if (whiteboard) {
            collaborativeStore.restoreSnapshot(this.instanceId, whiteboard);
        }
    }

    handleMount = async (app: App) => {
        this.tldrawApp = app;
        if (tldrawSettings.theme === 'dark') {
            this.tldrawApp.setDarkMode(true);
        } else {
            this.tldrawApp.setDarkMode(false);
        }
        if (!this.isEditable) {
            this.tldrawApp.enableReadOnlyMode();
            return
        }
        await this.enableCollaborativeEditing(app);
        this.enableAutoSave()
        app.updateUser(this.user)
        app.updateUserPresence({color: game.user.color})
    };

    async enableCollaborativeEditing(app: App) {
        if (!collaborativeStore.isCollaborativeMode() || !this.isEditable) {
            return
        }

        debugService.log('Collaborative editing is enabled.');
        await collaborativeStore.restoreFromRemote(this.instanceId)
        debugService.log('Listening for remote changes.');
        collaborativeStore.connectUser(this.instanceId)
        this.removeStoreListener = app.store.listen(entry => {
            collaborativeStore.put(this.instanceId, entry.changes, entry.source)
        });
    }

    reactComponent() {
        return (
            <WhiteboardProvider instanceId={this.instanceId} onSave={this.saveSnapshot.bind(this)}>
                <WhiteboardPage
                    store={this.store}
                    config={this.tldrawConfig}
                    onMount={this.handleMount}
                    userId={this.userId}
                    instanceId={this.instanceId}
                />
            </WhiteboardProvider>
        );
    }

    async enableAutoSave() {
        if (!this.rendered || !this.isEditable) {
            return
        }

        const frequency = game.settings.get('core', 'editorAutosaveSecs')
        debugService.log("Autosave is enabled")
        this.autoSaveInterval = setInterval(async () => {
            debugService.log("Autosaving...")
            await this.saveSnapshot()
        }, frequency * 1000)
    }

    async saveSnapshot() {
        const snapshot = collaborativeStore.getSnapshot(this.instanceId);
        await this.object.update(
            { ['system.whiteboard']: snapshot },
            { diff: false, recursive: true },
        );
        debugService.log("Saved")
    }

    async close() {
        if (this.isEditable) {
            await this.saveSnapshot();
        }
        if (this?.removeStoreListener) {
            this?.removeStoreListener();
        }
        return await super.close();
    }
}
