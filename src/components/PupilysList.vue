<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our newcomers Pupilys</h2>
    <div class="columns is-multiline">
      <div class="columns is-multiline">
      <div v-for="pupily in list" :pupily="pupily" :key="pupily.id" class="column is-one-quarter">
        <router-link :to="'/pupily/' + pupily.id">
          <PupilyCard :pupily="pupily" />
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import PupilyCard from './PupilyCard.vue';
  export default {
    name: 'PupilysList',
    components: {
      PupilyCard,
    },
    props: [
      "list"
    ],
  };
</script>
<style scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>