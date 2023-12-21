<template>
  <section class="catalog">
    <header class="catalog__title">
      <h2>Результаты</h2>
    </header>
    <div v-if="!documentsStore.loader">
      <ul
          class="catalog__body"
          v-if="documentsStore.documents.length"
      >
        <li v-for="document in documentsStore.documents" :key="document.id">
          <search-widget-result-item
              :document="document"
              :activeElement="document.id === activeDocumentStore.activeDocument.id"
              @click="activeDocumentStore.getActiveDocument(document)"
          />
        </li>
      </ul>
      <div v-else class="catalog__body">
        <p>Ничего не найдено</p>
      </div>
    </div>
    <Loader v-else role="status"/>
  </section>
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