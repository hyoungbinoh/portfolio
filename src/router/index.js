import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/components/Home.vue'
import Portfolio from'@/components/Portfolio.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: "/", name: "Home", component: Home},
        {path: "/project", name: "project", component: Portfolio}
    ]
});

export default router;