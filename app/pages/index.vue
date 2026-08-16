<script setup>
  import { useDisplay } from 'vuetify';
  import HeroCarousel  from '@/components/heroCarousel.vue';
  import ImageWithText  from '@/components/imageWithText.vue';
  import EmbededVideo from '~/components/EmbedVideo.vue'
  import ScheduleMillingBtn from '~/components/ScheduleMillingBtn.vue';
  
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
        subtitle: "Turning raw logs into beautiful lumber",
        button: {
          text: "View Services",
          to: "/services"
        }
      },
      {
        type: "hero",
        imageUrl: "https://res.cloudinary.com/dubulxjtb/image/upload/v1782668152/working/r2qvw9003qvhgqsyigqo.jpg",
        title: "Schedule a Milling Job",
        subtitle: "Let's mill something",
        button: {
          text: "Schedule Now",
          to: "/schedule"
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

  const resolveComponent = (type) => {
    const map = {
      imageWithText: ImageWithText,
      carousel: HeroCarousel,
    }
    return map[type]
  }

  const url = 'https://millingbydarrell.com'
  const title = 'Lumber Milling and Live Edge Slabs in Ozark, MO | Milling By Darrell'
  const description = 'Custom wood milling, live edge slabs, and straight edge lumber in Ozark, Springfield, and Southwest Missouri.'
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
    MILLING BY DARRELL
  </h1>

  <v-container fill-height fluid class="hero-row">
    <component
      :is="resolveComponent(heroBlock.type)"
      :block="heroBlock"
    />
  </v-container>

  <EmbededVideo 
    url="https://www.youtube.com/embed/Jti5MyGy3gA"
  />

  <h2 :class="mobile ? 'h2-subheading mb-6' : 'loud-header-h2'">
    MILLING IN OZARK MISSOURI
  </h2>

  <v-container :class="mobile ? 'v-text-small' : 'mt-4 mb-4'"
    class="home-info-width"
  >
    <ImageWithText 
      imageUrl="https://res.cloudinary.com/dubulxjtb/image/upload/v1770526415/wood_slabs2_i7vfqf.jpg" 
      layout="left"
      height="480px"
      :imgHeight="mobile ? '300px' : '480px'"
    >
      <div class="text-column">
          <span>Milling By Darrell is a small scale milling business in the Southwest Missouri area.
          </span>

          <span>
            I mill live edge slabs or lumber to use for your projects.
            If you need wood for a table, mantelpiece, or other woodworking project, I can mill it at a great price.
          </span>
          
          <span>Here you can find information on 
            <router-link to='/services' >
              Milling Services, 
            </router-link>
            or see some examples of 
            <router-link to='/gallery' >
              wood slabs and rounds.
            </router-link>
          </span>
          
          <span>
            <a href='https://www.facebook.com/marketplace/profile/100069335852473/?ref=permalink&mibextid=6ojiHh' target='_blank' rel='noopener noreferrer'>
            <b>Visit Marketplace Listings</b>
          </a>
          to see more what I have to offer.</span>
          
          <span>Text: <b>(417)360-2260</b></span>
          
          <span>Email: <b>millingbydarrell@gmail.com</b></span>
          <ScheduleMillingBtn />
          
      </div>
    </ImageWithText>
  </v-container>

  <ImageWithText
    layout="overlay"
    class="small-wood-type-desc"
  >
    
    <span>I mill all sorts of wood. If you need a specific type for a project, 
      <router-link to='/contact' >
        contact me 
      </router-link>
      and there is a good chance I have it, or I can source it.
    </span>
  </ImageWithText>

  <v-container :class="mobile ? 'v-text-small' : 'textBoxColumns mt-4 mb-4'"
    class="home-info-width"
  >
    <ImageWithText
      imageUrl="images/wood-slabs/pretty-dark-brown-slabs.jpg"
      layout="top"
      :height="mobile ? '260px' : '280px'"
      :imgHeight="mobile ? '50vh' : '70vh'"
    >
      <span class="textbox-title">Hardwoods</span>
      <hr>
      <div className="text-column text-spacing">
        <span>
          <strong>Hardwoods</strong> are dense and strong, making them great for furniture, mantelpieces, or structural wood like beams. 
        </span>
        <span>
          I frequently have White Oak and Walnut available in stock, but I often have types such as
          Elm, Hickory, Ash, and more.
        </span>
      </div>
    </ImageWithText>
    <ImageWithText
      imageUrl="images/wood-slabs/pretty-red-slabs.jpg"
      layout="top"
      :height="mobile ? '260px' : '280px'"
      :imgHeight="mobile ? '50vh' : '70vh'"
    >
      <span class="textbox-title">Softwoods</span>
      <hr>
      <div className="text-column text-spacing">
        <span>
          <strong>Softwoods</strong> are light and cheap, perfect for construction material, lightweight shelves, garden beds, or outdoor furniture.
        </span>
        <span>
          I regularly stock both Pine and Cedar.
        </span>
      </div>
    </ImageWithText>
  </v-container>
</template>

<style scoped>

  .small-wood-type-desc {
    width: 60%;
  }

  .home-info-width {
    max-width: 1800px;
  }

  .home-info-ending-width {
    width: 80%;
  }

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

    .home-info-ending-width {
      width: 100%;
    }

    .small-wood-type-desc {
      width: 100%;
    }
  }
</style>