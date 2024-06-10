<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>

  <div v-for="project in projects" :key="project.id">{{project.title}}
  <img :src="store.imgBasePath + project.cover_image" :alt="project.title">
  </div>


</template>

<script>
import { store } from './store';
import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        store,
        projects : [],
        // nextPage: 0,
        // currentPage: 0
      }
    },
    methods : {
      getAllProjects(){
        axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
          //console.log(res.data)
          this.projects = res.data.results;
          // Se facciamo la paginazione
          // this.nextPage = this.currentPage + 1;
          // this.currentPage = res.data.results.current_page;
        });
      }
    },
    mounted(){
      this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>