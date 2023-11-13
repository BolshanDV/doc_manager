import './assets/style/main.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(VueAxios, axios)
    .mount('#app')

