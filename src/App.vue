<template>

  <body>
    <div class="f-d-wrapper">


      <div class="f-d-content">
        <div class="f-d-header">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav me-auto text-center">
            <HeaderComponent />
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav d-flex flex-row gap-3">
            <li class="nav-item text-center search-container d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-magnifying-glass f-d-li-unique" id="search-icon"></i>
              <input type="text" id="search-bar" placeholder="Search...">
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" href="#"><i class="fa-solid fa-house"></i>
              </a>
            </li>
            <!-- Authentication Links -->

            <li class="nav-item text-center">
              <a class="nav-link" href="#"><i class="fa-solid fa-user"></i>
              </a>
            </li>

            <li class="nav-item text-center bounce-title">
              <a class="nav-link" href="#"><i class="fas fa-user-plus"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="f-d-sidebar">
          <a class="navbar-brand d-flex align-items-center" href="">
            <div class="f-d-page-title">
              Projects
            </div>

          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <SidebarComponent />
          </div>
        </div>
        <main class="f-d-main">
          <router-view></router-view>
        </main>
      </div>

    </div>
  </body>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import ProjectList from './pages/ProjectList.vue';
import AppHome from './pages/AppHome.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import { store } from './store';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    ProjectList,
    AppHome,
    AboutComponent,
    ContactComponent,
    SidebarComponent
  },
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped></style>