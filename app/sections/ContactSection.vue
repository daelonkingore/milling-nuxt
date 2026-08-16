<script setup>
import { useDisplay } from 'vuetify'
import ImageWithText from '@/components/imageWithText.vue'
import ScheduleMillingBtn from '~/components/ScheduleMillingBtn.vue';

const { mobile } = useDisplay({ mobileBreakpoint: 960 })
</script>

<template>

  <div :class="mobile ? '' : 'textBoxColumns'" class="">

    <ImageWithText
      imageUrl=""
      layout="overlay"
      class="contact-section-width"
      :height="mobile ? '300px' : '380px'"
    >
      <div :class="mobile ? 'p-text-size-sm-con' : 'p-text-size-md-con'" class="text-spacing">

        <span class="textbox-title">Scheduling</span>
        <hr class="heading-line-width">

        <div class="text-column">
          <div>
            Use this to schedule a milling job. 
            <ScheduleMillingBtn />
            <p :class="mobile ? 'p-text-size-sm-con' : 'p-text-size-md-con'">
              Or visit the 
              <router-link to='/schedule' >
                <b>Scheduling tab </b>
              </router-link>
              to set up an appointment to start milling. 
            </p>
          </div>
        </div>
      </div>
    </ImageWithText>

    <ImageWithText
        imageUrl=""
        layout="overlay"
        class="contact-section-width"
        :height="mobile ? '340px' : '380px'"
      >
      <div :class="mobile ? 'p-text-size-sm-con' : 'p-text-size-md-con'" class="text-spacing">
        <span class="textbox-title">Contact</span>
        <hr class="heading-line-width">

        <div class="text-column">
            <div class="bordered-text">
              
              <div>
                <div class="contact-row">
                  <v-icon icon="mdi-phone"></v-icon>
                  <span>Text: <b>(417)360-2260</b></span>
                </div>

                <div class="contact-row">
                  <v-icon icon="mdi-email"></v-icon>
                  <span>Email: <b>millingbydarrell@gmail.com</b></span>
                </div>

                <div class="contact-row">
                  <v-icon icon="mdi-facebook"></v-icon>
                  <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh" target="_blank">
                    <b>Visit My Marketplace Listings</b>
                  </a>
                </div>

                <div class="contact-row">
                  <v-icon icon="mdi-youtube"></v-icon>
                  <a href="https://www.youtube.com/@Millingbydarrell" target="_blank">
                    <b>Check out my Youtube</b>
                  </a>
                </div>
              </div>
              
          </div>
        </div>  

      </div>
    </ImageWithText>

    <ImageWithText
      imageUrl=""
      layout="overlay"
      class="contact-section-width"
      :height="mobile ? '300px' : '380px'"
    >
      <div :class="mobile ? 'p-text-size-sm-con' : 'p-text-size-md-con'" class="text-spacing">
        <span class="textbox-title">Location</span>
        <hr class="heading-line-width">

        <div class="text-column">
          <div>
            <p>
            <v-icon icon="mdi-map-marker"></v-icon>
              Ozark, Missouri
            </p>
            <p>
              I also serve Springfield, Nixa, Sparta, and the surrounding Southern Missouri and Northern Arkansas area.
            </p>
            <p>
              Please text, email, or send me a message on 
              <a href="https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink" target="_blank">
                <b>Facebook </b>
              </a>
              for the address.
            </p>
          </div>
        </div>

      </div>
    </ImageWithText>

  </div>
</template>

<style scoped>
.submit-button {
  margin-top: 17px;
}

.heading-line-width {
  width: 100%;
}

.bordered-text {
  border: rgb(187, 187, 187) solid 2px;
  border-radius: 15px;
  display: inline-block;
  padding: 15px;
  margin: 10px;
  line-height: 28px;
}

.contact-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.contact-row .v-icon {
  margin-right: 10px;
  width: 24px;
}

.contact-section-width {
  width: 85%;
}

.p-text-size-md-con {
  font-size: 1rem;
  font-weight: 400;
}

.p-text-size-sm-con {
  font-size: 16px;
  width: 100%;
  line-height: 1.3;
}

/* MOBILE */
@media (max-width: 960px) {
    .contact-section-width {
      width: 100%;
    }
}

</style>