import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: {name: 'Blogs'}
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('../views/Blogs.vue')
    }, {
        path: '/blog/add',
        name: 'BlogAdd',
        component: () => import('../views/BlogEdit.vue'),
        meta: {
            requireAuth: true
        }
    }, {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: () => import('../views/BlogDetail.vue')
    }, {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: () => import('../views/BlogEdit.vue'),
        meta: {
            requireAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router