<template>
  <div class="margen">  
    <section>
      <!-- Sello institucional -->
      <div class="sello-institucion">
        <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
      </div>
    </section>

    <section class="marco-normativo">
      <h1>Marco Normativo</h1>

      <!-- Bloques de normativa -->
      <div class="normativa-block" v-for="(bloque, i) in normativa" :key="i">
        <h2>{{ bloque.titulo }}</h2>
        <div class="cards-grid">
          <div 
            v-for="(doc, j) in bloque.docs" 
            :key="j" 
            class="doc-card" 
            @click="abrirModal(doc)"
          >
            <strong>{{ doc.nombre }}</strong>
            <p class="doc-desc">Haz clic para ver el documento</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal visor PDF -->
    <div v-if="showModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-close" @click="cerrarModal">✖</button>
        <h2 class="modal-title">{{ selectedDoc.nombre }}</h2>
        <embed :src="selectedDoc.url" type="application/pdf" width="100%" height="600px" />
        <!--div class="modal-actions">
          <a :href="selectedDoc.url" download class="btn descargar">Descargar PDF</a>
        </div-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const selectedDoc = ref({})

const abrirModal = (doc) => {
  selectedDoc.value = doc
  showModal.value = true
}
const cerrarModal = () => {
  showModal.value = false
  selectedDoc.value = {}
}

const normativa = ref([
  {
    titulo: 'Leyes',
    docs: [
      { nombre: 'Ley de Seguridad Eléctrica N° 10281', url: '/docs/Ley10281.pdf' },
      { nombre: 'Ley Provincial 10670 - Modificatoria Ley 10281', url: '/docs/LEY-10670.pdf' },
      { nombre: 'Alcances Ley Nº 10670', url: '/docs/Alcances-Ley-10670.pdf' }
    ]
  },
  {
    titulo: 'Decretos',
    docs: [
      { nombre: 'Decreto 1022/2015', url: '/docs/decreto 1022-2015.pdf' },
      { nombre: 'Anexo del Decreto 1022/2015', url: '/docs/anexo_Decreto_1022.pdf' }
    ]
  },
  {
    titulo: 'Resoluciones',
    docs: [
      { nombre: 'Resolución Nº 26/2015 - Creación Registro de Instaladores Habilitados', url: '/docs/res26regristro_electricistas_cap.pdf' },
      { nombre: 'Anexos - Resolución Nº 26/2015 (Anexo V Modificado RG 97/2018)', url: '/docs/res26anexos.pdf' },
      { nombre: 'Resolución Nº 5/2016 - Disposiciones Técnicas. Régimen de Infracciones y Sanciones', url: '/docs/res05_normativatecnica_leyse.pdf' },
      { nombre: 'Resolución Nº 49/2016 - Reglamentación Técnica', url: '/docs/res49modificacion_res26.pdf' },
      { nombre: 'Resolución Nº 8/2017 – Punto de Conexión y Medición', url: '/docs/res8certificacion_pcm.pdf' },
      { nombre: 'Resolución Nº 43/2017 – Modificatoria RG 49/2016', url: '/docs/RG-43-2017-Modificatoria-Anexo-I-RG-49-2016-Seguridad-Eléctrica-1.pdf' },
      { nombre: 'Resolución Nº 46/2017 - Inicio Régimen de Seguridad Eléctrica', url: '/docs/RG-46-2017-Inicio-régimen-de-seguridad-eléctrica-.pdf' },
      { nombre: 'Resolución Nº 50/2017 – Incumbencias Instalador Cat. III', url: '/docs/res50_disposiciones_complementarias_se.pdf' },
      { nombre: 'Resolución Nº 11/2018 – Modificación ET 21', url: '/docs/11Modificacion_especificacion_tecnicaN21.pdf' },
      { nombre: 'Resolución Nº 54/2018 – Certificación Instalaciones Existentes', url: '/docs/Resgral54.pdf' },
      { nombre: 'Resolución Nº 84/2018 – Condiciones de Reanudación/Conexión', url: '/docs/84modificacion_rg11-2018.pdf' },
      { nombre: 'Resolución Nº 97/2018 – Régimen de Infracciones y Sanciones', url: '/docs/97_2018AnexoRISSE.pdf' },
      { nombre: 'Resolución Nº 17/2021 y Anexos', url: '/docs/RG-17-2021-Modificatoria-RG-26-2015-05-2016-Y-49-2016-Seguridad-Eléctrica_firmado.pdf' },
      { nombre: 'Resolución Nº 41/2021 - Programa de Contenidos', url: '/docs/RG-41-2021-Rectificatoria-RG-17-2021_firmado.pdf' },
      { nombre: 'Resolución Nº 10/2022 - Modificación Reglamentación Técnica', url: '/docs/RG-10-2022-Modificacion-a-la-Reglamentacion-Tecnica-Ejecucion-y-verificacion-intalaciones-electricas__firmado.pdf' },
      { nombre: 'Resolución General Nº 4/2023 - Modificación Reglamentación Técnica', url: '/docs/RG-04-2023-Reglamentacion-Tecnica-para-la-Ejecucion-y-Verificacion-de-Instalaciones-Electricas-Vulnerables-1.pdf' },
      { nombre: 'Resolución General Nº 109/2023 - Profesiones Autorizadas', url: '/docs/RG-109-2023-0521-071769-2023-Resolucion-Modificatoria-50-2017-determinacion-de-incumbencias-V2-1.docx_firmado.pdf' },
      { nombre: 'Resolución General Nº 42/2025 - Modificatoria Régimen de Infracciones', url: '/docs/RG-42-2025-Modificatoria-Regimen-de-infracciones-y-Sanciones-de-Ley-de-Seguridad-Eléctrica-1_firmado.pdf' },
      { nombre: 'Resolución General Nº 96/2025 - Prórroga Vigencia Instaladores', url: '/docs/RG-96-2025-Prorroga-plazo-de-Vigencia-de-Instaladores-Habilitados-1_firmado.pdf' }
    ]
  },
  {
    titulo: 'Especificaciones Técnicas',
    docs: [
      { nombre: 'ET 21 – Puntos de Conexión y Medición', url: '/docs/et21.pdf' },
      { nombre: 'RG 11/2018 – Modificación ET 21', url: '/docs/rg-11-2018.pdf' },
      { nombre: 'RG 84/2018 – Modificación RG 11/2018', url: '/docs/rg-84-2018.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aéreas hasta 5 kW', url: '/docs/tipos-acometidas-aereas-5kw.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Subterráneas hasta 5 kW', url: '/docs/tipos-acometidas-subterraneas-5kw.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aérea y Subterránea de 40 a 300 kW', url: '/docs/tipos-acometidas-40-300kw.pdf' },
      { nombre: 'ET 21 - Punto 4.6.7 - Aclaración Distancias Mínimas a Instalaciones de Gas', url: '/docs/et21-punto-467.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aérea y Subterránea de 6 a 39 kW', url: '/docs/tipos-acometidas-6-39kw.pdf' }
    ]
  }
])
</script>

<style scoped>
.margen { margin: 2rem; }
.marco-normativo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
h1 {
  color: #004080;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  border-bottom: 3px solid #004080;
  display: inline-block;
  padding-bottom: 0.5rem;
}
h2 {
  color: #004080;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #004080;
  padding-bottom: 0.3rem;
}

/* Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 1rem;
}
.doc-card {
  background: #fdfdfd;
  border: 2px solid #004080;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}
.doc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.doc-card strong {
  color: #004080;
  display: block;
  margin-bottom: 0.5rem;
}
.doc-desc {
  font-size: 0.9rem;
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
  width: 800px;
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
  margin-bottom: 1rem;
}
.modal-actions {
  margin-top: 1rem;
  text-align: right;
}
.btn.descargar {
  background: #cc9900;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}
.btn.descargar:hover {
  background: #a67300;
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
  h2 { font-size: 1.3rem; }
}
@media (max-width: 480px) {
  .marco-normativo { padding: 1rem; }
  h1 { font-size: 1.5rem; }
}
</style>

<!--template>
  <div class="margen">  
    <section>
      <div class="sello-institucion">
        <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
      </div>
    </section>

    <section class="marco-normativo">
      <h1>Marco Normativo</h1>

      <div class="normativa-block" v-for="(bloque, i) in normativa" :key="i">
        <h2>{{ bloque.titulo }}</h2>
        <ul>
          <li v-for="(doc, j) in bloque.docs" :key="j">
            <strong>{{ doc.nombre }}</strong><br>
            <button class="btn ver" @click="abrirModal(doc)">Ver PDF</button>
          </li>
        </ul>
      </div>
    </section>

    <div v-if="showModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-close" @click="cerrarModal">✖</button>
        <h2 class="modal-title">{{ selectedDoc.nombre }}</h2>
        <embed :src="selectedDoc.url" type="application/pdf" width="100%" height="600px" />
        <div class="modal-actions">
          <a :href="selectedDoc.url" download class="btn descargar">Descargar PDF</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const selectedDoc = ref({})

const abrirModal = (doc) => {
  selectedDoc.value = doc
  showModal.value = true
}
const cerrarModal = () => {
  showModal.value = false
  selectedDoc.value = {}
}

const normativa = ref([
  {
    titulo: 'Leyes',
    docs: [
      { nombre: 'Ley de Seguridad Eléctrica N° 10281', url: '/docs/Ley10281.pdf' },
      { nombre: 'Ley Provincial 10670 - Modificatoria Ley 10281', url: '/docs/LEY-10670.pdf' },
      { nombre: 'Alcances Ley Nº 10670', url: '/docs/Alcances-Ley-10670.pdf' }
    ]
  },
  {
    titulo: 'Decretos',
    docs: [
      { nombre: 'Decreto 1022/2015', url: '/docs/decreto 1022-2015.pdf' },
      { nombre: 'Anexo del Decreto 1022/2015', url: '/docs/anexo_Decreto_1022.pdf' }
    ]
  },
  {
    titulo: 'Resoluciones',
    docs: [
      { nombre: 'Resolución Nº 26/2015 - Creación Registro de Instaladores Habilitados', url: '/docs/res26regristro_electricistas_cap.pdf' },
      { nombre: 'Anexos - Resolución Nº 26/2015 (Anexo V Modificado RG 97/2018)', url: '/docs/res26anexos.pdf' },
      { nombre: 'Resolución Nº 5/2016 - Disposiciones Técnicas. Régimen de Infracciones y Sanciones', url: '/docs/res05_normativatecnica_leyse.pdf' },
      { nombre: 'Resolución Nº 49/2016 - Reglamentación Técnica', url: '/docs/res49modificacion_res26.pdf' },
      { nombre: 'Resolución Nº 8/2017 – Punto de Conexión y Medición', url: '/docs/res8certificacion_pcm.pdf' },
      { nombre: 'Resolución Nº 43/2017 – Modificatoria RG 49/2016', url: '/docs/RG-43-2017-Modificatoria-Anexo-I-RG-49-2016-Seguridad-Eléctrica-1.pdf' },
      { nombre: 'Resolución Nº 46/2017 - Inicio Régimen de Seguridad Eléctrica', url: '/docs/RG-46-2017-Inicio-régimen-de-seguridad-eléctrica-.pdf' },
      { nombre: 'Resolución Nº 50/2017 – Incumbencias Instalador Cat. III', url: '/docs/res50_disposiciones_complementarias_se.pdf' },
      { nombre: 'Resolución Nº 11/2018 – Modificación ET 21', url: '/docs/11Modificacion_especificacion_tecnicaN21.pdf' },
      { nombre: 'Resolución Nº 54/2018 – Certificación Instalaciones Existentes', url: '/docs/Resgral54.pdf' },
      { nombre: 'Resolución Nº 84/2018 – Condiciones de Reanudación/Conexión', url: '/docs/84modificacion_rg11-2018.pdf' },
      { nombre: 'Resolución Nº 97/2018 – Régimen de Infracciones y Sanciones', url: '/docs/97_2018AnexoRISSE.pdf' },
      { nombre: 'Resolución Nº 17/2021 y Anexos', url: '/docs/RG-17-2021-Modificatoria-RG-26-2015-05-2016-Y-49-2016-Seguridad-Eléctrica_firmado.pdf' },
      { nombre: 'Resolución Nº 41/2021 - Programa de Contenidos', url: '/docs/RG-41-2021-Rectificatoria-RG-17-2021_firmado.pdf' },
      { nombre: 'Resolución Nº 10/2022 - Modificación Reglamentación Técnica', url: '/docs/RG-10-2022-Modificacion-a-la-Reglamentacion-Tecnica-Ejecucion-y-verificacion-intalaciones-electricas__firmado.pdf' },
      { nombre: 'Resolución General Nº 4/2023 - Modificación Reglamentación Técnica', url: '/docs/RG-04-2023-Reglamentacion-Tecnica-para-la-Ejecucion-y-Verificacion-de-Instalaciones-Electricas-Vulnerables-1.pdf' },
      { nombre: 'Resolución General Nº 109/2023 - Profesiones Autorizadas', url: '/docs/RG-109-2023-0521-071769-2023-Resolucion-Modificatoria-50-2017-determinacion-de-incumbencias-V2-1.docx_firmado.pdf' },
      { nombre: 'Resolución General Nº 42/2025 - Modificatoria Régimen de Infracciones', url: '/docs/RG-42-2025-Modificatoria-Regimen-de-infracciones-y-Sanciones-de-Ley-de-Seguridad-Eléctrica-1_firmado.pdf' },
      { nombre: 'Resolución General Nº 96/2025 - Prórroga Vigencia Instaladores', url: '/docs/RG-96-2025-Prorroga-plazo-de-Vigencia-de-Instaladores-Habilitados-1_firmado.pdf' }
    ]
  },
  {
    titulo: 'Especificaciones Técnicas',
    docs: [
      { nombre: 'ET 21 – Puntos de Conexión y Medición', url: '/docs/et21.pdf' },
      { nombre: 'RG 11/2018 – Modificación ET 21', url: '/docs/rg-11-2018.pdf' },
      { nombre: 'RG 84/2018 – Modificación RG 11/2018', url: '/docs/rg-84-2018.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aéreas hasta 5 kW', url: '/docs/tipos-acometidas-aereas-5kw.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Subterráneas hasta 5 kW', url: '/docs/tipos-acometidas-subterraneas-5kw.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aérea y Subterránea de 40 a 300 kW', url: '/docs/tipos-acometidas-40-300kw.pdf' },
      { nombre: 'ET 21 - Punto 4.6.7 - Aclaración Distancias Mínimas a Instalaciones de Gas', url: '/docs/et21-punto-467.pdf' },
      { nombre: 'Tipos Constructivos Acometidas Aérea y Subterránea de 6 a 39 kW', url: '/docs/tipos-acometidas-6-39kw.pdf' }
    ]
  }
])
</script>

<style scoped>
.margen { 
  margin: 2rem; 
}

.marco-normativo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

h1 {
  color: #004080;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  border-bottom: 3px solid #004080;
  display: inline-block;
  padding-bottom: 0.5rem;
}

h2 {
  color: #004080;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #004080;
  padding-bottom: 0.3rem;
}

.normativa-block {
  background: #fdfdfd;
  border-left: 4px solid #004080;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}
.normativa-block:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Botones */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
}

.btn.ver {
  background: #004080;
  color: #fff;
  border: none;
}
.btn.ver:hover {
  background: #002b57;
  transform: translateY(-2px);
}

.btn.descargar {
  background: #cc9900;
  color: #fff;
  text-decoration: none;
}
.btn.descargar:hover {
  background: #a67300;
  transform: translateY(-2px);
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
  width: 800px;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 10px; right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.modal-title {
  color: #004080;
  margin-bottom: 1rem;
}
.modal-actions {
  margin-top: 1rem;
  text-align: right;
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
  h2 { font-size: 1.3rem; }
}
@media (max-width: 480px) {
  .marco-normativo { padding: 1rem; }
  h1 { font-size: 1.5rem; }
}
</style-->
