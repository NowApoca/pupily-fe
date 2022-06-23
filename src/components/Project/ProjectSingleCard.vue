
<template>
  <div class="pupily-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ project.name }}</h1>
        </div>
      </div>
    </section>
    <section class="pupily-content">
      <div class="container">
        <p class="is-size-4 description">Project description: {{ project.descripcion }}</p>
        <p class="is-size-4">Project porcentaje: {{ project.porcentaje }}</p>
      </div>
    </section>
        <br>
        <br>
    <section>
        <form @submit.prevent="editProject">
          EDITAR PROYECTO
        <br>
        Name <input type="text" v-model="projectNewData.name">
        <br>
        Descripcion <input type="text" v-model="projectNewData.descripcion">
        <br>
        Porcentaje <input type="text" v-model="projectNewData.porcentaje">
        <br>
        <button type="submit" >Updatear project</button>
        {{ mensajeDeError }}
      </form>
    </section>
  </div>
</template>

<script>
import service from '../../services/apiProject'
import { usuarioStore } from "../../store/usuarioStore";
import { storeToRefs } from 'pinia'

export default {
	props: ['project'],
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
        projectNewData: {...this.project},
      mensajeDeError : ''
    }
  },
  methods: {
    async editProject(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.editProject(this.projectNewData, this.project.id, usuario);
			location.reload()
		}catch(e){
            console.log(e)
			this.mensajeDeError = "ERROR AL EDITAR PROJECT"
		}
    }
  }
};

</script>


<style scoped>
.card {
	background-image: url('../../assets/baby-pupi.jpg');
	height: 200px;
	width: 20em;
	background-position: center;
	background-size: cover;
	text-align: center;
}
.card-content {
	padding-top: 50px;
	color: #fff;
	background-color: rgba(152, 152, 152, 0.35);
	top: 0;
	padding: 10px;
	height: 200px;
	width: 100%;
}
.card-content span {
	font-size: 18px;
	text-align: center;
	width: 100%;
	bottom: 10px;
	right: 0;
}
.card-content h2 {
	margin-top: 10px;
}
.event-date {
	background-color: #151515;
	color: #fff;
	font-size: 0.75em;
	padding: 2px 10px;
	position: absolute;
	top: 0;
	right: 0;
}
</style>