import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import HealthPanel from '../views/HealthPanel.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import AccountManage from '../views/AccountManage.vue'
import Discover from '../views/Discover.vue'
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
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
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