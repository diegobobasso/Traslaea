<template>
  <header class="header">
    <!-- Logo institucional -->
    <div class="logo-container">
      <router-link to="/" @click="closeMenu">
      <img src="../assets/images/LogoTraslaea.jpg" alt="Logo TRASLAEA" class="logo" /></router-link>
      <span class="title">TRASLAEA</span>
    </div>

    <!-- Botón hamburguesa (solo visible en móviles) -->
    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <!-- Menú de navegación -->
    <nav :class="['navbar', { 'open': isOpen }]">
      <ul class="nav-links">
        <li><router-link to="/capacitaciones" @click="closeMenu">Capacitaciones</router-link></li>
        <li><router-link to="/servicios" @click="closeMenu">Servicios</router-link></li>
        <li><router-link to="/eventos" @click="closeMenu">Eventos</router-link></li>
        <li><router-link to="/documentacion" @click="closeMenu">Documentación</router-link></li>
        <li><router-link to="/login-asociados" @click="closeMenu">Login Asociados</router-link></li>
        <li><router-link to="/login-alumnos" @click="closeMenu">Login Alumnos</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004080; /* Azul institucional */
  padding: 0.8rem 1.5rem;
  flex-wrap: wrap;
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
}
.logo {
  height: 50px;
  margin-right: 10px;
}
.title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
}

/* Botón hamburguesa */
.menu-toggle {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  display: none; /* Oculto en escritorio */
}

/* Navbar */
.navbar {
  flex-grow: 1;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}
.nav-links a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* Visible en móviles */
  }
  .navbar {
    width: 100%;
    display: none;
    flex-direction: column;
    background-color: #004080;
    margin-top: 1rem;
  }
  .navbar.open {
    display: flex;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
