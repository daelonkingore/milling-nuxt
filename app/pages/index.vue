<script setup>
    import { useDisplay } from 'vuetify';
    import HeroCarousel  from '@/components/heroCarousel.vue';
    import ImageWithText  from '@/components/imageWithText.vue';
    
    const { mobile } = useDisplay({ mobileBreakpoint: 960 });

const heroBlock = {
  type: "carousel",

  height: "70vh",
  interval: 8000,

  slides: [
    {
      type: "hero",
      imageUrl: "images/wood-slabs/slabs_on_mill.jpg",
      title: "Custom Milling Done Right",
      subtitle: "We turn raw logs into beautiful lumber",
      button: {
        text: "View Services",
        to: "/services"
      }
    },
    {
      type: "hero",
      imageUrl: "https://res.cloudinary.com/dubulxjtb/image/upload/v1770526421/silverMaple_harnyr.jpg",
      title: "Wood Slabs or Rounds",
      subtitle: "Get ready for your next project",
      button: {
        text: "Check Out My Wood",
        to: "/gallery"
      }
    },
    {
      type: "hero",
      imageUrl: "https://res.cloudinary.com/dubulxjtb/image/upload/v1770529906/wood-rounds/gcxyhe8tgp1ni7egvzoj.jpg",
      title: "Contact Me",
      subtitle: "Reach out for quotes and info",
      button: {
        text: "Contact",
        to: "/contact"
      }
    }
  ]
}


const pageData = {
  title: "MILLING BY DARRELL",
  subtitle: "MILLING IN OZARK MISSOURI",
}

const resolveComponent = (type) => {
  const map = {
    imageWithText: ImageWithText,
    carousel: HeroCarousel,
  }
  return map[type]
}

const url = 'https://millingbydarrell.com'
const title = 'Home - Lumber Milling and Live Edge Slabs in Ozark, MO | Milling By Darrell'
const description = 'Custom wood milling, live edge slabs, and straight edge lumber in Ozark, Springfield, and Nixa Missouri.'
const image = 'https://millingbydarrell.com/images/working/milling2.jpg'

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

  defineLocalBusiness({
    name: 'Milling By Darrell',
    url,
    areaServed: [
      'Ozark',
      'Springfield',
      'Nixa',
      'Republic',
      'Branson'
    ]
  })
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
  <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color main-header-spacing mt-0">
    {{ pageData.title }}
  </h1>

  <v-container fill-height fluid class="hero-row">
    <component
      :is="resolveComponent(heroBlock.type)"
      :block="heroBlock"
    />
  </v-container>

  <h2 :class="mobile ? 'h2-subheading mb-6' : 'loud-header-h2'">
    {{ pageData.subtitle }}
  </h2>

  <v-container fluid class="mt-4 mb-4">

    <ImageWithText imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1770526415/wood_slabs2_i7vfqf.jpg" layout="left">
      <div class="text-column">
          <span>Milling By Darrell is a small scale milling business in the Christian County area.</span>
          
          <span>What started as a passionate hobby quickly turned into a passionate business. 
          Fueled by a love of chainsaws and the smell of fresh cut wood, Darrell is dedicated to his craft.</span>
          
              <span>Here you can find information on 
          <router-link to='/services' >
              Milling Services, 
          </router-link>
          or see some examples of 
          <router-link to='/gallery' >
              wood slabs and rounds 
          </router-link>
          for your next woodworking project! </span>
          
          <span><a href='https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh' target='_blank' rel='noopener noreferrer'>
              <b>Visit Marketplace Listings</b>
          </a>
          to see more what I have to offer.</span>
          
          <span>Text: <b>(417)360-2260</b></span>
          
          <span>Email: <b>millingbydarrell@gmail.com</b></span>
      </div>
    </ImageWithText>

    <ImageWithText
      imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1770526388/slabs-against-house_vrnvte.jpg"
      layout="right"
    >
      <div className="text-column">
        <span>If you need a slab of wood, wood round, mantelpiece, or post, I will cut it.</span>
        <span>If you need a fallen tree removed, I will take it.</span>
        <span>If you need a log milled to size, I will mill it.</span>
      </div>
    </ImageWithText>
  </v-container>
</template>

<style scoped>
    .hero-row {
        margin-bottom: 5px;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .header-color {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-bottom: 0px;
    }

    .v-container {
        margin-bottom: 5px;
        padding-top: 0px;
    }

    /* MOBILE */
    @media (max-width: 960px) {
        .main-header-small {
            letter-spacing: 3px;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>