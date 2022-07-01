<template lang="pug">
  b-nav-item-dropdown(right)
    template(#button-content)
      b-icon-globe
    b-dropdown-item(
      v-for="lang in Object.keys($i18n.messages)"
      @click="$i18n.locale = lang"
      ) {{ lang }}
</template>

<script>
export default {
  name: "LanguageSelector",
};
</script>

<style scoped></style>
