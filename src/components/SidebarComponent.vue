<template>
    <div class="f-d-nav-vertical">
    <div>
        <p class="green fs-4 fw-bold">
            User
        </p>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-chart-line"></i>
            Home
        </a>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-sliders"></i>
            Dashboard
        </a>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-list-check"></i>
            Projects
        </a>
    </div>

    <div>
        <p class="green fs-4 fw-bold">
            Data
        </p>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-book"></i>
            Types
        </a>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-chart-line"></i>
            Charts
        </a>
    </div>

    <div>
        <p class="green fs-4 fw-bold">
            Help
        </p>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-people-group"></i>
            Community
        </a>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-headset"></i>
            Support
        </a>
        <a href="#" class="d-flex justify-content-start align-items-center">
            <i class="fs-5 fa-solid fa-gear"></i>
            Settings
        </a>
    </div>


</div>
</template>

<script>
    import { store } from '../store';
    export default {

        name: 'SidebarComponent',

        data() {
            return {
                store
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>