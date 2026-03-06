<template>
  <!-- Hero institucional con logo como sello de agua -->
  <section>
    <div class="hero-overlay">
      <h1>Asociación Civil TRASLAEA</h1>
      <p>
        TRASLAEA es una Asociacion Civil sin fines de lucro que nuclea electricistas profesionales 
        de Traslasierra Córdoba.
      </p>
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
        La Asociación Civil Traslasierra Electricistas Profesionales Habilitados (TRASLAEA)
        tiene como propósito promover la seguridad, capacitación y unión de los profesionales
        del área eléctrica, afines y la comunidad en la provincia de Córdoba.
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
  max-width: 900px;
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
