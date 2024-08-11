<template>
  <div id="app">
    <AppHeader  />
    <router-view path="$router.key" />
    <FooterPage />
  </div>
</template>

<script>
import './styles/global.css'
import AppHeader  from './components/AppHeader.vue';
import FooterPage from './pages/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    FooterPage,
  }
}
</script>


