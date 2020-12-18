// 由于ts无法识别.vue文件，此文件用于解决引vue模块报错的问题
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}