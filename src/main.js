import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import en from './translations/en.json'
import ko from './translations/ko.json'

const i18n = createI18n({
    messages: {
        en: en,
        ko: ko
    },
    fallbackLocale: 'en'
})

const app = createApp(App).use(router)

app.use(i18n)
app.mount('#app')

