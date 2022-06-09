<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">All Pupilys</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <PupilysList :list="list" />
    </div>
  </div>
</template>
<style scoped>
  .block-text {
    margin-top: 50px;
  }
</style>

<script>
  import PupilysList from './PupilysList.vue';
  import pupilyservice from '../services/apiPupily.js'

  export default {
    name: 'home',
    components: {
      PupilysList,
    },
    setup() {
      const list = pupilyservice.getAll()
      return {
        list
      };
    }
  };

</script>