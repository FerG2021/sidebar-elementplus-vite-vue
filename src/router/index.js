import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home/index.vue')
        },
        {
            path: '/about',
            component: () => import('../views/about/index.vue')
        },
        {
            path: '/producto',
            component: () => import('../views/producto/index.vue')
        },
        {
            path: '/contacto',
            component: () => import('../views/contacto/index.vue')
        },
        {
            path: '/configuracion',
            component: () => import('../views/configuracion/index.vue')
        },
    ]
})

export default router