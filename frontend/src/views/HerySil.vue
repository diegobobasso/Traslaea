<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-logo">
            <img src="../assets/images/logoHerysil1.png" alt="HerySil Software Development" class="logo-hero" />
          </div>
          <div class="hero-text">
            <h1>HerySil Software Development</h1>
            <p class="tagline">Desarrollo de soluciones tecnológicas innovadoras</p>
            <p class="hero-description">
              Transformamos ideas en realidad digital con código limpio, diseño innovador 
              y las mejores prácticas de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">¿Quiénes somos?</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              En <strong>HerySil Software Development</strong> nos especializamos en el desarrollo 
              de software personalizado, aplicaciones web y soluciones tecnológicas que impulsan 
              el crecimiento de tu negocio.
            </p>
            <p>
              Nuestro equipo combina experiencia técnica con creatividad para entregar 
              productos que no solo funcionan perfectamente, sino que también ofrecen 
              una experiencia excepcional al usuario.
            </p>
            <div class="values-grid">
              <div class="value-card">
                <div class="value-icon">💡</div>
                <h3>Innovación</h3>
                <p>Implementamos las últimas tecnologías y metodologías</p>
              </div>
              <div class="value-card">
                <div class="value-icon">🎯</div>
                <h3>Enfoque</h3>
                <p>Soluciones específicas para tus necesidades</p>
              </div>
              <div class="value-card">
                <div class="value-icon">⚡</div>
                <h3>Eficiencia</h3>
                <p>Desarrollo ágil y entrega oportuna</p>
              </div>
              <div class="value-card">
                <div class="value-icon">🤝</div>
                <h3>Compromiso</h3>
                <p>Acompañamiento continuo y soporte post-entrega</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🌐</div>
            <h3>Desarrollo Web</h3>
            <ul>
              <li>Aplicaciones web personalizadas</li>
              <li>Landing pages y sitios corporativos</li>
              <li>E-commerce y tiendas online</li>
              <li>Dashboards y paneles administrativos</li>
            </ul>
          </div>
          <!-- div class="service-card">
            <div class="service-icon">📱</div>
            <h3>Aplicaciones Móviles</h3>
            <ul>
              <li>Apps nativas iOS y Android</li>
              <li>Aplicaciones híbridas multiplataforma</li>
              <li>PWA (Progressive Web Apps)</li>
              <li>Integración con APIs externas</li>
            </ul>
          </div-->
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>Soluciones Empresariales</h3>
            <ul>
              <li>Sistemas de gestión interna</li>
              <li>Automatización de procesos</li>
              <li>Migración y modernización de sistemas</li>
              <li>Consultoría tecnológica</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon">🛠️</div>
            <h3>Mantenimiento & Soporte</h3>
            <ul>
              <li>Mantenimiento preventivo y correctivo</li>
              <li>Actualización de tecnologías</li>
              <li>Optimización de performance</li>
              <li>Soporte técnico continuo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Contáctanos</h2>
          <div class="contact-info">
            <div class="contact-content">
              <div class="info-card">
                <div class="info-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a :href="`mailto:${contact.email}`" class="contact-link">
                    {{ contact.email }}
                  </a>
                  <p>Respondemos en menos de 24 horas</p>
                </div>
              </div>
            <div class="info-card">
              <div class="info-icon">💬</div>
              <div>
                <h3>WhatsApp</h3>
                <a :href="`https://wa.me/${contact.whatsapp}`" 
                   target="_blank" 
                   class="contact-link whatsapp-link">
                  +{{ formatPhone(contact.whatsapp) }}
                </a>
                <p>Chat directo con nuestro equipo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contact = ref({
  email: 'herysilsoftwaredevelopment@gmail.com',
  whatsapp: '3512458186',
  location: 'Córdoba, Argentina'
})

const formatPhone = (phone) => {
  // Formatear número de teléfono para mostrar
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}
</script>

<style scoped>
.contact-page {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.logo-hero {
  height: 200px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 800;
}

.tagline {
  color: #555;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 300;
}

.hero-description {
  color: #555;
  font-size: 1.1rem;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Section Common Styles */
section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: var(--dark);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 4px;
  background: var(--accent);
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* About Section */
.about-section {
  background: white;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.value-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--primary);
}

.value-card p {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
}

/* Services Section */
.services-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--primary);
}

.service-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-card li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.service-card li:before {
  content: '✓';
  color: var(--accent);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Contact Section */
.contact-section {
  background: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-card {
  min-width: 500px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s;
}

.info-card:hover {
  transform: translateX(5px);
  background: #e9ecef;
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-card h3 {
  margin: 0 0 8px 0;
  color: var(--primary);
}

.contact-link {
  display: inline-block;
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.contact-link:hover {
  color: var(--accent);
}

.whatsapp-link {
  color: #25D366;
}

.whatsapp-link:hover {
  color: #128C7E;
}

.info-card p {
  margin: 5px 0 0 0;
  color: #666;
  font-size: 0.9rem;
}

.contact-cta {
  padding: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 12px;
  color: white;
}

.contact-cta h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.contact-cta p {
  margin-bottom: 30px;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.btn-whatsapp, .btn-email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.btn-whatsapp {
  background: #25D366;
  color: white;
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(37, 211, 102, 0.3);
}

.btn-email {
  background: white;
  color: var(--dark);
}

.btn-email:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
}

.btn-icon {
  font-size: 1.2rem;
}

.social-links p {
  margin-bottom: 15px;
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

/* Tech Section */
.tech-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.tech-category {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.tech-category h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--primary);
  text-align: center;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.tech-tag {
  background: var(--primary);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s;
}

.tech-tag:hover {
  transform: translateY(-2px);
  background: var(--secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.2rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .logo-hero {
    height: 80px;
  }
  
  section {
    padding: 60px 0;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-whatsapp, .btn-email {
    width: 100%;
  }
}
</style>