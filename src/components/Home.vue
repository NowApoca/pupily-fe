<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <img alt="Pupily logo" style="width: 20%" src="../assets/logo.png" />
          <h1 class="title">Welcome to Pupily</h1>
          <h2 class="subtitle">Making an equal world, together</h2>
          <div v-if="!estaLogeado" class="button-block">
            <button class="button is-xl is-dark">Sign Up to start at Pupily</button>
          </div>
        </div>
      </div>
    </section>

    <PupilysList />
  </div>
</template>
<script>
  import PupilysList from './PupilysList.vue';
  import { usuarioStore } from "../store/usuarioStore.js";
  import { storeToRefs } from 'pinia'

  export default {
    name: 'home',
    components: {
      PupilysList,
    },
    setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store)
    return {
      store, estaLogeado
    };
  }
  };
</script>
<style scoped>
.hero {
  text-align: center;
  background-image: url("../assets/studyteens.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
}
.button {
  margin-right: 50px;
  padding-left: 50px;
  padding-right: 50px;
}
.welcome {
  width: 400px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
.is-xl {
  font-size: 1.7rem;
}
</style>