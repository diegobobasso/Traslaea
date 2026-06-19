<template>
  <section>
    <!-- Sello institucional -->
    <div class="sello-institucion">
      <img src="../assets/images/LogoTraslaea.png" alt="Logo Institucional" />
    </div>

    <!-- Encabezado principal -->
    <h1 class="page-title">Comisiones Institucionales</h1>

    <!-- Comisión Directiva -->
    <div class="comision-block">
      <h2>Comisión Directiva</h2>
      <ul>
        <li><strong>Presidencia:</strong><br> Ricardo Andrés BALMACEDA</li>
        <li><strong>Secretaría:</strong><br> Juan Marcelo FLORES</li>
        <li><strong>Tesorería:</strong><br> Johnatan Jesus SOSA</li>
        <li><strong>Vocal Titular:</strong><br> Sergio David LUNGU</li>
        <li><strong>Vocal Suplente:</strong><br> </li>
      </ul>
    </div>

    <!-- Comisión Revisora -->
    <div class="comision-block">
      <h2>Comisión Revisora de Cuentas</h2>
      <ul>
        <li><strong>Revisor de Cuentas Titular:</strong><br> Mariano Ezequiel ORIBE</li>
        <li><strong>Revisor de Cuentas Suplente:</strong><br> Nicolas Ezequiel BALMACEDA</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComisionView'
}
</script>

<style scoped>
section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

/* Encabezado principal */
.page-title {
  text-align: center;
  font-size: 2.2rem;
  color: #004080;
  margin-bottom: 2rem;
  border-bottom: 3px solid #004080;
  display: inline-block;
  padding-bottom: 0.5rem;
}

/* Bloques de comisión */
.comision-block {
  background: #fdfdfd;
  border-left: 4px solid #004080;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}
.comision-block:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.comision-block h2 {
  color: #004080;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid #004080;
  padding-bottom: 0.3rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  line-height: 1.5;
}

strong {
  color: #004080;
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
  section {
    padding: 1.5rem;
  }
  .page-title {
    font-size: 1.8rem;
  }
  .comision-block {
    padding: 1.5rem;
  }
}
</style>
