<template class="home-view">
    <!-- Sección Hero -->
    <section>
      <div class="hero-overlay">
        <h1>TRASLAEA - Traslasierra Electricistas Asociados</h1>
      </div>
    </section>

    <!-- Banner >
    <section class="banner">
      <img src="../assets/images/baner2.png" alt="Banner institucional" class="banner-img" />
    </section-->

    <!-- Contenido Principal -->
    <section>
      <div class="sello-institucion">
        <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
      </div>

      <div class="home-description">
        <h2>Sobre Nosotros</h2>
        <p>
          Traslasierra Electricistas Asociados (TRASLAEA) es una asociación sin fines de lucro que reúne a profesionales de la electricidad habilitados en la región de Traslasierra, Córdoba.
        </p>
        <p>
          Su misión principal es fortalecer la identidad institucional de los electricistas habilitados, promover la capacitación continua y garantizar que las instalaciones eléctricas cumplan con los estándares de seguridad exigidos por la normativa vigente.
        </p>
        <p>   
          La organización se constituye como un espacio de referencia para trabajadores, empresas y la comunidad, ofreciendo respaldo técnico y legal en un rubro clave para el desarrollo regional.
        </p>
        <p>
          Entre sus objetivos se destacan la difusión del Marco Normativo de Seguridad Eléctrica, la creación de instancias de formación y actualización profesional, y la representación de sus asociados frente a organismos públicos y privados. 
        </p>
        <p>
          Traslaea también busca acercar información clara y accesible a la sociedad, de modo que los usuarios comprendan la importancia de contratar instaladores habilitados y certificados.
        </p>
        <p>
          La asociación fomenta la colaboración entre sus miembros, impulsa proyectos de innovación y promueve la responsabilidad social en el ejercicio de la profesión. 
        </p>
        <P>
          Con una visión moderna y comprometida, Traslaea se posiciona como un actor institucional que no solo defiende los intereses de los electricistas, sino que también contribuye al bienestar y la seguridad de toda la comunidad.
        </p>
      </div>
    
      <div class="home-description">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li v-for="(service, index) in services" :key="index">
            <strong>{{ service.title }}</strong>: {{ service.description }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Sección Relevando Peligros -->
    <section class="home-description"> 
      <div >
        <h2>Podés denunciar irregularidades eléctricas en Relevando Peligros</h2>
        <p>
          <strong>Relevando Peligros</strong> es una organización sin fines de lucro que trabaja
          para mejorar la seguridad eléctrica en la vía pública. Su misión es detectar,
           registrar y gestionar peligros eléctricos ante los entes responsables, contribuyendo
          a salvar vidas y prevenir accidentes.
        </p>
        <p>
          Desde su sitio oficial, cualquier ciudadano puede <strong>denunciar un peligro eléctrico</strong>
          cargando fotos y datos de la ubicación. La fundación se encarga de dar seguimiento
          y exigir soluciones a las autoridades competentes.
        </p>
      </div>

      <div class="links">
        <a href="https://relevandopeligros.org/" target="_blank" rel="noopener">🌐 Sitio oficial 📢 Hacé tu denuncia</a>
        <a href="https://wa.me/5493518629999" target="_blank" rel="noopener">💬 Contacto por WhatsApp</a>
      </div>

      <div class="social">
        <h3>Seguilos en redes</h3>
        <a href="https://www.facebook.com/yorelevo/" target="_blank" rel="noopener"><img src="../assets/icons/facebook.png" alt="Facebook" class="social-logo" /></a>
        <a href="https://www.instagram.com/relevandopeligros/" target="_blank" rel="noopener"><img src="../assets/icons/instagram.png" alt="Instagram" class="social-logo" /></a>
        <a href="https://twitter.com/relevarpeligros" target="_blank" rel="noopener"><img src="../assets/icons/twitter.png" alt="Twitter" class="social-logo" /></a>
        <a href="https://www.youtube.com/user/relevandopeligros" target="_blank" rel="noopener"><img src="../assets/icons/youtube.png" alt="YouTube" class="social-logo" /></a>
      </div>
    </section>

<!-- Formulario de Contacto -->
<section class="home-description">
  <div class="container">
    <h2>Contacto</h2>
    <p class="intro">¿Tenés alguna consulta o necesitás asesoramiento? Estamos para ayudarte.</p>

    <form class="contact-form" @submit.prevent="enviarFormulario">
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
        <textarea v-model="form.mensaje" id="mensaje" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn">Enviar</button>

      <!-- Mensaje de confirmación inline -->
      <p v-if="statusMessage" :class="statusClass">{{ statusMessage }}</p>
    </form>
  </div>
</section>

</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Lista de servicios (podrías mover esto a un archivo externo)
const services = ref([
  {
    title: 'Capacitación técnica y científica',
    description: 'cursos, talleres y jornadas para actualizar conocimientos en electricidad, electrónica, electromecánica, robótica, domótica, telecomunicaciones y más.'
  },
  {
    title: 'Gestión de habilitaciones',
    description: 'asesoramos y acompañamos a los socios en la registración y trámites ante organismos oficiales y privados.'
  },
  {
    title: 'Asesoramiento integral',
    description: 'asistencia técnica, administrativa, contable, jurídica y en seguridad laboral.'
  },
  {
    title: 'Eventos y networking',
    description: 'organización de conferencias, simposios, exposiciones y encuentros para fomentar el intercambio profesional'
  },
  {
    title: 'Defensa y representación',
    description: 'velamos por el prestigio, independencia y respeto del trabajo profesional, representando a nuestros asociados ante entidades públicas y privadas'
  },
  {
    title: 'Documentación y recursos',
    description: 'acceso a reglamentos, normativas, boletines oficiales y biblioteca especializada'
  }
])

const form = ref({ nombre: '', email: '', mensaje: '' })
const statusMessage = ref('')
const statusClass = ref('')

const enviarFormulario = async () => {
  try {
    await emailjs.send('service_h5cjsxa','Consulta_a_mi',{
      from_name: form.value.nombre,
      from_email: form.value.email,
      message: form.value.mensaje,
    },'rt5U45x1G4tHZDe8A')

    await emailjs.send('service_h5cjsxa','confirmacion',{
      from_name: form.value.nombre,
      from_email: form.value.email,
      email: form.value.email,
      message: form.value.mensaje
    },'rt5U45x1G4tHZDe8A')

    form.value = { nombre: '', email: '', mensaje: '' }
    statusMessage.value = 'Mensaje enviado con éxito ✔️'
    statusClass.value = 'success'
  } catch (error) {
    console.error('Error al enviar email:', error)
    statusMessage.value = 'Hubo un problema al enviar el mensaje ❌'
    statusClass.value = 'error'
  }
}
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.hero-overlay {
  text-align: center;
  background: linear-gradient(135deg, #004080, #0066cc);
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}
.hero-overlay:hover {
  transform: scale(1.02);
}

.hero-overlay h1 {
  color: white;
  font-size: 2.8rem;
  margin: 0;
}

.banner-img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.home-description {
  padding: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  background: #fdfdfd;
  border-left: 4px solid #004080;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}
.home-description:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.home-description h2 {
  color: #004080;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #004080;
}
.home-description a {
  color: #004080;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s, text-decoration 0.3s;
}
.home-description a:hover {
  color: #cc9900; /* acento dorado */
  text-decoration: underline;
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
}
.sello-institucion img {
  width: 600px;
  max-width: 80vw;
  filter: grayscale(100%) brightness(0.5);
}

/* Contacto */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.contact-form {
  background: #fdfdfd;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: box-shadow 0.3s ease;
}
.contact-form:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.form-group {
  margin-bottom: 1.5rem;
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
  transition: border-color 0.3s ease;
}
input:focus, textarea:focus {
  border-color: #004080;
  outline: none;
}
textarea {
  min-height: 150px;
}
.btn {
  background: #004080;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s, transform 0.2s;
}
.btn:hover {
  background: #002b57;
  transform: translateY(-2px);
}

/* Redes sociales */
.social-logo {
  width: 28px;
  height: 28px;
  margin: 0 8px;
  transition: transform 0.3s ease;
}
.social-logo:hover {
  transform: scale(1.2);
}

/* Responsividad */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .hero-overlay h1 {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .home-description {
    padding: 1rem;
    font-size: 1rem;
  }
  .hero-overlay h1 {
    font-size: 1.5rem;
  }
}
</style>


