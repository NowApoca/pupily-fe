<template>
	<div class="card">
		<div class="card-content">
			<h2 class="is-size-4 has-text-weight-bold">{{ project.name }}</h2>
			<span>DESCRIPTION</span>
      		  <button v-on:click="editInstitution" >Login</button>
      		  {{ mensajeDeError }}
		</div>
	</div>
</template>


<script>
import projectService from '../../services/apiInstitution'
import { usuarioStore } from "../../store/usuarioStore";
import { storeToRefs } from 'pinia'

export default {
	props: ['project'],
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
      mensajeDeError : ''
    }
  },
  methods: {
    async editInstitution(e) {
		e.preventDefault()
		let usuario = JSON.parse(this.usuario);
		try{
			await projectService.editInstitution(this.project.id, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
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