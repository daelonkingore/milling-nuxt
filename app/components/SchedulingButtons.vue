<script setup>
  import ScheduleMillingBtn from '~/components/ScheduleMillingBtn.vue';
  const { mobile } = useDisplay({ mobileBreakpoint: 960 })
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

          <ScheduleMillingBtn />
        </div>
      </ImageWithText>
    </v-container>
</template>

<style scoped>
  .schedule-btn-spacing {
    width: 70%;
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

  .v-card {
    width: 100%;
    height: 80%;
  }
  
  .set-width {
    width: 100%;
  }

  @media (max-width: 600px) {
    .schedule-btn-spacing {
      width: 100%;
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