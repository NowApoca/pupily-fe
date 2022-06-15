import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAll(){
      return apiClient.get('/institutions')
    },
    deleteInstitution(id, usuario){
        console.log(usuario, 'usuario')
        return apiClient.delete('/institutions/' + id, {
            headers: {
                "Authorization": usuario.token
            }
        })
    },
    createInstitution(name, usuario){
        return axios.post('http://localhost:3001/institutions', {
            name
        }, {
            headers: {
                "Authorization": usuario.token
            }
        });
    },
    getInstitutionById(id){
      return apiClient.get('/institutions/'+ id)
    },
    editInstitution(institutionData, id, usuario){
        return apiClient.put('/institutions/' + id, institutionData, {
            headers: {
                "Authorization": usuario.token
            }
        })
    },
}

