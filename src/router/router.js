import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Logout from '../components/Logout.vue'
import About from '../components/About.vue'
import PupilySingle from '../components/PupilySingle.vue'
import ProjectSingle from '../components/Project/ProjectSingle.vue'
import InstitutionSingle from '../components/Institutions/InstitutionSingle.vue'
import PublicPupilyList from '../components/PublicPupilyList.vue'
import AdminInstitutionList from '../components/Institutions/AdminInstitutionList.vue'
import CreateInstitution from '../components/Institutions/CreateInstitution.vue'
import CreateProject from '../components/Project/CreateProject.vue'
import CreateAdmin from '../components/Admin/CreateAdmin.vue'
import MyPupilyList from '../components/MyPupilyList.vue'
import PupilyProjectList from '../components/Project/PupilyProjectList.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp }, 
    { path: '/pupily/:id', component: PupilySingle },
    { path: '/project/:id', component: ProjectSingle },
    { path: '/institution/:id', component: InstitutionSingle },
    { path: '/publiclist', component: PublicPupilyList },
    { path: '/institutions', component: AdminInstitutionList },
    { path: '/projects', component: PupilyProjectList },
    { path: '/create/institution', component: CreateInstitution },
    { path: '/create/project', component: CreateProject },
    { path: '/create/admin', component: CreateAdmin },
 
    { path: '/mypupilylist', component: MyPupilyList , meta: {requiresAuth:true}},
    { path: '/logout', component: Logout  , meta: {requiresAuth:true}},

    { path: '/:pathMatch(.*)*', component: NotFound },     
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

router.beforeEach(  (to, from, next) => {

    const login = localStorage.getItem('usuario')

    if( to.matched.some(record => record.meta.requiresAuth ) && !login ) {
        next('/')
    } else {
        next()
    }

})



export default router