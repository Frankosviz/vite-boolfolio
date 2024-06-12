<template>
  <h1 class="text-center">Projects</h1>
  <ul class="nav justify-content-center">
    <li v-for="(item, index) in menuItems" :key="index">
      <router-link :to="{ name: item.routeName }" class="nav-link">
        {{ item.label }}
      </router-link>
    </li>
  </ul>

  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import { store } from './store';
export default {
  name: 'App',
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home"
        },
        {
          label: "Projects",
          routeName: "projects"
        },
        {
          label: "About",
          routeName: "about"
        },
        {
          label: "Contacts",
          routeName: "contact"
        },
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>