<script setup>
import ScheduleMillingBtn from '~/components/ScheduleMillingBtn.vue';
</script>

<template>
  <v-container>
    <div class="pricing-section">

      <div class="pricing-header">
        Pricing
        <span class="sub"> - Based on log width</span>
      </div>

      <table class="pricing-table">
        <tbody>
          <tr>
            <td>25" or less</td>
            <td>$75</td>
          </tr>
          <tr>
            <td>25" - 45"</td>
            <td>$130</td>
          </tr>
          <tr>
            <td>45" or more</td>
            <td>$125</td>
          </tr>
        </tbody>
      </table>

      <div class="pricing-note" style="white-space: pre-line">
        2 hour minimum
          <br>
        $30 stationary saw blade replacement
          <br>
        $100 chainsaw blade replacement
      </div>

      <div class="dimensions">
        <strong>Dimensions</strong>
        <span class="sub">
          - Max log width
        </span>

        <div>
          Stationary mill: up to 36" wide
            <br>
          Portable saws: up to 51" wide
        </div>
      </div>

      <div class="contact-info" >
        <div>
            Text:
            <b>(417)360-2260</b>
        </div>

        <div>
            Email: <b>millingbydarrell@gmail.com</b>
        </div>
      </div>
      <ScheduleMillingBtn />

    </div>
  </v-container>
</template>

<style scoped>


.pricing-section {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.pricing-header {
  font-size: 18px;
  font-weight: 600;
}

.sub {
  font-weight: 400;
  opacity: 0.8;
  font-size: 14px;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
}

.pricing-table td {
  padding: 12px 0;
}

.pricing-table td:last-child {
  text-align: left;
  font-weight: 600;
}

.pricing-table tr:not(:last-child) td {
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

.pricing-note,
.dimensions,
.contact-info {
  line-height: 1.5;
  opacity: 0.9;
}
</style>