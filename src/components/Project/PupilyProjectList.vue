<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">My Projects</h1>
        </div>
      </div>
    </div>
    <div>
        <router-link class="button is-dark" to="/create/project">Crear Projecto</router-link>
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>

<script>
  import ProjectsList from './ProjectsList.vue';
  import { ref, onMounted } from 'vue'
  import projectService from '../../services/apiProject.js'
  import { usuarioStore } from "../../store/usuarioStore";
  import { storeToRefs } from 'pinia'

  export default {
    name: 'home',
    components: {
      ProjectsList,
    },
    setup() {
      const list = ref([]);
      const store = usuarioStore();
      store.getUsuario();
      const { usuario } = storeToRefs(store);

      onMounted(async () => {
        const res = await projectService.getPupilyProjects(usuario.value);
        list.value = res.data;
        console.log(res);
      });

      return {
        list,
      };
    }
  };

</script>
