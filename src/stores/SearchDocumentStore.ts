import {onMounted, ref} from 'vue'
import {defineStore} from 'pinia'
import {useNotificationStore} from "@/stores/NotificationStore";
import axios from "axios";
import type {Document} from "@/types/document.interface";

export const useSearchDocumentStore = defineStore('searchDocumentStore', () => {
    const documents = ref<Document[]>([])
    const loader = ref<Boolean>(false)
    const notificationStore = useNotificationStore()

    const getDocuments = async () => {
        loader.value = true
        await axios.get<Document[]>(`${import.meta.env.VITE_API_URL}user/docs`)
            .then(response => {
                loader.value = false
                documents.value = response.data;
            })
            .catch(error => notificationStore.notifications.unshift(error));
    }
    const getFilteredDocuments = async (filter: string) => {
        loader.value = true
        const filterParam: string = filter.toLowerCase().trim()
        await axios.get<Document[]>(`${import.meta.env.VITE_API_URL}user/docs?search=${filterParam}`)
            .then(response => {
                loader.value = false
                documents.value = response.data;
            })
            .catch(error => notificationStore.notifications.unshift(error));
    }

    function debounce<Params extends any[]>(
        func: (...args: Params) => any,
        timeout: number,
    ): (...args: Params) => void {
        let timer: number
        return (...args: Params) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func(...args)
            }, timeout)
        }
    }

    onMounted(() => {
        getDocuments()
    })

    return {documents, loader, getFilteredDocuments, debounce}
})