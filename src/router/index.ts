import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../layouts/WithTabbar.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/course',
                component: () => import('../views/Course.vue'),
            },
            {
                path: '/create',
                component: () => import('../views/Plus.vue'),
            },
            {
                path: '/community',
                component: () => import('../views/Community.vue'),
            },
            {
                path: '/profile',
                component: () => import('../views/Profile.vue'),
            },
        ]
    },
    {
        path: '/guide',
        component: () => import('../views/Guide.vue'),
    },
] as RouteRecordRaw[]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})