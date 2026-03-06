import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css' // Importamos estilos globales

createApp(App).use(router).mount('#app')
