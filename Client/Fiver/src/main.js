import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import vue3GoogleLogin from 'vue3-google-login';

import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
   store.router = markRaw(router)
})

// app.use(vue3GoogleLogin, {
//    clientId:
//       '868285994371-89b3n8ro75hens0cdf6ot39ro5rrtt91.apps.googleusercontent.com',
// });

app.use(pinia)
app.use(router)

app.mount('#app')
