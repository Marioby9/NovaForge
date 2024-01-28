import '@/assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import { faEye, faEyeSlash, faArrowLeft, faTrash, faPenToSquare, faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faEye, faEyeSlash, faGithub, faArrowLeft, faTrash, faPenToSquare, faTemperatureThreeQuarters, faDroplet, faLightbulb )


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
