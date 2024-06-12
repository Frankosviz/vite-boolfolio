<template>
  <HeaderComponent />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import ProjectList from './pages/ProjectList.vue';
import AppHome from './pages/AppHome.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import { store } from './store';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    ProjectList,
    AppHome,
    AboutComponent,
    ContactComponent
  },
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped></style>