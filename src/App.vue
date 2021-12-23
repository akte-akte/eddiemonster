<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/potato">Potato</router-link>
  </div>
  <language-switcher/>
  <router-view/>
  
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { mapState } from 'vuex'

export default {
  components: { LanguageSwitcher },
  computed: {
    ...mapState(['locale', 'lang'])
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
