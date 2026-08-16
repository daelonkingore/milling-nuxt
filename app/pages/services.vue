<script setup>
import ImageWithText from '@/components/imageWithText.vue'
import { useDisplay } from 'vuetify'
import PricingSection from '@/sections/PricingSection.vue'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const pageData = {
  topImages: [
    'images/working/milling1.jpg',
    'images/working/milling2.jpg',
    'images/working/milling3.jpg',
  ],
}

const url = 'https://millingbydarrell.com/services'
const title = 'Custom Wood Milling Services in Ozark & Springfield, MO | Milling By Darrell'
const description = 'Professional portable sawmill services in Ozark, Springfield, and southwest Missouri. Custom lumber milling, live-edge slabs, and on-site milling available.'
const image = 'https://millingbydarrell.com/images/working/milling1.jpg'

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
  <!-- HEADER -->
  <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color main-header-spacing mb-8">
    LET ME MILL FOR YOU
  </h1>

  <!-- TOP IMAGES -->
  <v-row class="services-pics-row">
    <v-col
      v-for="(img, i) in pageData.topImages"
      :key="i"
      cols="12"
      md="4"
      class="d-flex justify-center"
      v-show="mobile ? i === 1 : true"
    >
      <v-img
        cover
        class="working-img rounded-xl"
        :src="img"
        eager
      />
    </v-col>
  </v-row>

  <!-- SERVICES HEADER -->
  <h2 :class="mobile ? 'h2-subheading mb-4' : 'loud-header-h2 mb-7'">
    MILLING SERVICES
  </h2>

  <!-- DYNAMIC SECTIONS -->
  <v-container :class="mobile ? 'v-text-small' : 'easy-to-see'">

    <ImageWithText 
      imageUrl="images/people/men-working3.jpg"
      layout="left"
      height="650px"
      :imgHeight="mobile ? '50vh' : '650px'"
    >
      <div class="text-column">
      <span class="textbox-title">Milling</span>
      <hr>
        <PricingSection/>
      </div>
    </ImageWithText>

    <ImageWithText
      imageUrl="images/wood-slabs/slabs_on_trailer_chainsaw.jpg"
      layout="right"
      height="350px"
      :imgHeight="mobile ? '40vh' : '350px'"
    >
      <v-container class="p-text-size p-text-line-height text-column">
      <span class="textbox-title">Travel Limits</span>
      <hr>
          <span>I will travel to you, but I can only reach so far.</span>
          <span><b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
          <br>Travel expenses are added based on gas and time taken.</span>
          <span><b>If travel time is longer than 2 hours</b>:
          <br>I likely won't make the trip, but feel free to ask!</span>
      </v-container>
    </ImageWithText>

    <ImageWithText 
      imageUrl="images/wood-slabs/slabs-on-mill.jpg"
      layout="left"
      height="350px"
      :imgHeight="mobile ? '40vh' : '350px'"
    >
      <div class="text-column">
      <span class="textbox-title">Frequently Asked Questions</span>
      <hr>
        <v-container class="p-text-size p-text-line-height">
            <b>Will you cut the tree down before milling it?</b>
            <br>My passion is in milling, so <b>we do not offer tree felling services.</b>
            <br><br><b>Do you sand or treat the wood?</b>
            <br>I only offer raw lumber and milling services. I do not sand, stain, or treat my wood in any way.
            Part of the fun is doing it yourself!
        </v-container>
      </div>
    </ImageWithText>

  </v-container>

  <!-- SUMMARY -->
   <ImageWithText
    imageUrl=""
    layout="overlay"
    class="summary-width"
    :height="mobile ? '300px' : '255px'"
  >
    <span>
      <p>
          Have a downed tree you don't know what to do with?
          <br>Need custom milling for your project?
          <br><br>Slabs, rounds, whatever you need, I can cut it!<br><br>
          Bring your wood to me or let me come to you, either way, that log doesn't stand a chance against my saws!
      </p>
    </span>
  </ImageWithText>
</template>

<style scoped>
.summary-width {
  width: 75%;
}

.h2-subheading {
  margin-top: 30px
}

.p-text {
    max-width: 1000px;
}

.pricing-border {
    border: black 1px solid;
}

.services-img {
  border-radius: 15px;
  overflow: hidden;
  max-width: 600px;
}

.v-container {
    max-width: 1400px;
}

.services-pics-row {
    padding-right: 20px;
    padding-left: 20px;
}

.working-img {
    max-height: 400px;
}

/* MOBILE */
@media (max-width: 960px) {
    .summary-width {
      width: 100%;
    }
}
</style>