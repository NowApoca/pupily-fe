<template>
  <div class="about">
    <div class="container">
      <ProjectSingleCard :project="project" />
    </div>
  </div>
</template>
<style scoped>
  .block-text {
    margin-top: 50px;
  }
</style>

<script>
  import ProjectSingleCard from './ProjectSingleCard.vue';
  import { ref, onMounted } from 'vue'
  import projectService from '../../services/apiProject.js'
  import { useRoute } from 'vue-router'

  export default {
    name: 'home',
    components: {
      ProjectSingleCard,
    },
    setup() {
      const project = ref({});
      const route = useRoute()
      const id = route.params.id

      onMounted(async () => {
        const res = await projectService.getProjectById(id);
        project.value = res.data;
      }).bind(this);

      return {
        project,
      };
    },
  };

</script>
