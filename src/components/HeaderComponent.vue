<template>
    <div>
        <h1 class="text-center">Projects</h1>
        <ul class="nav justify-content-center">
            <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{ name: item.routeName }" class="nav-link">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store';
import ProjectComponent from '../components/ProjectComponent.vue';
import ProjectList from '../pages/ProjectList.vue';
import AppHome from '../pages/AppHome.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
export default {
    name: 'HeaderComponent',
    components: {
        ProjectComponent,
        ProjectList,
        AppHome,
        AboutComponent,
        ContactComponent
    },

    data() {
        return {
            store,
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