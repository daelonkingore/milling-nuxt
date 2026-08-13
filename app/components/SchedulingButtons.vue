<script setup>
  const { mobile } = useDisplay({ mobileBreakpoint: 960 })

  const calendly = useCalendly()
  const openWoodPickupCalendly = () => {
      calendly.showPopupWidget('https://calendly.com/daelonkingore/30min')
  }
  const openMillingCalendly = () => {
      calendly.showPopupWidget('https://calendly.com/daelonkingore/milling-job')
  }
</script>

<template>
    <v-container :class="mobile ? '' : 'textBoxColumns schedule-btn-spacing'" class="pa-0">
      <ImageWithText
        imageUrl=""
        layout="overlay"
        class=""
        :height="mobile ? '' : '275px'"
      >
        <div class="text-spacing">
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
        </div>
      </ImageWithText>

      <ImageWithText
        imageUrl=""
        layout="overlay"
        class=""
        :height="mobile ? '' : '275px'"
      >
      <div class="text-spacing">
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
      </div>
      </ImageWithText>
    </v-container>
</template>

<style scoped>
  .schedule-btn-spacing {
    max-width: 1600px;
    padding-left: 20px;
    padding-right: 20px;
  }

    .set-margin-top {
      margin-top: 10px;
      padding-bottom: 30px;
    }

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
  
  .set-width {
    width: 100%;
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

    .set-width {
      width: 100%;
      margin: 40px;
    }
}
</style>