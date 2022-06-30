import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context("./langs/", true, /[A-Za-z\d-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z\d-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: loadLocaleMessages(),
});
