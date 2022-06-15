<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">All Projects</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <ProjectsList :list="list" />
    </div>
  </div>
</template>
<style scoped>
  .block-text {
    margin-top: 50px;
  }
</style>

<script>
  import ProjectsList from './ProjectsList.vue';
  import { ref, onMounted } from 'vue'
  import projectService from '../../services/apiProject.js'

  export default {
    name: 'home',
    components: {
      ProjectsList,
    },
    setup() {
      const list = ref([]);

      onMounted(async () => {
        const res = await projectService.getAll();
        list.value = res.data;
        console.log(res);
      });

      return {
        list,
      };
    }
  };

</script>
