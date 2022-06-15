<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our institutions</h2>
    <div class="columns is-multiline">
      <div class="columns is-multiline">
      <div v-for="institution in list" :institution="institution" :key="institution.id" class="column is-one-quarter">
        <router-link :to="'/institution/' + institution.id">
          <InstitutionCard :institution="institution" />
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import InstitutionCard from './InstitutionCard.vue';
  export default {
    name: 'PupilysList',
    components: {
      InstitutionCard,
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