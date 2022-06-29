<template lang="pug">
  div#app
    b-navbar
      b-navbar-brand Cybersecurity Skill Points
      b-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item-dropdown(text="Lang" right)
            b-dropdown-item en-US
            b-dropdown-item zh-TW
    b-container.mt-5(fluid)
      b-row.justify-content-center
        b-col(cols="2")
          b-card(no-body)
            b-card-body
              b-card-title Careers
            b-list-group(flush)
              b-list-group-item(v-for="career in careers") {{ career.name }}
        b-col(cols="4")
          v-chart
        b-col(cols="2")
          b-card(title="Details")
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

export default Vue.extend({
  name: "App",
  data() {
    return {
      careers: [],
      skills: [],
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
