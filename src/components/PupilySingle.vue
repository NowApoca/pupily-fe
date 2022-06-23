<template>
  <div class="pupily-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Nombre: {{pupilyData.surname}}, {{pupilyData.name}}.</h1>
      		<h2 class="subtitle is-3" v-if="isPupilySponsored"  >{{pupilyData.type}}</h2>
      		<h3 class="subtitle is-5" v-if="isPupilySponsored"  >Sponsoreado</h3>
        </div>
      </div>
    </section>
    <section class="pupily-content">
      <div class="container">
        <p class="is-size-4 description">Pupily borndate: {{pupilyData.bornDate?.slice(0, 10)}}</p>
      </div>
    </section>
    <section v-if="isPadrino" >
			<div>
      			<button v-if="!isPupilySponsored" v-on:click="sponsorPupily" >Sponsor</button>
      			<button v-if="isPupilySponsored" v-on:click="desponsorPupily" >Desponsorear</button>
			</div>
      {{mensajeDeError}}
    </section>
    <section>
      <ProjectsList :list="pupilyData.projects" />
    </section>
  </div>
</template>

<script>

import service from '../services/apiUser'
import projectService from "../services/apiProject"
import { usuarioStore } from "../store/usuarioStore";
import { storeToRefs } from 'pinia'
import {ref, onMounted} from "vue"
import { useRoute } from 'vue-router'
import ProjectsList from "./Project/ProjectsList.vue"

export default {
    components: {
      ProjectsList,
    },
  setup(props1) {
    const store = usuarioStore();
    const router = useRoute();
    store.getUsuario();
    const { usuario } = storeToRefs(store);
    const usuarioValue = usuario.value;
    const isPadrino = usuarioValue && usuarioValue.type == "sponsor";
    const isPupilySponsored = ref(false);
    const pupilyData = ref({});
    const pupilyId = router.params.id;
    onMounted(async () => {
      const resPupily = await service.getUserById(pupilyId);
      const resProjects = await projectService.getPupilyProjectsByPupily(pupilyId)
      pupilyData.value = resPupily.data;
      pupilyData.value.projects = resProjects.data;
      const res = await service.getUserById(usuarioValue.id);
      isPupilySponsored.value = res.data.pupilies.filter(pupily => pupily.id == pupilyId)[0]? true:false;
    });
    return {
		  usuario: usuario.value, isPadrino, isPupilySponsored, 
      pupilyId, pupilyData
    }
  },
  data() {
    return {
      mensajeDeError : ''
    }
  },
  methods: {
    async sponsorPupily(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.sponsorPupily(this.pupilyId, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
		}
    },
    async desponsorPupily(e) {
		e.preventDefault()
		let usuario = this.usuario;
    console.log(this.usuario, 'THIS USUARIO')
		try{
			await service.desponsorPupily(this.pupilyId, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
		}
    }
  },
};

</script>
<style scoped>
  .pupily-content {
    text-align: left;
  }
  .pupily-single {
    text-align: left;
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .pupily-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>