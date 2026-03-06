<template>
  <section class="about">
    <div class="container about-layout">
      <!-- Columna izquierda: logo grande -->
      <div class="about-logo">
        <img src="../assets/img/DXLogo.png" alt="Logo DX Computación" />
      </div>

      <!-- Columna derecha: contenido institucional -->
      <div class="about-content">
        <h2>Sobre DX Computación</h2>
        <p class="intro">Con más de tres décadas de experiencia, nuestra empresa se ha consolidado 
          como referente en el rubro tecnológico. Desde sus inicios, acompañamos la evolución de la 
          informática ofreciendo productos de calidad, asesoramiento especializado y un servicio 
          cercano que genera confianza. La combinación de tradición y actualización constante nos 
          permite brindar soluciones modernas sin perder el trato humano que nos distingue. Hoy 
          seguimos siendo el punto de encuentro para empresas, profesionales y particulares que buscan 
          innovación, respaldo y compromiso, reafirmando nuestra misión de crecer junto a la comunidad 
          y sus necesidades digitales.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No necesita lógica especial, es contenido estático
</script>

<style scoped>

.about {
  padding: 60px 20px;
  background: #f9f9f9;
}

/* Layout en dos columnas */
.about-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}

/* Columna izquierda: logo */
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

/* Columna derecha: contenido */
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

/* Responsive: logo arriba, texto abajo */
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

