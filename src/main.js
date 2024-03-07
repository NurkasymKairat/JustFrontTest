import './assets/sass/app.scss'
import axios from "axios";
import { createApp } from 'vue'
import App from './App.vue'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = window.origin

createApp(App).mount('#app')
