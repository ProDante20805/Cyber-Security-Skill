<template lang="pug">
  b-card(no-body)
    b-card-body
      b-card-title {{ $t('careerSelector.title') }}
    b-list-group(flush)
      b-list-group-item(
        button
        :active="selectedCareer === null"
        @click="selectedCareer = null"
        ) {{ $t(`careerSelector.optionAllTitle`) }}
      b-list-group-item(
        button
        v-for="career in careers"
        :active="selectedCareer === career"
        @click="selectedCareer = career"
      ) {{ $t(`careers.${career.id}.name`) }}
</template>

<script lang="ts">
import { careers } from "@/resources";

export default {
  name: "CareerSelector",
  data() {
    return {
      careers: careers,
      selectedCareer: null,
    };
  },
};
</script>

<style scoped></style>
