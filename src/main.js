import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import "bulma/css/bulma.css";

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
