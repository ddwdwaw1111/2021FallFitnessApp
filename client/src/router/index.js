import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HealthPanel from '../views/HealthPanel.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import AccountManage from '../views/AccountManage.vue'
import Discover from '../views/Discover.vue'
import publicPosts from '../views/publicPosts.vue'
import Users from '../views/Users.vue'
const routes = [
    {
        path: '/',
        name: 'Home Page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login
    },{
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
}, {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
}, {
    path: '/healthpanel',
    name: 'HealthPanel',
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HealthPanel
}, {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ForgetPassword
}, {
    path: '/accountmanage',
    name: 'AccountManage',
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AccountManage
}, {
    path: '/discover',
    name: 'Discover',
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Discover
},
{
    path: '/public',
    name: 'Public',
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: publicPosts
},
{
    path: '/admin',
    name: 'Admin',
    meta: { requiresLogin: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Users
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !Session.user) {
        next('/');
    } else {
        next();
    }
})

export default router