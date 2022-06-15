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
      return apiClient.get('/users')
    },
    createAdmin(admin, usuario){
        return axios.post('http://localhost:3001/users/admin', admin, {
            headers: {
                "Authorization": usuario.token
            }
        });
    },
    getUserById(id){
      return apiClient.get('/users/'+ id)
    },
    sponsorPupily(id, usuario){
        return axios.post('http://localhost:3001/users/sponsor/' + id, {}, {
            headers: {
                "Authorization": usuario.token
            }
        });
    },
    desponsorPupily(id, usuario){
        return axios.post('http://localhost:3001/users/sponsor/remove/' + id, {}, {
            headers: {
                "Authorization": usuario.token
            }
        });
    },
}

