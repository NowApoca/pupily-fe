import { defineStore } from 'pinia'
import axios from 'axios'

export const usuarioStore = defineStore('main', {
  
    state: () => {
        return { 
            usuario : {},
            estaLogeado : false
        }
    },
  
    actions: {
        async loginUser(usuario) {
            try {
                const data = await axios.post('http://localhost:3001/users/login', usuario);
                this.estaLogeado = true;
                this.usuario = JSON.stringify(data.data);
                localStorage.setItem('usuario', JSON.stringify(data.data));
            } catch (error) {
                console.log(error);
            }
        },
        async registerUser(usuario){
            try {
                await axios.post('http://localhost:3001/users', usuario);
            } catch (error) {
                console.log(error);
            }
        },
        userLogout() {
            this.estaLogeado = false;
            this.usuario = {};
            location.reload();
            localStorage.removeItem('usuario');
        },
        getUsuario(){
            let usuario = localStorage.getItem('usuario');
            if(usuario){
                this.estaLogeado = true;
            }else{
                this.estaLogeado = false;
            }
            this.usuario = usuario;
        }
    },

})