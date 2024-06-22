import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectComponent from './components/ProjectComponent.vue';
import TypeComponent from './pages/TypeComponent.vue';
import TechnologyComponent from './pages/TechnologyComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
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
        {
            path: '/types',
            name: 'types',
            component: TypeComponent
        },
        {
            path: '/technologies',
            name: 'technologies',
            component: TechnologyComponent
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactComponent
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