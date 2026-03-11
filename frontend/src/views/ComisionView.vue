<template>
  <section>
    <div class="home-description">

    <h2>Comisión DIRECTIVA</h2>
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
  </section>
</template>

<script>
export default {
  name: 'ComisionView'
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