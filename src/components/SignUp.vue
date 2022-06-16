<template>
  <div>
      <h2>Login</h2>      
      <form @submit.prevent="signup">
        Nombre <input type="text" v-model="usuario.name">
        Password <input type="password" v-model="usuario.password">
        Confirmar password <input type="password" v-model="usuario.confirmPassword">
        <label for="cars">Elija tipo de usuario:</label>
        <select v-model="usuario.type">
          <option value="pupily">Pupily</option>
          <option value="sponsor">Promotor</option>
        </select>
        <button type="submit" >Signup</button>
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
    const {registerUser} = store;
    return {
      store, registerUser, estaLogeado
    }
  },
  data() {
    return {
      usuario : {name: "", password: "", confirmPassword: "", type: ""},
      mensajeDeError : ''
    }
  },
  methods: {
    async signup() {
      try {
        if(this.usuario.password != this.usuario.confirmPassword){
          this.mensajeDeError = "Las contraseñas deben ser iguales" 
        } else {
          await this.registerUser({
            name: this.usuario.name,
            password: this.usuario.password,
            type: this.usuario.type,
          })
          this.$router.push('/')
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