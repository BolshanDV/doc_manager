<template>
  <section aria-live="polite" class="toasted">
    <transition-group name="slide-fade">
      <article
          v-for="(notification, index) in notificationStore.notifications"
          :key="index"
          class="toasted_element"
      >
        <p class="content_text">{{ notification }}</p>
      </article>
    </transition-group>
  </section>
</template>


<script setup lang="ts">
import {useNotificationStore} from '@/stores/NotificationStore'
import {watch} from "vue"

const notificationStore = useNotificationStore()

watch(notificationStore.notifications, () => {
  notificationStore.cleanNotifications()
})
</script>

<style scoped>

.toasted {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
}

.toasted_element {
  padding: 16px;
  border-radius: 4px;
  background: #618dd0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  margin-bottom: 16px;
}

.content_text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>