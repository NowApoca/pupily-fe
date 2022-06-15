<template>
  <div>
      <h2>Crear project</h2>      
      <form @submit.prevent="createProject">
        Name <input type="text" v-model="project.name">
        <button type="submit" >Crear</button>
        {{ mensajeDeError }}
      </form>
  </div>
</template>

<script>

import projectService from '../../services/apiProject'
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
      project : {name: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async createProject() {
		  let usuario = JSON.parse(this.usuario);
		  try{
		  	await projectService.createProject(this.project.name, usuario);
		  	location.reload()
		  }catch(e){
		  	this.mensajeDeError = "ERROR AL CREAR PROJECT"
		  }
    }
  }
}
</script>

<style>

</style>