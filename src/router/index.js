import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home/Home.vue')
        },
        {
            path: '/about',
            component: () => import('../views/about/About.vue')
        },
    ]
})

export default router