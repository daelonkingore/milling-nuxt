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
  <v-row class="ma-0" align="stretch">
    <v-col cols="12" md="6" class="d-flex">
      <v-card
        :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="pa-6 p-container p-text d-flex flex-column flex-grow-1"
        rounded="xl"
        elevation="4"
      >
        <p class="flex-grow-1">
          Use this to schedule a milling job. I will come out and mill your logs or
          stumps to your chosen dimensions. See the 
          <router-link to='/services' >
              Milling Services
          </router-link>
          page for pricing
          and more info.
        </p>

        <v-btn
          class="submit-button mt-auto"
          type="submit"
          @click="openMillingCalendly"
        >
          Schedule a milling job
        </v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" class="d-flex">
      <v-card
        :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="pa-6 p-container p-text d-flex flex-column flex-grow-1"
        rounded="xl"
        elevation="4"
      >
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
          Schedule a wood pickup
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</v-container>

  <!-- EMAIL FORM -->
  <div class="email-form">
    <EmailForm />
  </div>

</template>

<style scoped>
    .v-card {
        margin: 10px auto;
    }

    .setWidth {
        width: 100%;
    }

    .flex-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-bottom: 10px;
        max-width: 1600px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .submit-button {
        background-color: #438a4d;
        width: 200px;
        margin: 0 auto;
    }

@media (max-width: 600px) {
    .flex-buttons {
        flex-direction: column;
        align-items: center;
        padding-left: 0px;
        padding-right: 0px;
    }

    .submit-button {
        width: 100%;
        max-width: 300px;
    }
}
</style>