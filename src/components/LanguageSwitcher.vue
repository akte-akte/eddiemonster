<template>
<div>
   <select @change="change($event.target.value)">
    <option value="en">English</option>
    <option value="ko">Korean</option>
  </select>
<p> <!-- bit clumsy -->
  <span> {{ t('hello', {}, {locale: lang}) }} </span> <span> {{ t('name', {}, {locale: lang}) }}</span> <span> {{ t('flag', {}, {locale: lang}) }}</span> 
</p>
</div>  
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: 'LanguageSwitcher', // seems like too many letters
  setup() {
    const {t, locale} = useI18n();
    return {t, locale};
  },
  data() {
    return {
      lang: 'en'
    }
  },
  methods: {
    change(lang) {
      this.lang = lang;
    }
  }
}
</script>