<template lang="pug">
  b-card.details-card(:title="$t('detailsCard.title')")
    b-card-text {{ $t('detailsCard.description') }}
</template>

<script>
export default {
  name: "DetailsCard",
};
</script>

<style scoped>
.details-card {
  min-height: 400px;
}
</style>
