<template>
<div>
   <select @change="change($event.target.value)">
      <option value="en">English</option>
      <option value="ko">Korean</option>
    </select>
  <!-- this is  clumsy -->
  <h1> 
    <span>{{ t('hello', {}, {locale: lang}) }} </span> <span> {{ t('name', {}, {locale: lang}) }}</span> <span> {{ t('flag', {}, {locale: lang}) }}</span> 
  </h1>
</div>  
</template>

<script>
import { useI18n } from 'vue-i18n'
import { mapState } from 'vuex'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale};
  },
  data() {
    return {
      lang: ' '
    }
  },
  computed: {
    ...mapState(['locale', 'lang'])
  },
  methods: {
    change(lang) {
      this.lang = lang;
      this.$store.commit('changeLang', lang);
    
    }
  }
}
</script>
