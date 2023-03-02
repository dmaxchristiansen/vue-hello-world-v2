<template>
  <div class="about">
    <h1>About this Repo</h1>
    <p>
      This project serves the as a sandbox for learning about and experimenting
      with Vue 2 outside of the constrains of a larger code base
    </p>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 40px auto 0;
  text-align: center;
}

@media (min-width: 1024px) {
  .about {
    margin: 40px 0 0 158px;
    text-align: left;
  }
}
</style>
