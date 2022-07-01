<template lang="pug">
  b-card(no-body)
    b-card-body
      b-card-title {{ $t('careerSelector.title') }}
    b-list-group(flush)
      b-list-group-item(
        button
        :active="value === null"
        @click="$emit('input', null)"
        ) {{ $t(`careerSelector.optionAllTitle`) }}
      b-list-group-item(
        button
        v-for="career in careers"
        :active="value === career"
        @click="$emit('input', career)"
      ) {{ $t(`careers.${career.id}.name`) }}
</template>

<script lang="ts">
import { careers } from "@/resources";
import { Career } from "@/models";

export default {
  name: "CareerSelector",
  props: {
    value: {
      type: Career,
      default: null,
    },
  },
  computed: {
    careers() {
      return careers;
    },
  },
};
</script>

<style scoped></style>
