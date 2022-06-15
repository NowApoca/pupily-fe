<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our projects</h2>
    <div class="columns is-multiline">
      <div class="columns is-multiline">
      <div v-for="project in list" :project="project" :key="project.id" class="column is-one-quarter">
        <router-link :to="'/project/' + project.id">
          <ProjectCard :project="project" />
        </router-link>
      </div>
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