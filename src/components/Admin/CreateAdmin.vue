<template>
  <div>
      <h2>Crear admin</h2>      
      <form @submit.prevent="createAdmin">
        Name <input type="text" v-model="admin.name">
        Surname <input type="text" v-model="admin.surname">
        Borndate <input type="date" v-model="admin.bornDate">
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
      admin : {name: "", password: "", surname: "", bornDate: null},
      mensajeDeError : ''
    }
  },
  methods: {
    async createAdmin() {
		  let usuario = this.usuario;
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