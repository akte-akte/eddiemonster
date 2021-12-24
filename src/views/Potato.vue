<template>
  <div class="potato">
    <div class="blockquote-wrapper">
    <blockquote>
    <h2>{{ t('musings', {}, {locale: lang}) }}</h2>
      <p>{{ t('want-to-be', {}, {locale: lang}) }}</p>
      </blockquote>
    </div>
    <img src="../assets/potato-with-blue-eyes.png" class="post-image" />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { mapState } from 'vuex'

export default {
  setup() {
    const {t, locale} = useI18n();
    return {t, locale};
  },
   computed: {
    ...mapState(['locale', 'lang'])
  }
}
</script>

<style>
.post-image{
  max-width: 40vw;
}

/* center the blockquote in the page */
blockquote-wrapper {
   display: flex;
}

/* Blockquote main style */
blockquote {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    padding: 30px 0;
    width: 100%;
    max-width: 500px;
    margin: 80px auto;
    align-self: center;
    border-top: solid 1px;
    border-bottom: solid 1px;
}

/* Blockquote header */
blockquote h2 {
    position: relative;
    font-size: 40px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
}

/* Blockquote right double quotes */
blockquote:after {
    position: absolute;
    content: "”";
    color: orangered;
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
}

/* Blockquote left double quotes */
blockquote:before {
    position: absolute;
    content: "“";
    color: orangered;
    font-size: 10rem;
    line-height: 0;
    top: 36px;
    left: 30px;
    opacity: 50%;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
    blockquote h2 {
        font-size: 60px;
   }

}

/* Blockquote subheader */
blockquote p {
    position: relative;
    color: #292a2b;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    padding-top: 20px;
    z-index: 1;
}
</style>