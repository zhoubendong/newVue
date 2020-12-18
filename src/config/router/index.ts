import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// const home = r => require.ensure([], () => r('../../view/home/home.vue'));
import home from '../../views/home/home.vue';
// import pageA from '../../views/page/pageA.vue';
// import pageB from '../../views/page/pageB.vue';
const routes:Array<RouteRecordRaw> = [
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
    history: createWebHistory(), // history模式
    routes
});
export default router;