<template>
  <div>
      <h2>Crear admin</h2>      
      <form @submit.prevent="createAdmin">
        Name <input type="text" v-model="admin.name">
        Password <input type="password" v-model="admin.password">
        <button type="submit" >Crear</button>
        {{ mensajeDeError }}
      </form>
  </div>
</template>

<script>

import userService from '../../services/apiUser'
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
      admin : {name: "", password: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async createAdmin() {
		  let usuario = JSON.parse(this.usuario);
		  try{
		  	await userService.createAdmin(this.admin, usuario);
		  	location.reload()
		  }catch(e){
		  	this.mensajeDeError = "ERROR AL CREAR ADMIN"
		  }
    }
  }
}
</script>

<style>

</style>