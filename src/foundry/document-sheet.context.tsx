import { debounce } from '@tldraw/utils';
import React, { ReactElement, createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import { debugService } from '../debug/debug.module';

export interface DocumentSheetOptions {
    baseApplication: any
    width: number
    height: number
    top: any
    left: any
    scale: any
    popOut: boolean
    minimizable: boolean
    resizable: boolean
    id: string
    classes: string[]
    dragDrop: any[]
    tabs: any[]
    filters: any[]
    title: string
    template: string
    scrollY: any[]
    closeOnSubmit: boolean
    editable: boolean
    sheetConfig: boolean
    submitOnChange: boolean
    submitOnClose: boolean
    viewPermission: number
    secrets: any[]
    viewClasses: any[]
    includeTOC: boolean
}

type DocumentData = {
    cssClass: string
    editable: boolean
    document: any
    data: any
    limited: boolean
    options: DocumentSheetOptions
    owner: boolean
    title: string
    headingLevels: {
        [key: string]: string
    }
    id: string
}

export type DocumentSheetState = {
    data: DocumentData
    sheet: any
    useDropEffect: (callback: any, deps: any[]) => void
    useCloseEffect: (callback: any, deps: any[]) => void
}

const defaultDocumentSheetState = {
    data: {
        cssClass: '',
        editable: false,
        document: null,
        data: null,
        limited: false,
        options: {
            baseApplication: null,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            scale: 0,
            popOut: false,
            minimizable: false,
            resizable: false,
            id: '',
            classes: [],
            dragDrop: [],
            tabs: [],
            filters: [],
            title: '',
            template: '',
            scrollY: [],
            closeOnSubmit: false,
            editable: false,
            sheetConfig: false,
            submitOnChange: false,
            submitOnClose: false,
            viewPermission: 0,
            secrets: [],
            viewClasses: [],
            includeTOC: false
        },
        owner: false,
        title: '',
        headingLevels: {},
        id: ''
    },
    sheet: {},
    useDropEffect() {
        throw new Error("Not Implemented")
    },
    useCloseEffect() {
        throw new Error("Not Implemented")
    }
}

const DocumentSheetContext = createContext<DocumentSheetState>(defaultDocumentSheetState)

export const useDocumentSheet = () => useContext(DocumentSheetContext)


export const DocumentSheetProvider = ({data, form, sheet, addCloseListener, children}): ReactElement => {
    const useDropEffect = (callback, deps) => useEffect(() => {
        if (!data.editable) {
            return
        }
        $(form).on("drop", ({originalEvent}) => {
            let data
            try {
                data = JSON.parse(originalEvent?.dataTransfer?.getData('text/plain') ?? '');
                callback(data)
            } catch(e) {
                debugService.error("Not allowed: ", originalEvent?.dataTransfer?.getData('text/plain') ?? originalEvent)
            }
        })
        return () => {
            $(form).off("drop")
        }
    }, [form, data.editable, ...deps])

    const useCloseEffect = (callback, deps) => useEffect(() => {
        addCloseListener(callback)
    }, [sheet, ...deps])
    return <DocumentSheetContext.Provider value={{data, sheet, useDropEffect, useCloseEffect}}>
        {children}
    </DocumentSheetContext.Provider>
};
