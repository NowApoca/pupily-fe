<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/"><strong class="is-size-4">Pupily</strong></router-link>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/publiclist" class="navbar-item">All Pupilys</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link v-if="estaLogeado" to="/mypupilylist" class="navbar-item">My Pupilys</router-link>
        <router-link v-if="estaLogeado" to="/projects" class="navbar-item">My Projects</router-link>
        <router-link v-if="estaLogeado" to="/institutions" class="navbar-item">Institutions</router-link>
        <router-link v-if="estaLogeado" to="/create/admin" class="navbar-item">Crear admin</router-link>
        <router-link v-if="estaLogeado" to="/create/project" class="navbar-item">Crear Projecto</router-link>
        <router-link v-if="estaLogeado" to="/create/institution" class="navbar-item">Crear institucion</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
              <router-link v-if="!estaLogeado" class="button is-dark navbar-item" to="/login">Sign In</router-link>
              <a v-if="estaLogeado" class="button is-dark navbar-item" @click="logout">Sign Out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { usuarioStore } from "../src/store/usuarioStore.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = usuarioStore();
    store.getUsuario();
    const { estaLogeado, usuario } = storeToRefs(store);
    let soyPadrino = usuario && usuario.type == 'sponsor';
    let soyPupily = usuario && usuario.type == 'pupily';
    let soyAdmin = usuario && usuario.type == 'admin';
    return {
      estaLogeado, soyPadrino, soyPupily, soyAdmin, usuario: usuario
    };
  },
  methods: {
    logout() {
      usuarioStore().userLogout();
      this.$router.push('/');
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
	 margin-top: 25px;
	 margin-bottom: 30px;
}
 nav a, nav router-link {
	 font-weight: bold;
	 color: #2c3e50;
}
 nav a.router-link-exact-active, nav router-link.router-link-exact-active {
	 color: #d88d00;
}
</style>
