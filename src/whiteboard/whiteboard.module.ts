import { CANONICAL_NAME } from '../constants';
import { WhiteboardModel } from './whiteboard.datamodel';
import { JournalWhiteboardPageSheet } from './whiteboard.sheet';

export default {
    hooks: {
        async init() {
            Object.assign(CONFIG.JournalEntryPage.dataModels, {
                [`${CANONICAL_NAME}.whiteboard`]: WhiteboardModel,
            });
            DocumentSheetConfig.registerSheet(
                JournalEntryPage,
                CANONICAL_NAME,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                JournalWhiteboardPageSheet,
                {
                    types: [`${CANONICAL_NAME}.whiteboard`],
                    label: game.i18n.localize('TYPES.JournalEntryPage.journal-whiteboard.whiteboard'),
                    makeDefault: true,
                },
            );
        },
    },
};
