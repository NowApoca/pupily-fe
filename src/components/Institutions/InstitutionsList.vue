<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our institutions</h2>
    <div class="columns is-multiline">
      <div class="columns is-multiline">
        <table class="table">
      <thead>
        <tr>
    <th>Nombre</th>
    <th>Descripcion</th>
    <th>Ubicacion</th>
  </tr>
      </thead>
      <tbody>
  <tr v-for="institution in list" :institution="institution" :key="institution.id">
    <td>
      <router-link :to="'/institution/' + institution.id">
        {{institution.name}}
      </router-link>
      </td>
    <td>{{institution.description}}</td>
    <td>{{institution.location}}</td>
  </tr>
      </tbody>
</table>
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>