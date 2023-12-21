<template>
  <section class="preview">
    <article v-if="activeDocumentStore.activeDocument.id" class="preview-document">
      <figure class="preview-document__img">
        <img
            :src="activeDocumentStore.activeDocument.image"
            class="preview-document__img"
            :alt="activeDocumentStore.activeDocument.name"
        >
        <figcaption>{{ activeDocumentStore.activeDocument.name }}</figcaption>
      </figure>
      <div class="preview-document__body">
        <header>
          <h2 class="preview-document__title">{{ activeDocumentStore.activeDocument.name }}</h2>
        </header>
        <div class="preview-document__actions">
          <a
              :href="createHrefForDownload"
              download="messageText.txt"
              class="preview-document__button preview-document__button_blue"
          >
            Скачать
          </a>
          <button
              class="preview-document__button preview-document__button_red"
              :disabled="!activeDocumentStore.activeDocument.image"
          >
            Удалить
          </button>
        </div>
        <section class="preview-document__description">
          <h3 class="preview-document__description-title">Описание:</h3>
          <p class="preview-document__description-text">{{ activeDocumentStore.activeDocument.description }}</p>
        </section>
      </div>
    </article>
    <div v-else class="preview-document-center">
      <p>Выберите документ, чтобы посмотреть его содержимое</p>
    </div>
  </section>
</template>



<script setup lang="ts">
import {useActiveDocumentStore} from "@/stores/ActiveDocumentStore";
import {computed} from "vue";
import type {Document} from "@/types/document.interface";

const activeDocumentStore = useActiveDocumentStore()

const createHrefForDownload = computed((): string => {
  let documentText: string = ''
  let doc: Document = activeDocumentStore.activeDocument
  for (const docKey in doc) {
    documentText += docKey.toString() + ": " + doc[docKey as keyof typeof doc] + '\n'
  }
  let data: Blob = new Blob([documentText], {type: 'text/plain'})
  return window.URL.createObjectURL(data)
})
</script>

<style scoped>
.preview {
  padding: 30px;
  border-left: 1px solid #E0E0E0;
  background: #FFF;
  width: 100%;
}

.preview-document {
  display: flex;
  flex-direction: row;
  gap: 61px;
}

.preview-document__title, .preview-document__description-text {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 14px;
}

.preview-document__description-text {
  color: #6C757D;
  font-size: 14px;
  font-weight: 400;
}

.preview-document__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  margin-bottom: 47px;
  padding: 5px 28px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid;
  text-decoration: none;
}

.preview-document__button_blue, .preview-document__button_red {
  color: #0D6EFD;
  border-color: #0D6EFD;
}

.preview-document__button_blue:hover, .preview-document__button_red:hover {
  background: #8badff;
}

.preview-document__button_blue:focus, .preview-document__button_red:focus {
  box-shadow: 0 0 0 2px #cbd6ee;
}

.preview-document__button_red {
  color: #DC3545;
  border-color: #DC3545;
}

.preview-document__button_red:hover {
  background: #ff7883;
}

.preview-document__button_red:focus {
  box-shadow: 0 0 0 2px #eecbcb;
}

.preview-document__button_red:disabled {
  border-color: #c4c4c4;
  color: #5b5b5b;
  background: #c4c4c4;
}

.preview-document-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

@media (max-width: 1300px) {
  .preview-document {
    flex-direction: column;
    gap: 30px;
  }

  .preview-document__img {
    width: 100%;
  }
}
</style>

