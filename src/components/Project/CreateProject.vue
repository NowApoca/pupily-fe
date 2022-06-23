<template>
  <div>
      <h2>Crear project</h2>      
      <form @submit.prevent="createProject">
        Name <input type="text" v-model="project.name">
        <br>
        Descripcion <input type="text" v-model="project.descripcion">
        <br>
        Porcentaje <input type="number" v-model="project.porcentaje">
        <br>
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
      usuario: usuario.value
    }
  },
  data() {
    return {
      project : {name: "", porcentaje: 0, descripcion: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async createProject() {
		  let usuario = this.usuario;
		  try{
		  	await projectService.createProject(this.project, usuario);
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