<template>
  <div class="preview">
    <div class="preview-document"
         v-if="activeDocumentStore.activeDocument.id"
    >
      <div class="preview-document__img">
        <img
            :src="activeDocumentStore.activeDocument.image"
            class="document_img"
            alt=""
        >
      </div>
      <div class="preview-document_body">
        <div class="document__title title">
          {{ activeDocumentStore.activeDocument.name }}
        </div>
        <div class="document__button">
          <a
              :href="createHrefForDownload"
              download="messageText.txt"
              class="button button_blue"
          >
            Скачать
          </a>
          <button
              class="button button_red"
              :disabled="!activeDocumentStore.activeDocument.image"
          >
            Удалить
          </button>
        </div>
        <div class="document__description">
          <div class="description__title title">
            Описание:
          </div>
          <div class="description__text">
            {{ activeDocumentStore.activeDocument.description }}
          </div>
        </div>
      </div>
    </div>
    <div
        v-else
        class="preview-document-center"
    >
      <p>Выберите документ, чтобы посмотреть его содержимое</p>
    </div>
  </div>
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

.title {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 14px;
}

.description__text {
  color: #6C757D;
  font-size: 14px;
  font-weight: 400;
}

.document__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  margin-bottom: 47px;
}

.button {
  padding: 5px 28px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid;
  text-decoration: none;
}

.button_blue {
  border-color: #0D6EFD;
  color: #0D6EFD;
}

.button_blue:hover {
  background: #8badff;
}

.button_blue:focus {
  box-shadow: 0 0 0 2px #cbd6ee;
}

.button_red {
  border-color: #DC3545;
  color: #DC3545;
}

.button_red:hover {
  background: #ff7883;
}

.button_red:focus {
  box-shadow: 0 0 0 2px #eecbcb;
}

.button_red:disabled {
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

  .document_img {
    width: 100%;
  }
}
</style>