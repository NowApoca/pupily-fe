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
      return apiClient.get('/projects', {
          headers: {
              Authorization: usuario.token
          }
      })
    },
    getProjectById(id){
      return apiClient.get('/projects/'+ id)
    },
    createProject(name, usuario){
        return axios.post('http://localhost:3001/projects', {
            name
        }, {
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

