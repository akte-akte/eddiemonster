<template>
  <div class="home">
    <LanguageSwitcher/>
    <HelloEddie msg="Hello Eddie"/>
    <img alt="great green star" src="../assets/eddie-star.svg">
  </div>
</template>

<script>
// @ is an alias to /src
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import HelloEddie from '@/components/HelloEddie.vue'

export default {

  name: 'Home',
  components: {
    LanguageSwitcher,
    HelloEddie
  }
}
</script>
