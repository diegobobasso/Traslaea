<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-content">
      <!-- Información + redes sociales en fila -->
      <div class="footer-section">
        <div class="municipality-info">
          <h3><img src="../assets/images/LogoTraslaea.jpg" class="img-muni-footer" /> TRASLAEA - Traslasierra Electricistas Asociados</h3>
          <div class="contact-social-row">
            <div class="contact-info">
              <span class="contact-item"><img src="../assets/icons/Ubicacion.png" class="img-footer" /> Dorrego 1435, Barrio San Martin, Ciudad de Villa Dolores (C.P. 5870), Provincia de Córdoba, República Argentina</span>
              <!--   <span class="contact-item"><img src="../assets/icons/Telefono.png" class="img-footer" /> Tel: (03544) 48-3037</span>   -->
              <span class="contact-item"><img src="../assets/icons/whatsapp.png" class="img-footer" /> WhatsApp: +54 9 3544 30-7583</span>
              <span class="contact-item"><img src="../assets/icons/gmail.png" class="img-footer" /> traslaea@gmail.com</span>
            </div>
            <div class="social-links">
              <h4>Nuestras redes sociales</h4>
              <a href="https://www.facebook.com/traslaea.arg?locale=es_LA" target="_blank" rel="noopener" class="social-link">
                <img src="../assets/icons/facebook.png" alt="Facebook" class="social-logo" />
              </a>
              <a href="https://www.instagram.com/traslaea.arg/" target="_blank" rel="noopener" class="social-link">
                <img src="../assets/icons/instagram.png" alt="Instagram" class="social-logo" />
              </a>
              <a href="https://wa.me/5493544307583" target="_blank" rel="noopener" class="social-link">
                <img src="../assets/icons/whatsapp.png" alt="WhatsApp" class="social-logo" />
              </a>
            </div>
          </div>
        </div>
    
          <div class="copyright">
            © {{ year }} TRASLAEA - Traslasierra Electricistas Asociados - Todos los derechos reservados
            <router-link to="/herysil" class="brand-link" aria-label="Acerca de Herysil Software Development">
            <img :src="logo" alt="Herysil Logo" class="brand-logo" />
            <span class="brand-name">Herysil Software Development</span>
          </router-link>
        </div>
      </div>
    </div>

   </footer>
</template>

<script setup>
const year = new Date().getFullYear()
import logo from '../assets/images/logoHerysil1.png'
</script>

<style scoped>

.footer {
  background-color: #004080;
  color: white;
  padding: 2.5rem 0 1.5rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.municipality-info h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.contact-social-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* Redes sociales */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.social-logo {
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
}

.social-link:hover .social-logo {
  transform: scale(1.1);
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.8;
  display: flex;
  justify-content: space-between; /* izquierda: derechos, derecha: branding */
  align-items: center;
  /*text-align: center; */
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Firma institucional en ángulo inferior */
.developer-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem 0 2rem;
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: right;
}

.developer-logo-small {
  height: 40px;
  width: auto;
  border-radius: 6px;
}

.img-muni-footer {
  width: 2rem;
  height: 2rem;
  margin-bottom: -0.5%;
}

.img-footer {
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: -0.5%;
}

.developer-signature {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.signature-name {
  font-weight: 600;
  font-size: 0.85rem;
  color: white;
}

.signature-tagline {
  font-size: 0.7rem;
  line-height: 1.2;
}

.signature-mail {
  font-size: 0.7rem;
  opacity: 0.8;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: white;
  opacity: 0.9;
}

.brand-link:hover {
  opacity: 1;
}

.brand-logo {
  height: 4rem;
  width: auto;
}

.brand-name {
  font-size: 0.95rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-social-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .developer-footer {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding-top: 2rem;
  }

  .developer-signature {
    align-items: center;
  }
}

</style>


