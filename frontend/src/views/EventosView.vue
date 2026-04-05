<template>
  <section class="eventos">
    <!-- Sello institucional -->
    <div class="sello-institucion">
      <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
    </div>

    <h1>Eventos</h1>
    <p class="intro">Calendario de eventos y actividades.</p>

    <!-- Grid de eventos -->
    <div class="cards-grid">
      <div 
        v-for="(evento, i) in eventos" 
        :key="i" 
        class="evento-card" 
        @click="abrirModal(evento)"
      >
        <h2>{{ evento.titulo }}</h2>
        <p class="fecha">{{ evento.fecha }}</p>
        <p class="desc">{{ evento.descripcion }}</p>
      </div>
    </div>

    <!-- Modal detalle evento -->
    <div v-if="showModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-close" @click="cerrarModal">✖</button>
        <h2 class="modal-title">{{ selectedEvento.titulo }}</h2>
        <p class="fecha">{{ selectedEvento.fecha }}</p>
        <p>{{ selectedEvento.descripcion }}</p>
        <!--div class="modal-actions">
          <a :href="selectedEvento.url" target="_blank" class="btn ver">Ver más</a>
        </div-->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const selectedEvento = ref({})

const abrirModal = (evento) => {
  selectedEvento.value = evento
  showModal.value = true
}
const cerrarModal = () => {
  showModal.value = false
  selectedEvento.value = {}
}

const eventos = ref([
  { titulo: 'Jornada de Capacitación en Seguridad Eléctrica', fecha: '15/04/2026', descripcion: 'Encuentro técnico para instaladores habilitados.', url: '/docs/evento1.pdf' },
  { titulo: 'Charla sobre Energías Renovables', fecha: '22/04/2026', descripcion: 'Presentación de proyectos locales de energías limpias.', url: '/docs/evento2.pdf' },
  { titulo: 'Reunión de Comisión Directiva', fecha: '30/04/2026', descripcion: 'Sesión mensual de la comisión para tratar temas institucionales.', url: '/docs/evento3.pdf' }
])
</script>

<style scoped>
.eventos {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
h1 {
  color: #004080;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  border-bottom: 3px solid #004080;
  display: inline-block;
  padding-bottom: 0.5rem;
}
.intro {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #555;
}

/* Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 1rem;
}
.evento-card {
  background: #fdfdfd;
  border: 2px solid #004080;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}
.evento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.evento-card h2 {
  color: #004080;
  margin-bottom: 0.5rem;
}
.evento-card .fecha {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
}
.evento-card .desc {
  font-size: 1rem;
  color: #555;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  max-width: 90%;
  width: 600px;
  position: relative;
}
.modal-close {
  color:#004080;
  position: absolute;
  top: 10px; right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.modal-title {
  color: #004080;
  margin-bottom: 0.5rem;
}
.modal-actions {
  margin-top: 1rem;
  text-align: right;
}
.btn.ver {
  background: #004080;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}
.btn.ver:hover {
  background: #002b57;
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
  h1 { font-size: 1.8rem; }
  .evento-card h2 { font-size: 1.2rem; }
}
@media (max-width: 480px) {
  .eventos { padding: 1rem; }
  h1 { font-size: 1.5rem; }
}
</style>
