<template>
  <div class="catalog">
    <div class="catalog__title">
      Результаты
    </div>
    <div v-if="!documentsStore.loader">
      <div
          class="catalog__body"
          v-if="documentsStore.documents.length"
      >
        <transition-group>
          <search-widget-result-item
              v-for="document of documentsStore.documents"
              :key="document.id"
              :document="document"
              :activeElement="document.id === activeDocumentStore.activeDocument.id"
              @click="activeDocumentStore.getActiveDocument(document)"
          />
        </transition-group>
      </div>
      <div
          v-else
          class="catalog__body"
      >
        <p>Ничего не найдено</p>
      </div>
    </div>
    <Loader v-else/>
  </div>
</template>

<script setup lang="ts">
import SearchWidgetResultItem from '@/components/SearchWidgetResultItem.vue'
import Loader from '@/components/TheLoader.vue'
import {useSearchDocumentStore} from '@/stores/SearchDocumentStore'
import {useActiveDocumentStore} from "@/stores/ActiveDocumentStore";

const documentsStore = useSearchDocumentStore()
const activeDocumentStore = useActiveDocumentStore()

</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.catalog__title {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  padding: 0 20px;

}

.catalog__body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 60vh;
  overflow-y: scroll;
  padding: 0 20px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 950px) {
  .catalog__body {
    flex-direction: row;
    height: auto;
    padding-bottom: 20px;
  }

  .catalog {
    height: 130px;
  }
}
</style>