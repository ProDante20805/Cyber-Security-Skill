<template lang="pug">
  div#app
    b-navbar
      b-navbar-brand
        h2 {{ $t('app.title') }}
      b-collapse(is-nav)
        b-navbar-nav.ml-auto
          language-selector
    b-container.mt-5(fluid)
      b-row
        b-col
          p {{ $t('app.description') }}
      b-row.justify-content-center.my-5
        b-col(cols="2")
          career-selector(v-model="selectedCareer")
        b-col(cols="4")
          skill-points-chart(:career="selectedCareer")
        b-col(cols="2")
          details-card(:career="selectedCareer")
      b-row
        b-col
          p(v-for="level in [0,2,4,6,8,10]") {{ level }}: {{ $t(`levels.${level}.description`) }}
      b-row
        b-col
          p.text-center
            | © 2022 Alyssum
            | |
            |
            b-link(href="https://github.com/Alyssum-Studio/cybersecurity-skill-points") GitHub
</template>

<script lang="ts">
import Vue from "vue";
import CareerSelector from "@/components/CareerSelector.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import SkillPointsChart from "@/components/SkillPointsChart.vue";
import DetailsCard from "@/components/DetailsCard.vue";

export default Vue.extend({
  name: "App",
  components: {
    DetailsCard,
    SkillPointsChart,
    LanguageSelector,
    CareerSelector,
  },
  data() {
    return {
      selectedCareer: null,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
