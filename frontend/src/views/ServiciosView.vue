<template>
  <section>
    <div class="home-description">

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
  name: 'ServiciosView'
}
</script>

<style>
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
</style>