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

  export default {
    name: 'home',
    components: {
      ProjectSingleCard,
    },
    setup() {
      const project = ref({});

      onMounted(async () => {
        const res = await projectService.getProjectById(1);
        project.value = res.data;
      });

      return {
        project,
      };
    }
  };

</script>
