import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPupilyProjects(usuario){
      return apiClient.get(`/projects`, {
          headers: {
              Authorization: usuario.token
          }
      })
    },
    getPupilyProjectsByPupily(userId){
      return apiClient.get(`/projects/by/user/${userId}`)
    },
    getProjectById(id){
      return apiClient.get('/projects/'+ id)
    },
    createProject(payload, usuario){
        return axios.post('http://localhost:3001/projects', payload, {
            headers: {
                "Authorization": usuario.token
            }
        });
    },
    editProject(projectData, id, usuario){
        return apiClient.put('/projects/' + id, projectData, {
            headers: {
                "Authorization": usuario.token
            }
        })
    },
}

