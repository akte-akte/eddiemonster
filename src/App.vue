<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/potato">Potato</router-link>
    <language-switcher/>
  </div>
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
  margin: 0 auto; 
  display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
	align-content: center;
}

#nav {
  padding: 30px 60px;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-start;
	align-content: center;
  max-width: 80vw;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a::after{
  content: '|';
  margin: 1em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
