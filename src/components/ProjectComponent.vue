<template>
    <div>
        <div class="d-flex justify-content-between">
            <div
                class="f-d-main-first-container f-d-transparent-layer">
                <p class="lightbrown fs-4 fw-bold">
                    Description of the project
                </p>
                <p class="green fw-bold">
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
import axios from 'axios';
export default {

    name: 'ProjectComponent',

    data() {
        return {
            store
        }
    },

    methods: {
        
        
    },

    
}
</script>

<style lang="scss" scoped></style>