import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CapacitacionesView from '../views/CapacitacionesView.vue'
import EventosView from '../views/EventosView.vue'
import DocumentacionView from '../views/DocumentacionView.vue'
import ComisionView from '../views/ComisionView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/capacitaciones', name: 'Capacitaciones', component: CapacitacionesView },
  { path: '/eventos', name: 'Eventos', component: EventosView },
  { path: '/documentacion', name: 'Documentacion', component: DocumentacionView },
  { path: '/comision', name: 'Comision', component: ComisionView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
