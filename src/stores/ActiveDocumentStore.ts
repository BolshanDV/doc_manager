import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {Document} from "@/types/document.interface";

export const useActiveDocumentStore = defineStore('activeDocumentStore', () => {
    const activeDocument = ref<Document>({description: "", id: 0, image: "", name: ""})
    const getActiveDocument = (doc: Document) => {
        activeDocument.value = doc
    }
    return {activeDocument, getActiveDocument}
})