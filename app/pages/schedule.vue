<script setup>
  import { useDisplay } from 'vuetify';
  import SchedulingButtons from '~/components/SchedulingButtons.vue';
  import ImageWithText from '~/components/imageWithText.vue';

  const { mobile } = useDisplay({ mobileBreakpoint: 960 });
  
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
    <!-- <v-container class="pa-0">
        <v-card :class="mobile ? 'p-text-size-sm' : 'p-text-size-md'"
        class="mx-auto pa-6 p-container p-text mt-0 container-spacing"
        width="100%"
        rounded="xl"
        elevation="4"
        >
            <p>Ready to mill or need some wood? Click one of the buttons below to Schedule an Appointment!</p>
            <p>I may contact you via email for more information or updates.</p>
        </v-card>
  </v-container class="setWidth"> -->

  <ImageWithText
    imageUrl="images/wood-slabs/wood-rounds.jpg"
    layout="overlay"
    class="set-width"
  >
    <span>
      <p>Ready to mill or need some wood? Click one of the buttons below to Schedule an Appointment!</p>
      <p>I may contact you via email for more information or updates.</p>
    </span>
  </ImageWithText>

  <SchedulingButtons />

  <!-- EMAIL FORM -->
  <!-- <div class="email-form">
    <EmailForm />
  </div> -->

</template>

<style scoped>
    .container-spacing {
      margin-bottom: 0px;
    }

    .set-width {
      width: 70%;
    }

/* MOBILE */
@media (max-width: 960px) {
    .set-width {
      width: 100%;
    }
}
</style>