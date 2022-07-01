<template lang="pug">
  b-card.details-card(:title="$t('detailsCard.title')")
    div(v-if="skillPoint !== null")
    div(v-else-if="career !== null")
    b-card-text(v-else) {{ $t('detailsCard.description') }}
</template>

<script>
import { Career, SkillPoint } from "@/models";

export default {
  name: "DetailsCard",
  props: {
    career: {
      type: Career,
      default: null,
    },
    skillPoint: {
      type: SkillPoint,
      default: null,
    },
  },
};
</script>

<style scoped>
.details-card {
  min-height: 400px;
}
</style>
