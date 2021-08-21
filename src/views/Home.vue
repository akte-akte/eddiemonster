<template>
  <div class="home">
    <LanguageSwitcher/>
    <HelloEddie msg="Hello Eddie"/>
    <img alt="great green star" src="../assets/eddie-star.svg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloEddie from '@/components/HelloEddie.vue'

export default {

  name: 'Home',
  components: {
    HelloEddie
  }
}
</script>
