<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">My Pupilies</h1>
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
  import { ref, onMounted } from 'vue'
  import service from '../services/apiUser.js'
import { usuarioStore } from "../store/usuarioStore";
import { storeToRefs } from 'pinia'

  export default {
    name: 'home',
    components: {
      PupilysList,
    },
    setup() {
      const store = usuarioStore();
      store.getUsuario();
      const { usuario } = storeToRefs(store);
      const list = ref([]);
      onMounted(async () => {
        const usuarioData = usuario.value;
        const res = await service.getUserById(10);
        if(usuarioData.type == 'sponsor'){
          list.value = res.data.pupilies;
        }
        if(usuarioData.type == 'pupily'){
          list.value = res.data.sponsors;
        }
        console.log(res);
      });

      return {
        list,
      };
    }
  };

</script>