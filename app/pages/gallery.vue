<script setup>
import { ref, watch } from 'vue'
import Gallery from '@/components/galleryGrid.vue'
import { useDisplay } from 'vuetify'
import { useCloudinaryImages } from '@/composables/useCloudinaryImages'
import ImageWithText from '@/components/imageWithText.vue'


const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const selectedFolder = ref(null)

const {
  images,
  loadImages
} = useCloudinaryImages()

watch(
  selectedFolder,
  folder => {
    if (folder) {
      loadImages(folder)
    }
  },
  { immediate: true }
)

const page = {
  gallery: {
    gridCols: 4,
    mobileCols: 2,
    imageHeight: '300px',
    contain: false
  }
}

const url = 'https://millingbydarrell.com/gallery'
const title = 'Images for Custom Wood Milling in Southwest MO | Milling By Darrell'
const description = 'Images of Live edge wood slabs, rounds, and lumber in Southwest Missouri by Milling By Darrell.'
const image = 'https://millingbydarrell.com/images/working/slabs_on_trailer_chainsaw.jpg'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: url,
  ogType: 'website',
  ogImage: image,
})

useSchemaOrg([
  defineWebPage({
    name: title,
    url,
    description,
  }),
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: url
    }
  ]
})
</script>

<template>
  <!-- ===== Heading ===== -->
  <h1
    :class="mobile ? 'pt-6 main-header-small' : 'main-header'"
    class="header-color main-header-spacing"
  >
    HAVE YOU SEEN MY WOOD?
  </h1>

  <!-- ===== Description Block ===== -->
    <ImageWithText
      imageUrl=""
      layout="overlay"
      class="description-width"
      :height="mobile ? '310px' : '300px'"
    >
      <div class="" :class="mobile ? 'p-text-size-sm-gal' : 'p-text-size-lg-gal'">
        Below are the examples of the kind of wood I have to offer.
        <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank" rel="noopener noreferrer"> <!-- https://www.facebook.com/p/Milling-By-Darrell-61576174751276/ -->
            <b>Visit My Marketplace Listings</b>
        </a>
        for the most updated stock.
        <br><br>
        <router-link to="/contact" >
            Contact me 
        </router-link>
        for more information, or set up a time to come look at what I have in person.
        <div :class="mobile ? 'even-smaller-text' : 'smaller-text'">
            <br>Choose <b>"Customer Creations"</b> from the dropdown below to see what customers have done with our wood!
            <br>If you want your creations to be included, simply take a good picture and 
            <router-link to="/contact" >
                text or email 
            </router-link> it to us.
        </div>
      </div>
    </ImageWithText>

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
.description-width {
  width: 75%;
}

.p-text-size-lg-gal {
  font-size: 1.1rem;
  font-weight: 400;
}

.p-text-size-sm-gal {
  font-size: 16px;
  width: 100%;
  line-height: 1.3;
}

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

/* MOBILE */
@media (max-width: 960px) {
    .description-width {
      width: 100%;
    }
}
</style>