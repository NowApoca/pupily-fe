<template>
  <div class="pupily-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Pupily name</h1>
          <h2 class="subtitle">Pupily stats</h2>
        </div>
      </div>
    </section>
    <section class="pupily-content">
      <div class="container">
        <p class="is-size-4 description">Pupily description</p>
        <p class="is-size-4">Location:</p>
        <p class="is-size-4">Category:</p>
        <div class="pupily-images columns is-multiline has-text-centered">
          <div class="column is-one-third">IMAGE PLACEHOLDER</div>
        </div>
      </div>
    </section>
    <section v-if="isPadrino" >
			<div>
      			<button v-if="!isPupilySponsored" v-on:click="sponsorPupily" >Sponsor</button>
      			<button v-if="isPupilySponsored" v-on:click="desponsorPupily" >Desponsorear</button>
			</div>
      {{mensajeDeError}}
    </section>
  </div>
</template>

<script>

import service from '../services/apiUser'
import { usuarioStore } from "../store/usuarioStore";
import { storeToRefs } from 'pinia'
import {ref, onMounted} from "vue"
import { useRoute } from 'vue-router'

export default {
  setup(props1) {
    const store = usuarioStore();
    const router = useRoute();
    store.getUsuario();
    const { usuario } = storeToRefs(store);
    const usuarioValue = usuario.value;
    const isPadrino = usuarioValue && usuarioValue.type == "sponsor";
    const isPupilySponsored = ref(false);
    const pupilyId = router.params.id;
    onMounted(async () => {
      const res = await service.getUserById(usuarioValue.id);
      console.log(res.data.pupilies, 'res.data.pupilies')
      isPupilySponsored.value = res.data.pupilies.filter(pupily => pupily.id == pupilyId)[0]? true:false;
    });
    return {
		  usuario: usuario.value, isPadrino, isPupilySponsored, pupilyId
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