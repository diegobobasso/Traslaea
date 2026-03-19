<template>
  <!-- Hero institucional con logo como sello de agua -->
  <section>
    <div class="hero-overlay">
      <h1>TRASLAEA - Traslasierra Electricistas Asociados</h1>
    </div>
  </section>

  <!-- Banner institucional debajo del header -->
  <section class="banner">
    <img src="../assets/images/baner2.png" alt="Banner institucional" class="banner-img" />
  </section>

  <!-- Descripción extendida -->
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

   <section class="relevando-peligros">
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

    <!-- Enlaces principales -->
    <div class="links">
      <a href="https://relevandopeligros.org/" target="_blank" rel="noopener">🌐 Sitio oficial 📢 Hacé tu denuncia</a>
      <a href="https://wa.me/5493518629999" target="_blank" rel="noopener">💬 Contacto por WhatsApp</a>
    </div>

    <!-- Redes sociales (placeholders, vos completás los href) -->
    <div class="social">
      <h3>Seguilos en redes</h3>
        <a href="https://www.facebook.com/yorelevo/" target="_blank" rel="noopener"><img src="../assets/icons/facebook.png" alt="Facebook" class="social-logo" /></a>
        <a href="https://www.instagram.com/relevandopeligros/" target="_blank" rel="noopener"><img src="../assets/icons/instagram.png" alt="Instagram" class="social-logo" /></a>
        <a href="https://twitter.com/relevarpeligros" target="_blank" rel="noopener"><img src="../assets/icons/twitter.png" alt="Instagram" class="social-logo" /></a>
        <a href="https://www.youtube.com/user/relevandopeligros" target="_blank" rel="noopener"><img src="../assets/icons/youtube.png" alt="Instagram" class="social-logo" /></a>
      
      
    </div>
  </section>

</template>

<script>
export default {
  name: 'HomeView'
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

/* Banner debajo del header */
.banner {
  margin-top: 1rem;
}
.banner-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Descripción extendida */
.home-description {
  padding: 2rem;
  font-size: 1.5rem;
  /*max-width: 900px;*/
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

/* Sello de agua institucional */
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


.relevando-peligros {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.relevando-peligros h2 {
  color: #004080;
  margin-bottom: 1rem;
}

.links a {
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

/* Responsive */
@media (max-width: 768px) {
  .hero {
    height: 250px;
    background-size: 250px; /* logo más pequeño en móviles */
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
