<script setup>
import Gallery from '@/components/galleryGrid.vue'
import { useDisplay } from 'vuetify'
import { useCloudinaryImages } from '@/composables/useCloudinaryImages'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const selectedFolder = ref(null)

const {
  images,
  loadImages
} = useCloudinaryImages()

watch(selectedFolder, folder => {
  loadImages(folder)
})
</script>

<template>
  <!-- ===== Heading ===== -->
  <h1
    :class="mobile ? 'pt-6 main-header-small' : 'main-header'"
    class="header-color main-header-spacing"
  >
    {{ page.title }}
  </h1>

  <!-- ===== Description Block ===== -->
  <v-container>
    <v-card flat color="transparent">
      <v-card-text class="p-container p-text" :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'">
        Below are the examples of the kind of wood I have to offer.
        <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer"> <!-- https://www.facebook.com/p/Milling-By-Darrell-61576174751276/ -->
            <b>Visit My Marketplace Listings</b>
        </a>
        for the most updated stock.
        <br><br>
        <router-link to="/contacts" >
            Contact me 
        </router-link>
        for more information, or set up a time to come look at what I have in person.
        <div :class="mobile ? 'even-smaller-text' : 'smaller-text'">
            <br>Choose <b>"Customer Creations"</b> from the dropdown below to see what customers have done with our wood!
            <br>If you want your creations to be included, simply take a good picture and 
            <router-link to="/contacts" >
                text or email 
            </router-link> it to us.
        </div>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- ===== Gallery ===== -->
  <Gallery
    :images="images"
    :grid-cols="page.gallery.gridCols"
    :mobile-cols="page.gallery.mobileCols"
    :image-height="page.gallery.imageHeight"
    :contain="page.gallery.contain"
    v-model="selectedFolder"
  />
</template>

<style scoped>
.smaller-text {
    font-size: 18px;
}

.even-smaller-text {
  font-size: 14px;
}

.loud-header {
    margin-bottom: 0;
}

.p-text {
    margin-top: 5px;
    margin-bottom: 15px;
}

.v-container {
    padding: 35px 0px;
}
</style>