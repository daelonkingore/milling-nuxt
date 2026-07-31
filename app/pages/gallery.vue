<script setup>
import Gallery from '@/components/galleryGrid.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const page = {
  title: 'HAVE YOU SEEN MY WOOD?',

  description: `
    Below are the examples of the kind of wood I have to offer.
    Visit My Marketplace Listings for the most updated stock.
    Contact me/us for more information.
  `,

  marketplaceUrl: 'https://www.facebook.com/marketplace',
  contactUrl: '/contact',

  gallery: {
    gridCols: 4,
    mobileCols: 2,
    imageHeight: '300px',
    contain: false
  }
}
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
    :grid-cols="page.gallery.gridCols"
    :mobile-cols="page.gallery.mobileCols"
    :image-height="page.gallery.imageHeight"
    :contain="page.gallery.contain"
  />
</template>