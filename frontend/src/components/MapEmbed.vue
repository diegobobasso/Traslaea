<!-- MapEmbed.vue -->
<template>
  <div class="map-embed">
   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4358566559836!2d-65.17390542416845!3d-31.94907037402072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd4b9a1f86145%3A0xa00c332f0c342a78!2sDorrego%201435%2C%20Villa%20Dolores%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1781829266255!5m2!1ses-419!2sar"
      width="100%"
      height="400"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'MapEmbed'
}
</script>

<style scoped>
.map-embed {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
}
</style>
