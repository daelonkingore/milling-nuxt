<script setup>
  import { useDisplay } from 'vuetify';
  const { mobile } = useDisplay({ mobileBreakpoint: 960 });

  const calendly = useCalendly()
  const openWoodPickupCalendly = () => {
      calendly.showPopupWidget('https://calendly.com/daelonkingore/30min')
  }
  const openMillingCalendly = () => {
      calendly.showPopupWidget('https://calendly.com/daelonkingore/milling-job')
  }
  
const url = 'https://millingbydarrell.com/schedule'
const title = 'Scheduling - Appointments for Custom Wood Milling and lumber pickup in Ozark, MO | Milling By Darrell'
const description = 'Scheduling wood pickup and milling appointments for Milling By Darrell in Ozark, Springfield, Nixa, and Southwest Missouri.'
const image = 'https://millingbydarrell.com/images/working/closeup-mill.jpg'

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
    <h1 :class="mobile ? 'pt-6 main-header-small' : 'main-header'" class="header-color main-header-spacing">
        LET'S MEET
    </h1>
    <v-container class="pa-0">
        <v-card :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="mx-auto pa-6 p-container p-text mt-0"
        width="100%"
        rounded="xl"
        elevation="4"
        >
            <p>Ready to mill or need some wood? Click one of the buttons below to Schedule an Appointment!</p>
            <p>I may contact you via email for more information or updates.</p>
        </v-card>
  </v-container class="setWidth">
<v-container class="flex-buttons pa-0">
  <v-row
    class="ma-0"
    justify="center"
    align="stretch"
    dense
  >
    <v-col class="d-flex">
      <v-card
        :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="pa-6 p-container p-text d-flex flex-column flex-grow-1"
        rounded="xl"
        elevation="4"
      >
        <span class="textbox-title">Schedule Milling Job</span>
        <hr>
        <p class="flex-grow-1">
          Use this to schedule a milling job. I will come out and mill your logs or
          stumps to your chosen dimensions. See the
          <router-link to="/services">
            Milling Services
          </router-link>
          page for pricing and more info.
        </p>

        <v-btn
          class="submit-button mt-auto"
          type="submit"
          @click="openMillingCalendly"
        >
          Schedule a Milling Job
        </v-btn>
      </v-card>
    </v-col>

    <v-col class="d-flex">
      <v-card
        :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="pa-6 p-container p-text d-flex flex-column flex-grow-1"
        rounded="xl"
        elevation="4"
      >
        <span class="textbox-title">Schedule Wood Pickup</span>
        <hr>
        <div class="flex-grow-1">
          <p>
            Use this to schedule a time to come to my location and look at what
            lumber I have available. Visit my
            <a
              href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink"
              target="_blank"
            >
              <b>Facebook</b>
            </a>
            for prices.
          </p>
        </div>

        <v-btn
          class="submit-button mt-auto"
          type="submit"
          @click="openWoodPickupCalendly"
        >
          Schedule a Wood Pickup
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</v-container>

  <!-- EMAIL FORM -->
  <!-- <div class="email-form">
    <EmailForm />
  </div> -->

</template>

<style scoped>
    hr {
      width: 100%;
      border: 0;
      border-top: 1px solid #ccc;
    }

    .flex-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .flex-buttons .v-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .flex-buttons .v-col {
    flex: 1 1 0;
    max-width: 50%;
  }

  .v-card {
    width: 100%;
    height: 80%;
  }

  .submit-button {
    background-color: #438a4d;
    width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    .flex-buttons .v-row {
      flex-direction: column;
      gap: 0;
    }

    .flex-buttons .v-col {
      max-width: 100%;
    }

    .submit-button {
      width: 100%;
      max-width: 300px;
    }
  }
</style>