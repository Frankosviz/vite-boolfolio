<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import { store } from './store';
  export default {
    name: 'App',
    data() {
      return {
        store
      }
    },
    methods : {
      getAllProjects(){
        axios.get(this.store.apiBaseUrl+'/projects').then((res) =>{
          console.log(res.data)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>