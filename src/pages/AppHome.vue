<template>
    <div>
        <h1 class="text-center green">Homepage</h1>

        <div class="container my-5 py-5 f-d-card-layer">
            <div class="row">
                <div v-for="project in store.projects" :key="project.id" class="col d-flex justify-content-center">
                    <div class="f-d-vue-card d-flex justify-content-center align-items-center flex-column">
                        <img src="https://picsum.photos/200" class="card-img-top align-self-start rounded" alt="{{ project.id }}">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <router-link :to="{ name: 'single-project', params: { slug: project.slug }}" class="f-d-button-form-cancel text-decoration-none">Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppHome',

    data() {
        return {
            store
        }
    },

    methods: {
        getAllProjects() {
            axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
                this.store.projects = res.data.results.data;
            })
        }
    },

    mounted() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped></style>