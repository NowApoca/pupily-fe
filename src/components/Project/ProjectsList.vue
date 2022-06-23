<template>
  <div class="events container">
    <div class="columns is-multiline">
      <div class="columns is-multiline">
      <table class="table">
      <thead>
        <tr>
    <th>Nombre</th>
    <th>Descripcion</th>
    <th>Porcentaje</th>
  </tr>
      </thead>
      <tbody>
  <tr v-for="project in list" :project="project" :key="project.id">
    <td>
      <router-link :to="'/project/' + project.id">
        {{project.name}}
      </router-link>
      </td>
    <td>{{project.descripcion}}</td>
    <td>{{project.porcentaje}}</td>
  </tr>
      </tbody>
</table>
    </div>
    </div>
  </div>
</template>
<script>
  import ProjectCard from './ProjectCard.vue';
  export default {
    name: 'PupilysList',
    components: {
      ProjectCard,
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