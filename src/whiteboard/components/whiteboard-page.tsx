import React, { useCallback } from 'react';
import {
    App,
    Canvas,
    ContextMenu,
    TLInstanceId,
    TLStore,
    TLUserId,
    TldrawEditor,
    TldrawEditorConfig,
    TldrawUi,
} from '@tldraw/tldraw';
import '@tldraw/tldraw/editor.css';
import '@tldraw/tldraw/ui.css';
import { getEditorAssetUrls, getUiAssetUrls } from '../../tldraw/assets';
import { menuOverrides } from '../../tldraw/menu-overrides';
import styled from 'styled-components';
import { useDocumentSheet } from '../../foundry/document-sheet.context';
import { WhiteboardMenu } from './whiteboard-menu';
import { useWhiteboard } from '../contexts/whiteboard.context';
import { debugService } from '../../debug/debug.module';
import { getShapeByDataTransferType } from '../../custom-components/custom-components.service';
import { collaborativeStore } from '../../collaboration/collaboration.module';
import { debounce } from '@tldraw/utils';

type WhiteBoardPageProps = {
    store: TLStore;
    config: TldrawEditorConfig;
    userId: TLUserId;
    instanceId: TLInstanceId;
    onMount: (app: App) => void;
};

const editorAssetUrls = getEditorAssetUrls();
const uiAssetUrls = getUiAssetUrls();

const DEBOUNCE_TIME = 1000

export const WhiteboardPage = ({
    store,
    config,
    onMount,
    userId,
    instanceId,
}: WhiteBoardPageProps) => {
    const { data, sheet, useDropEffect, useCloseEffect } = useDocumentSheet();
    const updateDocumentName = useCallback(debounce(async (data?: any, context?: any) => {
        if (!data) {
            return
        }
        return await sheet.document.update(data, context)
    }, DEBOUNCE_TIME), [sheet?.document])
    const [showTitle, setShowTitle] = React.useState(data?.data?.title?.show);
    const {app, setApp} = useWhiteboard()
    const handleMount = useCallback((app: App) => {
        setApp(app)
        onMount(app)
    }, [onMount])
    useDropEffect(data => {
        if (!app) {
            return
        }
        const shape = getShapeByDataTransferType(data?.type);
        debugService.log('Dropping Foundry Document', data, shape);
        if (!shape) {
            return;
        }
        const shapeId = app.createShapeId();
        app.createShapes([
            {
                id: shapeId,
                type: shape.type,
                x: app.viewportPageBounds.center.x,
                y: app.viewportPageBounds.center.y,
                props: {
                    id: data.uuid,
                    type: data.type,
                },
            },
        ]);
        app.setSelectedIds([shapeId]);
        app.setSelectedTool('select.idle');
    }, [app])

    useCloseEffect(() => {
        if (collaborativeStore.isCollaborativeMode()) {
            collaborativeStore.disconnectUser(instanceId, userId)
        }
    }, [collaborativeStore, instanceId, userId])
    return (
        <Whiteboard className={data.cssClass}>
            {data?.editable && (
                <>
                    <header className="journal-header">
                        <input
                            className="title"
                            type="text"
                            defaultValue={data?.data?.name}
                            key={data.id}
                            onChange={e => {
                                updateDocumentName({ name: e.target.value });
                            }}
                            placeholder="Page Name"
                        />
                        <aside className="page-level flexcol">
                            <div className="heading-level flexrow">
                                <label className="flex0" data-tooltip="Heading Level">
                                    <i className="fa-solid fa-list-tree"></i>
                                </label>
                                <select
                                    name="title.level"
                                    onChange={({ currentTarget }) => {
                                        data.document.update(
                                            { title: { level: currentTarget.value } },
                                            { render: false },
                                        );
                                    }}
                                    value={data.data.title.level}
                                >
                                    {Object.entries(data.headingLevels).map(([key, value]) => (
                                        <option key={key} value={key}>
                                            {value as String}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="show-title">
                                <label className="checkbox">
                                    Display Page Title
                                    <input
                                        type="checkbox"
                                        name="title.show"
                                        checked={showTitle}
                                        onChange={({ currentTarget }) => {
                                            data.document.update(
                                                { title: { show: currentTarget.checked } },
                                                { render: false },
                                            );
                                            setShowTitle(currentTarget.checked);
                                        }}
                                    />
                                </label>
                            </div>
                        </aside>
                    </header>
                    <WhiteboardMenu />
                </>
            )}
            {showTitle && !data?.editable && (
                <header className="journal-page-header">
                    <h1>{data?.data?.name}</h1>
                </header>
            )}
            <TldrawEditor
                assetUrls={editorAssetUrls}
                config={config}
                store={store}
                onMount={handleMount}
                userId={userId}
                instanceId={instanceId}
            >
                <TldrawUi assetUrls={uiAssetUrls} overrides={menuOverrides}>
                    <ContextMenu>
                        <Canvas />
                    </ContextMenu>
                </TldrawUi>
            </TldrawEditor>
        </Whiteboard>
    );
};

const Whiteboard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
