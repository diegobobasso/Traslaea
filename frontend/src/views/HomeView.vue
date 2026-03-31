<template>
  <div class="home-view">
    <!-- Sección Hero -->
    <section>
      <div class="hero-overlay">
        <h1>TRASLAEA - Traslasierra Electricistas Asociados</h1>
      </div>
    </section>

    <!-- Banner -->
    <section class="banner">
      <img src="../assets/images/baner2.png" alt="Banner institucional" class="banner-img" />
    </section>

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

        
        <h2>Nuestros Servicios</h2>
        <ul>
          <li v-for="(service, index) in services" :key="index">
            <strong>{{ service.title }}</strong>: {{ service.description }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Sección Relevando Peligros -->
    <section> 
      <div class="home-description">
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

      <div class="home-description links">
        <a href="https://relevandopeligros.org/" target="_blank" rel="noopener">🌐 Sitio oficial 📢 Hacé tu denuncia</a>
        <a href="https://wa.me/5493518629999" target="_blank" rel="noopener">💬 Contacto por WhatsApp</a>
      </div>

      <div class="home-description social">
        <h3>Seguilos en redes</h3>
          <a href="https://www.facebook.com/yorelevo/" target="_blank" rel="noopener"><img src="../assets/icons/facebook.png" alt="Facebook" class="social-logo" /></a>
          <a href="https://www.instagram.com/relevandopeligros/" target="_blank" rel="noopener"><img src="../assets/icons/instagram.png" alt="Instagram" class="social-logo" /></a>
          <a href="https://twitter.com/relevarpeligros" target="_blank" rel="noopener"><img src="../assets/icons/twitter.png" alt="Instagram" class="social-logo" /></a>
          <a href="https://www.youtube.com/user/relevandopeligros" target="_blank" rel="noopener"><img src="../assets/icons/youtube.png" alt="Instagram" class="social-logo" /></a>
      </div>
  
    </section>

    <!-- Formulario de Contacto -->
    <section>
      <div class="container">
        <h1>Contacto</h1>
        <p class="intro">¿Tenés alguna consulta o necesitás asesoramiento? Estamos para ayudarte.</p>

        <div class="contact-grid">
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
          </form>

          <div class="contact-img">
            <img src="../assets/images/LogoTraslaea.jpg" alt="Logo TRASLAEA" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Datos del formulario
const form = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

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

// Envío del formulario
const enviarFormulario = async () => {
  try {
    // Email a Traslaea
    await emailjs.send(
      'service_h5cjsxa',
      'Consulta_a_mi',
      {
        from_name: form.value.nombre,
        from_email: form.value.email,
        message: form.value.mensaje,
      },
      'rt5U45x1G4tHZDe8A'
    )

    // Email de confirmación al cliente
    await emailjs.send(
      'service_h5cjsxa',
      'confirmacion',
      {
        from_name: form.value.nombre,
        from_email: form.value.email,
        email: form.value.email,
        message: form.value.mensaje
      },  
      'rt5U45x1G4tHZDe8A'
    )

    // Resetear formulario
    form.value = { nombre: '', email: '', mensaje: '' }
    alert('Mensaje enviado con éxito ✔️')
  } catch (error) {
    console.error('Error al enviar email:', error)
    alert('Hubo un problema al enviar el mensaje ❌')
  }
}
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-overlay {
  text-align: center;
  background-color: rgba(255, 255, 255);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero-overlay h1 {
  font-size: 2.5rem;
  color: #004080;
  margin-bottom: 1rem;
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.home-description {
  padding: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.home-description h2 {
  color: #004080;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #004080;
}

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

/* Estilos para el formulario de contacto */
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
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  transition: background 0.3s;
}

.btn:hover {
  background: #002b57;
}

.contact-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-img img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.social-logo {
  width: 28px;
  height: 28px;
  margin-bottom: -1.5%;
  transition: transform 0.3s ease;
}

/* Estilos responsivos */
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




<!--

<template>
  <section>
    <div class="hero-overlay">
      <h1>TRASLAEA - Traslasierra Electricistas Asociados</h1>
    </div>
  </section>

  <section class="banner">
    <img src="../assets/images/baner2.png" alt="Banner institucional" class="banner-img" />
  </section>

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

      <h2>Nuestros Servicios</h2>
      <ul>
        <li>
          <strong>Capacitación técnica y científica:</strong> cursos, talleres y jornadas
          para actualizar conocimientos en electricidad, electrónica, electromecánica,
          robótica, domótica, telecomunicaciones y más.
        </li>
        <li>
          <strong>Gestión de habilitaciones:</strong> asesoramos y acompañamos a los socios
          en la registración y trámites ante organismos oficiales y privados.
        </li>
        <li>
          <strong>Asesoramiento integral:</strong> asistencia técnica, administrativa,
          contable, jurídica y en seguridad laboral.
        </li>
        <li>
          <strong>Eventos y networking:</strong> organización de conferencias, simposios,
          exposiciones y encuentros para fomentar el intercambio profesional.
        </li>
        <li>
          <strong>Defensa y representación:</strong> velamos por el prestigio, independencia
          y respeto del trabajo profesional, representando a nuestros asociados ante
          entidades públicas y privadas.
        </li>
        <li>
          <strong>Documentación y recursos:</strong> acceso a reglamentos, normativas,
          boletines oficiales y biblioteca especializada.
        </li>
      </ul>
    </div>
  </section>

  <section> 
    <div class="home-description">
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

    <div class="home-description links">
      <a href="https://relevandopeligros.org/" target="_blank" rel="noopener">🌐 Sitio oficial 📢 Hacé tu denuncia</a>
      <a href="https://wa.me/5493518629999" target="_blank" rel="noopener">💬 Contacto por WhatsApp</a>
    </div>

    <div class="home-description social">
      <h3>Seguilos en redes</h3>
        <a href="https://www.facebook.com/yorelevo/" target="_blank" rel="noopener"><img src="../assets/icons/facebook.png" alt="Facebook" class="social-logo" /></a>
        <a href="https://www.instagram.com/relevandopeligros/" target="_blank" rel="noopener"><img src="../assets/icons/instagram.png" alt="Instagram" class="social-logo" /></a>
        <a href="https://twitter.com/relevarpeligros" target="_blank" rel="noopener"><img src="../assets/icons/twitter.png" alt="Instagram" class="social-logo" /></a>
        <a href="https://www.youtube.com/user/relevandopeligros" target="_blank" rel="noopener"><img src="../assets/icons/youtube.png" alt="Instagram" class="social-logo" /></a>
      
      
    </div>
  </section>

  <section>
    <div class="container">
      <h1>Contacto</h1>
      <p class="intro">
        ¿Tenés alguna consulta o necesitás asesoramiento? Estamos para ayudarte.
        Completá el formulario y te responderemos a la brevedad.
      </p>

      <div class="contact-grid">
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
        </form>

        <div class="contact-img">
          <img src="../assets/images/LogoTraslaea.jpg"  alt="Logo TRASLAEA" height="auto" />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'HomeView'
}

import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

async function enviarFormulario() {
  try {
    // Email a Traslaea
    await emailjs.send(
      'service_h5cjsxa',
      'Consulta_a_mi',
      {
        from_name: form.value.nombre,
        from_email: form.value.email,
        message: form.value.mensaje,
      },
      'rt5U45x1G4tHZDe8A'
    )

    // Email de confirmación al cliente
    await emailjs.send(
      'service_h5cjsxa',
      'confirmacion',
      {
        from_name: form.value.nombre,
        from_email: form.value.email,
        email: form.value.email,
        message: form.value.mensaje
      },  
      'rt5U45x1G4tHZDe8A'
    )

    form.value = { nombre: '', email: '', mensaje: '' }
  } catch (error) {
    console.error('Error al enviar email:', error)
    alert('Hubo un problema al enviar el mensaje ❌')
  }
}

</script>

<style scoped>

.hero-overlay {
  text-align: center;
  background-color: rgba(255, 255, 255);
  padding: 2rem;
  border-radius: 8px;
}
.hero-overlay h1 {
  font-size: 2.5rem;
  color: #004080;
  margin-bottom: 1rem;
}
.hero-overlay p {
  font-size: 1.3rem;
  color: #333;
}

.banner {
  margin-top: 1rem;
}
.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.home-description {
  padding: 2rem;
  font-size: 1.5rem;
  margin: auto;
  line-height: 1.6;  
}
.home-description h2 {
  color: #004080;
  margin-top: 2rem;
}
.home-description ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}
.home-description li {
  margin-bottom: 0.8rem;
}
strong {
  color: #004080;
}

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

.links a {
  font-size: 1rem;
  display: inline-block;
  margin-right: 1rem;
  color: #cc0000;
  text-decoration: underline;
}

.social ul {
  list-style: none;
  padding: 0;
}

.social li {
  margin-bottom: 0.5rem;
}

.social a {
  color: #0066cc;
  text-decoration: none;
}

.social a:hover {
  text-decoration: underline;
}


.social-logo {
  align-items: center;
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
}

.social-link:hover .social-logo {
  transform: scale(1.1);
}


.contact {
  padding: 60px 20px;
  background-color: #ffffff;
}
.contact h1 {
  font-size: 3rem;
  color: black;
  margin-bottom: 20px;
  text-align: center;
}
.intro {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.contact-form {
  background: #b7c1cd;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

input, textarea {
  width: 96%;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
}
.btn {
  background:  #004080;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background: #767c83;
}
.contact-info {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.contact-img {
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
}

.contact-info h3 {
  margin-bottom: 15px;
  color: #767c83;
}
.contact-info p {
  margin-bottom: 10px;
}
.social-logo {
  width: 28px;
  height: 28px;
  margin-bottom: -1.5%;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .hero {
    height: 250px;
    background-size: 250px; 
  }
  .hero-overlay {
    padding: 1rem;
  }
  .hero-overlay h1 {
    font-size: 1.8rem;
  }
  .hero-overlay p {
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  .hero {
    height: 200px;
    background-size: 180px;
  }
  .hero-overlay h1 {
    font-size: 1.5rem;
  }
  .hero-overlay p {
    font-size: 0.9rem;
  }
}
</style>
-->