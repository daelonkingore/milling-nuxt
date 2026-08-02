<script setup>
import ImageWithText from '@/components/imageWithText.vue'
import { useDisplay } from 'vuetify'
import PricingSection from '@/sections/PricingSection.vue'
import EmbededVideo from '~/components/EmbedVideo.vue'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const pageData = {
  heading: "LET ME MILL FOR YOU",

  topImages: [
    new URL('@/assets/working/milling1.jpg', import.meta.url).href,
    new URL('@/assets/working/milling2.jpg', import.meta.url).href,
    new URL('@/assets/working/milling3.jpg', import.meta.url).href,
  ],

  servicesHeading: "MILLING SERVICES",

  pricing: {
    image: new URL('@/assets/working/milling1.jpg', import.meta.url).href,
    layout: "right",

    pricing: {
      header: "Example Pricing",
      sub: "Based on log width",

      rows: [
        { label: '25" or less', price: '$75' },
        { label: '25" - 45"', price: '$100' },
        { label: '45" or more', price: '$125' }
      ],

      note: "2 hour minimum.\n$30 stationary saw blade replacement\n$100 chainsaw blade replacement",

      dimensions: {
        title: "Example Dimensions",
        sub: "Max log width",
        items: [
          'Stationary mill: up to 36" wide', 
          'Portable saws: up to 51" wide'
        ]
      },

      contact: {
        phone: "(417)360-2260",
        email: "millingbydarrell@gmail.com"
      }
    }
  },

  travelLimits: 
    {
      title: "Travel Limits",
      image: new URL('@/assets/working/milling1.jpg', import.meta.url).href,
      layout: "right",
      content: "Example text."
    },

  faq: {
    title: "Frequently Asked Questions",
    image: new URL('@/assets/working/milling1.jpg', import.meta.url).href,
    layout: "left",
  },

}
</script>

<template>
  <!-- HEADER -->
  <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color main-header-spacing mb-8">
    {{ pageData.heading }}
  </h1>

  <!-- SERVICES HEADER -->
  <h2 :class="mobile ? 'h2-subheading mb-4' : 'loud-header-h2 mb-7'">
    {{ pageData.servicesHeading }}
  </h2>

  <!-- DYNAMIC SECTIONS -->
  <v-container :class="mobile ? 'v-text-small' : 'easy-to-see'">

    <ImageWithText 
      :imageUrl="pageData.pricing.image"
      layout="left"
    >
      <span class="textbox-title">Milling</span>
        <hr>
      <PricingSection
        :pricing="pageData.pricing.pricing"
      />
    </ImageWithText>

    <ImageWithText
      :imageUrl="pageData.travelLimits.image"
      layout="right"
    >
      <span class="textbox-title">{{ pageData.travelLimits.title }}</span>
      <hr>
        <v-container class="p-text-size p-text-line-height text-column">
            <span>I will travel to you, but I can only reach so far.</span>
            <span><b>If the job is outside of the Springfield, Ozark, or Nixa MO area</b>:
            <br>Travel expenses are added based on gas and time taken.</span>
            <span><b>If travel time is longer than 2 hours</b>:
            <br>I likely won't make the trip, but feel free to ask!</span>
        </v-container>
    </ImageWithText>

    <ImageWithText 
      :imageUrl="pageData.faq.image"
      :layout="left"
    >
      <div class="text-column">
        <span class="textbox-title">{{ pageData.faq.title }}</span>
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
  <div class="p-container">
      <p :class="mobile ? 'p-text-size-sm' : 'p-text-size-lg'" class="p-text">
          Have a downed tree you don't know what to do with?
          <br>Need custom milling for your project?
          <br><br>Slabs, rounds, whatever you need, I can cut it!<br><br>
          Bring your wood to me or let me come to you, either way, that log doesn't stand a chance against my saws!
      </p>
  </div>

  <EmbededVideo 
    url="https://www.youtube.com/embed/-AJfAfg8y0E"
  />

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
        rounded
        class="working-img"
        :src="img"
        eager
      />
    </v-col>
  </v-row>
</template>

<style scoped>

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
</style>