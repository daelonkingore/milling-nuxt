<script setup>
  import Navigation from './components/navigation.vue'
  import Footer from './components/footer.vue'
  useHead({
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
</script>

<template width="100%">
  <v-app width="100%">
    <Navigation />

    <!-- Main content of the application -->
    <v-main id="background">
      <NuxtPage />
    </v-main>

    <form
      name="contact3"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input name="bot-field" />
      <input type="hidden" name="form-name" value="contact3" />

      <input
        type="email"
        name="milling_customer_email"
      />

      <textarea
        name="milling_message"
      ></textarea>
    </form>

    <Footer class="max-height"/>
  </v-app>
</template>

<style scoped>
  .max-height {
    max-height: 90px;
  }
</style>