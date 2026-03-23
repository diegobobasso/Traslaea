<template>
  <section class="about">
    <div class="container about-layout">
      <div class="about-logo">
        <img src="../assets/images/LogoTraslaea.png" alt="Logo Traslaea" />
      </div>

      <div class="about-content">
        <h2>Sobre Traslaea</h2>
        <p class="intro">Traslaea (Traslasierra Electricistas Asociados) es una asociación que reúne a profesionales de la electricidad en la región de Traslasierra, Córdoba. Su misión principal es fortalecer la identidad institucional de los electricistas habilitados, promover la capacitación continua y garantizar que las instalaciones eléctricas cumplan con los estándares de seguridad exigidos por la normativa vigente. La organización se constituye como un espacio de referencia para trabajadores, empresas y la comunidad, ofreciendo respaldo técnico y legal en un rubro clave para el desarrollo regional.

Entre sus objetivos se destacan la difusión del Marco Normativo de Seguridad Eléctrica, la creación de instancias de formación y actualización profesional, y la representación de sus asociados frente a organismos públicos y privados. Traslaea también busca acercar información clara y accesible a la sociedad, de modo que los usuarios comprendan la importancia de contratar instaladores habilitados y certificados.

La asociación fomenta la colaboración entre sus miembros, impulsa proyectos de innovación y promueve la responsabilidad social en el ejercicio de la profesión. Con una visión moderna y comprometida, Traslaea se posiciona como un actor institucional que no solo defiende los intereses de los electricistas, sino que también contribuye al bienestar y la seguridad de toda la comunidad.
        </p>

      </div>
      
    <div class="home-description">

    <h2>Comisión directiva</h2>
      <ul>
        <li>
            <strong>Presidencia: </strong><br>
            Ricardo Andrés BALMACEDA</li>
        <li>
            <strong>Secretaría: </strong><br>
            Esteban Adrian COLOMBO</li>
        <li>
            <strong>Tesorería: </strong><br>
            Juan Marcelo FLORES</li>
        <li>
            <strong>Vocal Titular: </strong><br>
            Johnatan Jesus SOSA</li>
        <li>
            <strong>Vocal Suplente: </strong><br>
            Sergio David LUNGU</li>
      </ul>

      <h2>Comisión REVISORA DE CUENTAS</h2>
      
      <ul>
        <li>
            <strong>Revisor de Cuentas Titular: </strong><br>
            Mariano Ezequiel ORIBE</li>
        <li>
            <strong>Revisor de Cuentas Suplente: </strong><br>
            Nicolas Ezequiel BALMACEDA</li>
      </ul>

    </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

.about {
  padding: 60px 20px;
  background: #f9f9f9;
}

.about-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}

.about-logo {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.about-logo img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}

.about-content {
  flex: 2 1 500px;
}

.about-content h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 800px;
}

.features h3,
.promo h3 {
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: var(--secondary);
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.promo p {
  font-size: 1.2rem;
  max-width: 800px;
}

@media (max-width: 768px) {
  .about-layout {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .about-logo img {
    max-height: 200px;
  }
}
</style>

