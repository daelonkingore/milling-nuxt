<script setup>
import EmailForm from '@/components/emailForm.vue'
import ImageWithText from '@/components/imageWithText.vue'
import ContactSection from '~/sections/ContactSection.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

const pageData = {
  heading: "LET'S TALK WOOD",
  subheading: "CONTACT INFO AND MORE",
  aboutHeading: "ABOUT ME",

  contact: {
    intro: "Send me a text or email. I usually have my current stock of wood slabs and rounds available on",
    facebookLink: "https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh",
    phone: "(417)360-2260",
    email: "millingbydarrell@gmail.com",
    marketplace: {
      marketplaceLink: "https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh",
      marketplaceText: "Visit My Marketplace Listings"
    },
    location: "so if you live in Southern Missouri or Northern Arkansas and need wood milled, a fallen tree gone, or want to buy a wood slab at an affordable price, I'm your guy!",
    serviceAreas: "I mainly operate in the towns surrounding Ozark, including Sparta, Nixa, Springfield, Republic, Branson, Willard, and more.",
    youtubeLink: "https://www.youtube.com/@Millingbydarrell",
    callToActionText: "Check out my"
  },

  about: {
    text: "Client paragraph",
    image: new URL('@/assets/wood-slabs/bug_cube.jpg', import.meta.url).href,
    imageLeft: "right",
    variant: "card"
  },

  galleryImages: [
    new URL('@/assets/wood-slabs/bug_cube.jpg', import.meta.url).href,
    new URL('@/assets/people/milling-big-wood.jpg', import.meta.url).href,
    new URL('@/assets/wood-slabs/slabs_on_mill.jpg', import.meta.url).href,
  ]
}

const url = 'https://millingbydarrell.com/contact'
const title = 'Contact - Contact Custom Wood Milling in Ozark, MO | Milling By Darrell'
const description = 'Contact Milling By Darrell for quotes on custom milling, live edge wood slabs and rounds, and dimensional lumber in Ozark, Springfield, and Nixa Missouri.'
const image = 'https://millingbydarrell.com/images/working/slabs-on-mill.jpg'

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
  <!-- MAIN HEADER -->
  <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color main-header-spacing">
    {{ pageData.heading }}
  </h1>

  <!-- EMAIL FORM -->
  <!-- <div class="email-form">
    <EmailForm />
  </div> -->

  <!-- CONTACT HEADER -->
  <h2 :class="mobile ? 'h2-subheading mb-9' : 'loud-header-h2 mb-10'">
    {{ pageData.subheading }}
  </h2>

  <!-- CONTACT CARD -->
  <ContactSection class="pa-0"
    :contacts="pageData.contact"
  />

  <!-- ABOUT -->
  <h3 :class="mobile ? 'h3-subheading mb-4' : 'loud-header-h3 mb-7'">
    {{ pageData.aboutHeading }}
  </h3>

  <v-container fluid>
    <ImageWithText
        class="pt-7 img-height"
        imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1772417451/smileWithEquipment_jqswfm.jpg"
        layout="left"
    >
        <div class="text-content text-column">
            <span>
              Hi. I'm Darrell, owner of Milling By Darrell, LLC. I started my passion of milling in 2024. The smell, the texture, the patterns, 
              and the colors of wood are beautiful and very appealing. 
            </span>
            <span>
              Instead of burning it, I decided to start milling it. 
              I quickly fell in love with milling after seeing the outcome of a freshly sliced log and how beautiful it was. 
              As I continued gaining experience I found how enjoyable and rewarding milling had become. 
            </span>
            <span>
              I want to share this passion with you. I hope you'll find this website appealing. Please feel free to review my work and the 
              creations that many of my customers have sent me in the “customer creations” area. I offer milling services and sell slabs of wood, 
              as well as complete custom milling to fit your needs. Should you still have questions, my contact information is listed in this website. 
            </span>
            <span>
            Feel  free to send me a message or give me a call. Remember, it's a great day to mill!
            </span>
        </div>
    </ImageWithText>
  </v-container>

  <!-- IMAGE ROW -->
  <v-row class="contacts-pics-row">
    <v-col
      v-for="(img, index) in pageData.galleryImages"
      :key="index"
      cols="12"
      md="4"
      class="d-flex justify-center"
      v-show="mobile ? index === 1 : true"
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
.contacts-pics-row {
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  max-width: 90%;
  margin: 0 auto;
}
</style>