<template>
    <div>
        <div v-for="project in projects" :key="project.id">{{ project.title }}
            <img :src="store.imgBasePath + project.cover_image" :alt="project.title">

            <RouterLink :to="{ name: 'single-project', params: { slug: project.slug } }">Guarda il progetto</RouterLink>
        </div>
    </div>
    <button @click="getAllProjects()" class="btn btn-primary">Cambia pagina</button>
</template>

<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            projects: [],
            // nextPage: 0,
            // currentPage: 0
        }
    },
    methods: {
        getAllProjects() {
            axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
                //console.log(res.data)
                this.projects = res.data.results;
                // Se facciamo la paginazione
                // this.nextPage = this.currentPage + 1;
                // this.currentPage = res.data.results.current_page;
            });
        }
    },
    mounted() {
        this.getAllProjects();
    }

}
</script>

<style lang="scss" scoped>

</style>