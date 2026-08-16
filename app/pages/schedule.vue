<script setup>
  import { useDisplay } from 'vuetify';
  import SchedulingButtons from '~/components/SchedulingButtons.vue';
  import ImageWithText from '~/components/imageWithText.vue';

  const { mobile } = useDisplay({ mobileBreakpoint: 960 });
  
  const url = 'https://millingbydarrell.com/schedule'
  const title = 'Appointments for Custom Wood Milling pickup in Southwest MO | Milling By Darrell'
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

  <SchedulingButtons />

  <ImageWithText
    imageUrl="images/wood-slabs/wood-rounds.jpg"
    layout="overlay"
    class="set-width"
    theme="dark-transparent"
    height="260px"
    imgHeight="260px"
  >
    <span>
      <p>Remember to look at the
        <router-link to='/services' >
          <b>Services </b>
        </router-link>
        page for more information about pricing, maximum log dimensions, travel limits, and frequently asked questions.
        <br><br>
        For examples of my live edge wood, dimensional lumber, or finished product made by previous customers, see the 
        <router-link to='/gallery' >
          <b>Wood Slabs and Rounds </b>
        </router-link>
        page.
      </p>
    </span>
  </ImageWithText>

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
    width: 75%;
  }

/* MOBILE */
@media (max-width: 960px) {
    .set-width {
      width: 100%;
    }
}
</style>