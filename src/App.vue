<script setup>
import TheHeader from "@/components/TheHeader.vue";
import SearchWidgetInput from "@/components/SearchWidgetInput.vue";
import SearchWidgetResultsList from "@/components/SearchWidgetResultsList.vue";
import DocumentPreview from "@/components/DocumentPreview.vue";
import TheToasted from "@/components/TheNotification.vue";
</script>

<template>
  <div class="main_section">
    <TheHeader/>
    <main>
      <aside>
        <SearchWidgetInput/>
        <SearchWidgetResultsList/>
      </aside>
      <article>
        <DocumentPreview/>
      </article>
    </main>
  </div>
  <the-toasted/>
</template>

<style scoped>
.main_section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 41px 50px;
}

main {
  min-height: 85vh;
  border-radius: 10px;
  background: #FDFDFD;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
}

aside {
  min-width: 282px;
  width: 20%;
  padding: 27px 0 0 0;
}

article {
  width: 80%;
  display: flex;
}

@media (max-width: 950px) {
  main {
    flex-direction: column;
  }

  .main_section {
    height: auto;
    padding: 20px 15px;
  }

  aside {
    width: 100%;
    padding: 27px 0 0 0;
  }

  article {
    width: auto;
    height: auto;
  }
}
</style>
