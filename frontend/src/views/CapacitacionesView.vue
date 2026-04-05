<template>
  <section>
    <div class="sello-institucion">
      <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
    </div>

    <h1 class="page-title">Nuestros Cursos</h1>

    <div class="cursos-grid">
      <div v-for="(curso, index) in cursos" :key="index" class="curso-block">
        <h2>{{ curso.title }}</h2>
        <p>{{ curso.description }}</p>
        <button class="btn" @click="abrirModal(curso.title)">Más información</button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-close" @click="cerrarModal">✖</button>
        <h2>Solicitar información sobre: {{ selectedCurso }}</h2>
        <form @submit.prevent="enviarSolicitud">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input v-model="form.nombre" type="text" id="nombre" required />
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea v-model="form.mensaje" id="mensaje" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn">Enviar solicitud</button>
          <p v-if="statusMessage" :class="statusClass">{{ statusMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const cursos = ref([
  { title: 'Instalación de cámaras de seguridad', description: 'Curso orientado a la instalación, configuración y mantenimiento de sistemas de videovigilancia, garantizando seguridad en hogares y empresas.' },
  { title: 'Instalación de Aire Acondicionado', description: 'Formación práctica en montaje y puesta en marcha de equipos de climatización, siguiendo normas de eficiencia energética y seguridad.' },
  { title: 'Reparación de Aire Acondicionado', description: 'Capacitación en diagnóstico y reparación de fallas en sistemas de aire acondicionado, con enfoque en prolongar la vida útil de los equipos.' },
  { title: 'Refrigeración', description: 'Curso técnico sobre instalación y mantenimiento de sistemas de refrigeración comercial y doméstica, aplicando buenas prácticas de conservación.' },
  { title: 'Auxiliar Electricista', description: 'Introducción a las tareas básicas de electricidad, asistencia en instalaciones y mantenimiento bajo supervisión de profesionales habilitados.' },
  { title: 'Instalador Electricista Habilitado Categoría III', description: 'Formación oficial para obtener habilitación en instalaciones eléctricas de baja tensión, cumpliendo normativas vigentes.' },
  { title: 'Automatismos', description: 'Curso especializado en sistemas de automatización eléctrica y electrónica para control de procesos y dispositivos.' },
  { title: 'Electromecánica', description: 'Capacitación integral en el mantenimiento y reparación de equipos electromecánicos, combinando conocimientos de electricidad y mecánica.' }
])

const showModal = ref(false)
const selectedCurso = ref(null)
const form = ref({ nombre: '', email: '', mensaje: '' })
const statusMessage = ref('')
const statusClass = ref('')

const abrirModal = (curso) => {
  selectedCurso.value = curso
  form.value.mensaje = `Quiero más información sobre el curso: ${curso}`
  showModal.value = true
}

const cerrarModal = () => {
  showModal.value = false
  statusMessage.value = ''
}

const enviarSolicitud = async () => {
  try {
    await emailjs.send('service_h5cjsxa','Consulta_a_mi',{
      from_name: form.value.nombre,
      from_email: form.value.email,
      message: form.value.mensaje,
    },'rt5U45x1G4tHZDe8A')

    form.value = { nombre: '', email: '', mensaje: '' }
    statusMessage.value = 'Solicitud enviada con éxito ✔️'
    statusClass.value = 'success'
  } catch (error) {
    console.error('Error al enviar solicitud:', error)
    statusMessage.value = 'Hubo un problema al enviar la solicitud ❌'
    statusClass.value = 'error'
  }
}
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 2.2rem;
  color: #004080;
  margin-bottom: 2rem;
  border-bottom: 3px solid #004080;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.cursos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.curso-block {
  background: #fdfdfd;
  border-left: 4px solid #004080;
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
}
.curso-block:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.curso-block h2 {
  color: #004080;
  margin-top: 0;
  margin-bottom: 1rem;
}

.btn {
  background: #004080;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s, transform 0.2s;
}
.btn:hover {
  background: #002b57;
  transform: translateY(-2px);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
}
.modal-close {
  color:#004080;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.2rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #004080;
}
input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
input:focus, textarea:focus {
  border-color: #004080;
  outline: none;
}

.success {
  margin-top: 1rem;
  color: #006400;
  font-weight: 600;
}
.error {
  margin-top: 1rem;
  color: #b00020;
  font-weight: 600;
}

/* Sello institucional */
.sello-institucion {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 0.08;
  pointer-events: none;
  text-align: center;
}

.sello-institucion img {
  width: 600px;
  max-width: 80vw;
  filter: grayscale(100%) brightness(0.5);
}

/* Responsividad */
@media (max-width: 768px) {
  .cursos-grid {
    grid-template-columns: 1fr;
  }
}
</style>

