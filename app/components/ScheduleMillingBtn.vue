<script setup>
  const calendly = useCalendly()
  const openMillingCalendly = () => {
      calendly.showPopupWidget('https://calendly.com/daelonkingore/milling-job')
  }
</script>

<template>
    <v-btn
        class="submit-button mt-auto"
        type="submit"
        @click="openMillingCalendly"
    >
        Schedule a Milling Job
    </v-btn>
</template>