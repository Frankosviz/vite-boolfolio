import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFound from './pages/NotFound.vue';

// creiamo il nostro oggetto router che avrà due chiavi, history e routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: ProjectComponent
        },
        // rotta di fallback, se non matcha con alcuna rotta va alla rotta NotFound
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };