<template>
    <div>
        <h1 class="text-center green">Homepage</h1>

        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div v-for="project in store.projects" :key="project.id" class="card" style="width: 18rem;">
                        <img src="https://picsum.photos/200" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <a :href="project.link" class="btn btn-primary">Go somewhere</a>
                        </div>
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

            })
        }
    },

    mounted() {
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped></style>