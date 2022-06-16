<template>
	<div class="card">
		<div class="card-content">
			<h2 class="is-size-4 has-text-weight-bold">{{ institution.name }}</h2>
			<span>DESCRIPTION</span>
      		  {{ mensajeDeError }}
		</div>
	</div>
</template>


<script>
import institutionService from '../../services/apiInstitution'
import { usuarioStore } from "../../store/usuarioStore";
import { storeToRefs } from 'pinia'

export default {
	props: ['institution'],
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
  }
};

</script>


<style scoped>
.card {
	height: 200px;
	width: 20em;
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