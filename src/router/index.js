import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'product.index',
        component: () => import( /* webpackChunkName: "product.index" */ '@/views/product/Index-product.vue')
    },
    {
        path: '/create',
        name: 'product.create',
        component: () => import( /* webpackChunkName: "product.create" */ '@/views/product/Create-product.vue')
    },
    {
        path: '/edit/:id',
        name: 'product.edit',
        component: () => import( /* webpackChunkName: "product.edit" */ '@/views/product/Edit-product.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router