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

    <Footer class="max-height"/>
  </v-app>
</template>

<style scoped>
  .max-height {
    max-height: 75px;
  }
</style>