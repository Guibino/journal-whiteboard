import React, { ReactElement } from 'react';
import * as ReactDOM from 'react-dom/client';
import { DocumentSheetProvider } from './document-sheet.context';

export abstract class JournalPageSheetReact extends JournalPageSheet {
    root: ReactDOM.Root | null = null;
    object: any;
    form: HTMLFormElement;
    isEditable: boolean;
    rendered: boolean;

    _onCloseListeners: any[] = []

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            submitOnClose: false,
            submitOnChange: false,
        });
    }

    async _renderInner(sheet: any): Promise<JQuery<HTMLElement>> {
        this.createForm();
        this.componentDidMount(sheet);
        this.createReactRoot(sheet);
        return $(this.form);
    }

    createForm() {
        if (this.form) {
            return;
        }
        this.form = document.createElement('form');
        this.form.setAttribute('autocomplete', 'off');
    }

    private addCloseListener = (listener) => {
        this._onCloseListeners.push(listener)
    }

    createReactRoot(data: any) {
        if (!this.root) {
            this.root = ReactDOM.createRoot(this.form);
        }
        this.root.render(
            <DocumentSheetProvider data={data} form={$(this.form)} sheet={this} addCloseListener={this.addCloseListener}>{this.reactComponent()}</DocumentSheetProvider>,
        );
    }

    async _render(force = false, options: { action?: string} = {}) {
        console.log(force, options)
        if (!force && this._state === Application.RENDER_STATES.RENDERED && options?.action !== 'update') {
            this.refreshWindowTitle();
            return;
        }

        await super._render(force, options);
    }

    private refreshWindowTitle() {
        let t = this.element.find('.window-title')[0];
        if (!t) return;
        if (t.hasChildNodes()) t = t.childNodes[0];
        t.textContent = this.title;
    }

    abstract componentDidMount(sheet): void;

    abstract reactComponent(): ReactElement;

    async close() {
        this.root?.unmount();
        this.root = null;
        for (const listener of this._onCloseListeners) {
            listener()
        }
        this._onCloseListeners = []
        return await super.close();
    }

    deactivateListeners(html: JQuery) {
        html.find('img[data-edit]').off('click');
        html.find('input,select,textarea').off('change');
        html.find('button.file-picker').off('click');
    }

    override activateListeners(html: JQuery) {
        this.deactivateListeners(html);

        super.activateListeners(html);
    }
    _activateEditor(_: JQuery | HTMLElement) {}
    async saveEditor(name: string, _: { remove?: boolean } = {}) {}
}
