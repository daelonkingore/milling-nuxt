<script setup>
import { useDisplay } from 'vuetify'
import ImageWithText from '@/components/imageWithText.vue'

const { mobile } = useDisplay({ mobileBreakpoint: 960 })

defineProps({
  contacts: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <ImageWithText
      imageUrl=""
      layout="overlay"
      class="contact-section-width"
      :height="mobile ? '680px' : '500px'"
    >
    <div :class="mobile ? 'p-text-size-sm-con' : 'p-text-size-md-con'">
      <p>
        Visit the 
        <router-link to='/gallery' >
          <b>Scheduling </b>
        </router-link>
        tab to set up an appointment to start milling, or find time to buy my pre-cut lumber.
      </p>
      <p>
        {{ contacts.intro }}
        <a :href="contacts.facebookLink" target="_blank">
          <b>Facebook</b>
        </a>
      </p>

      <p class="bordered-text">
        <span v-if="contacts.phone">Text: <b>{{ contacts.phone }}</b></span><br>
        <span v-if="contacts.email">Email: <b>{{ contacts.email }}</b></span><br>
        <a v-if="contacts.marketplace" :href="contacts.marketplace.marketplaceLink" target="_blank">
          <b>{{ contacts.marketplace.marketplaceText }}</b>
        </a>
      </p>

      <p v-if="contacts.location">
        I am based in <b>Ozark, Missouri</b>, {{ contacts.location }}
      </p>
      <p v-if="contacts.serviceAreas">
        {{ contacts.serviceAreas }}.
      </p>

      <p v-if="contacts.youtubeLink || contacts.facebookLink">
        <br>
        {{ contacts.callToActionText }}

        <template v-if="contacts.youtubeLink">
            <a :href="contacts.youtubeLink" target="_blank">
            <b>YouTube</b>
            </a>
        </template>

        <template v-if="contacts.youtubeLink && contacts.facebookLink">
            and
        </template>

        <template v-if="contacts.facebookLink">
            <a :href="contacts.facebookLink" target="_blank">
            <b>Visit My Facebook</b>
            </a> for timelapses of my work, and more!
        </template>
      </p>
    </div>
  </ImageWithText>
</template>

<style scoped>
.bordered-text {
  border: rgb(187, 187, 187) solid 2px;
  border-radius: 15px;
  display: inline-block;
  padding: 15px;
  margin: 10px;
  line-height: 28px;
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