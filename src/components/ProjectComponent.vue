<template>
    <div>
        <div class="d-flex justify-content-between">
            <div :v-for="" :key="project.id"
                class="f-d-main-first-container f-d-transparent-layer">
                <p class="lightbrown fs-4 fw-bold">
                    Description of the project
                </p>
                <p class="green fw-bold">
                    {{ project.description }}
                </p>
                <p class="lightbrown fs-4 fw-bold">
                    Type of the project
                </p>
            </div>
        </div>
    </div>
   
</template>

<script>
import { store } from '../store';
export default {

    name: 'ProjectComponent',

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