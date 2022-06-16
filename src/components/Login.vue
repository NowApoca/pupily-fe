<template>
  <div>
      <h2>Login</h2>      
      <form @submit.prevent="login">
        Email <input type="text" v-model="usuario.name">
        Passwors <input type="text" v-model="usuario.password">
        <button type="submit" >Login</button>
        {{ mensajeDeError }}
      </form>
  </div>
</template>

<script>
import {usuarioStore} from '../store/usuarioStore.js'
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const store = usuarioStore();
    const {estaLogeado}  = storeToRefs(store);
    const {loginUser} = store;
    return {
      store, loginUser, estaLogeado
    }
  },
  data() {
    return {
      usuario : {name: "", password: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async login() {
      try {
        await this.loginUser({...this.usuario})
        if (this.estaLogeado) {
          location = '/'
        } else {
          this.mensajeDeError = "Usuario o password inconrrecto"  
        }
      } catch(e) {
        this.mensajeDeError = "Se produjo un error"
      }

    }
  }
}
</script>

<style>

</style>