import { createRouter, createWebHistory } from 'vue-router';

import home from '../../views/home/home.vue';
// import pageA from '../../views/page/pageA.vue';
// import pageB from '../../views/page/pageB.vue';
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    // {
    //     path: '/pageA',
    //     name: 'pageA',
    //     component: pageA
    // },
    // {
    //     path: '/pageB',
    //     name: 'pageB',
    //     component: pageB
    // }
]
const router = createRouter({
    history: createWebHistory(), // history模式;哈希模式：createWebHashHistory
    routes
});
export default router;