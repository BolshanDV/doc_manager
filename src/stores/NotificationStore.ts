import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useNotificationStore = defineStore('notificationStore', () => {
    const notifications = ref<string[]>([])

    const cleanNotifications = () => {
        if (notifications.value.length) {
            setTimeout(function () {
                notifications.value.splice(notifications.value.length - 1, 1)
            }, 3000)
        }
    }

    return {notifications, cleanNotifications}
})