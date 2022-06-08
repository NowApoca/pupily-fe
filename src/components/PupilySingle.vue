<template>
  <div class="pupily-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Pupily name</h1>
          <h2 class="subtitle">Pupily stats</h2>
        </div>
      </div>
    </section>
    <section class="pupily-content">
      <div class="container">
        <p class="is-size-4 description">Pupily description</p>
        <p class="is-size-4">Location:</p>
        <p class="is-size-4">Category:</p>
        <div class="pupily-images columns is-multiline has-text-centered">
          <div class="column is-one-third">IMAGE PLACEHOLDER</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {};
</script>
<style scoped>
  .pupily-content {
    text-align: left;
  }
  .pupily-single {
    text-align: left;
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .pupily-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>