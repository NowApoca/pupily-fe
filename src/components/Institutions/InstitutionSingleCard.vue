
<template>
  <div class="pupily-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ institution.name }}</h1>
          <h2 class="subtitle">Institution stats</h2>
        </div>
      </div>
    </section>
    <section class="pupily-content">
      <div class="container">
        <p class="is-size-4 description">Institution description</p>
        <p class="is-size-4">Ubicacion: {{institution.location}}</p>
        <p class="is-size-4">Descripcion: {{institution.description}}</p>
      </div>
    </section>
    <section v-if="soyAdmin">
        <form @submit.prevent="editInstitution">
        Name <input type="text" v-model="institutionNewData.name">
        <br>
        Ubicacion <input type="text" v-model="institutionNewData.location">
        <br>
        Descripcion <input type="text" v-model="institutionNewData.description">
        <br>
        <button type="submit" >Updatear institution</button>
        {{ mensajeDeErrorEdit }}
      </form>
    </section>
    <section  v-if="soyAdmin">
      <button v-on:click="deleteInstitution" >Borrar inst</button>
        {{ mensajeDeErrorDelete }}
    </section>
  </div>
</template>

<script>
import service from '../../services/apiInstitution'
import { usuarioStore } from "../../store/usuarioStore";
import { storeToRefs } from 'pinia'
import { useRoute } from "vue-router";

export default {
	props: ['institution'],
  setup() {
    const store = usuarioStore();
    const router = useRoute()
    store.getUsuario();
    const { usuario } = storeToRefs(store);

    const soyAdmin = usuario && usuario.value.type == 'admin'
    return {
		usuario, institutionId: router.params.id, soyAdmin
    }
  },
  data() {
    return {
        institutionNewData: {name: "", location: "", description: ""},
      mensajeDeErrorEdit : '',
      mensajeDeErrorDelete : '',
    }
  },
  methods: {
    async editInstitution(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.editInstitution(this.institutionNewData, this.institutionId, usuario);
			location.reload()
		}catch(e){
			this.mensajeDeError = "ERROR AL BORRAR INSTITUCION"
		}
    },
    async deleteInstitution(e) {
		e.preventDefault()
		let usuario = this.usuario;
		try{
			await service.deleteInstitution(this.institutionId, usuario);
			this.$router.push('/institutions');
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