<template>
  <section class="contact">
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

<script setup>
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
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
