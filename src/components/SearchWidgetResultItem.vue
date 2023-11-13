<template>
  <div class="document"
       :class="{document_active: activeElement}"
  >
    <div class="document__img">
      <img
          v-if="document.image"
          :src="document.image"
          class="default_img"
          alt="">
      <img
          v-else
          src="../assets/icons/img.png"
          class="default_img"
          alt=""
      >
    </div>
    <div class="document__body">
      <div
          class="document__text"
          :class="{document__text_active: activeElement}"
      >
        {{ document.name }}
      </div>
      <div
          class="document__desc"
          :class="{document__desc_active: activeElement}"
      >
        12 MB
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Document} from "@/types/document.interface"
import {useActiveDocumentStore} from "@/stores/ActiveDocumentStore";

const activeDocumentStore = useActiveDocumentStore()

const props = defineProps<{
  document: Document
  activeElement: Boolean
}>()
</script>

<style scoped>
.document {
  display: flex;
  flex-direction: row;
  background: #FFF;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  border-radius: 10px;
}

.document_active {
  background: #0D6EFD;
  color: #ffffff;
}

.document__body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 170px;
  padding: 15px;
}

.document__text {
  color: #212529;
  font-size: 14px;
  font-weight: 600;
}

.document__text_active {
  color: #F8F9FA;
}

.document__desc {
  color: #6C757D;
  font-size: 14px;
  font-weight: 400;
}

.document__desc_active {
  color: #DEE2E6;
}

.default_img {
  width: 70px;
  height: 70px;
  border-radius: 10px 0 0 10px;
}

@media (max-width: 950px) {
  .document {
    width: 240px;
  }
}
</style>