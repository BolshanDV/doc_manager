<template>
  <header>
    <div class="title">
      <h1>MyApp</h1>
    </div>
    <div class="username">
      <p>Username</p>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
}

.username p {
  color: #000;
}
</style>