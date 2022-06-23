<template>
	<div class="card">
		<div class="card-content">
			<h2 class="is-size-4 has-text-weight-bold">{{ pupily.name }}</h2>
			<span>DESCRIPTION</span>
		</div>
	</div>
</template>

<style scoped>
.card {
	background-image: url('../assets/baby-pupi.jpg');
	height: 200px;
	width: 20em;
	min-width: 20em;
	background-position: center;
	background-size: cover;
	text-align: center;
}
.card-content {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
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

<script>
import service from '../services/apiUser'
import { usuarioStore } from "../store/usuarioStore";
import { storeToRefs } from 'pinia'

export default {
	props: ['pupily'],
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
      mensajeDeError : ''
    }
  },
  methods: {
    async sponsorPupily(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.sponsorPupily(this.pupily.id, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
		}
    },
    async desponsorPupily(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.desponsorPupily(this.pupily.id, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
		}
    }
  }
};

</script>