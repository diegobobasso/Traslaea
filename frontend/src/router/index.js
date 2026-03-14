import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CapacitacionesView from '../views/CapacitacionesView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import EventosView from '../views/EventosView.vue'
import DocumentacionView from '../views/DocumentacionView.vue'
import LoginAsociadosView from '../views/LoginAsociados.vue'
import LoginAlumnosView from '../views/LoginAlumnos.vue'
import HerySil from '../views/HerySil.vue'
import ComisionView from '../views/ComisionView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/capacitaciones', name: 'Capacitaciones', component: CapacitacionesView },
  { path: '/servicios', name: 'Servicios', component: ServiciosView },
  { path: '/eventos', name: 'Eventos', component: EventosView },
  { path: '/documentacion', name: 'Documentacion', component: DocumentacionView },
  { path: '/login-asociados', name: 'LoginAsociados', component: LoginAsociadosView },
  { path: '/login-alumnos', name: 'LoginAlumnos', component: LoginAlumnosView },
  { path: '/comision', name: 'Comision', component: ComisionView },
  { path: '/herysil', name: 'herysil', component: HerySil },
  { path: '/contacto', name: 'Contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
