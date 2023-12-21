<template>
  <form class="search-form" role="search">
    <label for="document-search" class="search-form__title">Поиск документа</label>
    <input
        v-model="searchDoc"
        id="document-search"
        placeholder="Введите ID документа"
        class="search-form__input"
        type="text"
        name="login"
    >
  </form>
</template>


<script setup lang="ts">
import {ref, watch} from "vue"
import {useSearchDocumentStore} from '@/stores/SearchDocumentStore'

const documentsStore = useSearchDocumentStore()

const searchDoc = ref<string>('')

watch(searchDoc, () => {
  debouncedTest(searchDoc.value)
})

const debouncedTest = documentsStore.debounce(documentsStore.getFilteredDocuments, 300);

</script>

<style scoped>
@import url("../assets/style/input.css");

.search-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 29px;
  padding: 0 20px;
}

.search-form__title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
</style>