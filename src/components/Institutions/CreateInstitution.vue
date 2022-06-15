<template>
  <div>
      <h2>Crear admin</h2>      
      <form @submit.prevent="createInstitution">
        Name <input type="text" v-model="institution.name">
        <button type="submit" >Crear</button>
        {{ mensajeDeError }}
      </form>
  </div>
</template>

<script>
import institutionService from '../../services/apiInstitution'
import {usuarioStore} from '../../store/usuarioStore.js'
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const store = usuarioStore();
    store.getUsuario();
    const { usuario } = storeToRefs(store);
    return {
      usuario
    }
  },
  data() {
    return {
      institution : {name: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async createInstitution() {
		  let usuario = JSON.parse(this.usuario);
		  try{
		  	await institutionService.createInstitution(this.institution.name, usuario);
		  	location.reload()
		  }catch(e){
		  	this.mensajeDeError = "ERROR AL CREAR INSTITUCION"
		  }
    }
  }
}
</script>

<style>

</style>