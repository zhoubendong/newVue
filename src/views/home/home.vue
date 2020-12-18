<template>
    <div>
        <!-- <hello-world :count="count"></hello-world> -->
        <div>
            <button @click="countAdd">增加count</button>
        </div>
        <div>
            <button @click="goPage('1')">展示page1</button>
            <button @click="goPage('2')">展示page2</button>
        </div>
        <p></p><p></p>
        <div>
            <page-a v-if="pageType === '1'" :count="count"></page-a>
            <page-b v-else></page-b>
        </div>
    </div>
</template>

<script lange="ts">
import { defineComponent, reactive, ref, toRefs, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import helloWorld from '../../components/HelloWorld.vue';
import PageA from '../page/pageA.vue';
import PageB from '../page/pageB.vue';
export default {
    name: 'home',
    components: { helloWorld, PageA, PageB },
    setup() {
        const state = reactive({
            count: 20,
            changeCount: computed(() => {
                return state.count + 1;
            }),
            pageType: window.sessionStorage.getItem('pageType') ? window.sessionStorage.getItem('pageType') : 1
        });
        const countAdd = () => {
            state.count += 1;
        }
        const router = useRouter();

        function goPage(num) {
            state.pageType = num;
            window.sessionStorage.setItem('pageType', num);
        }
        
                //生命周期
        // console.log('setup');
        onBeforeMount(() => {
            // 在挂载前执行某些代码
            // console.log('onBeforeMount');
        })
        onMounted(() => {
            // 在挂载后执行某些代码
            // console.log('onMounted');
        })
        onBeforeUpdate(() => {
            // 在更新前前执行某些代码
            // console.log('onBeforeUpdate');
        })

        onUpdated(() => {
            // 在更新后执行某些代码
            // console.log('onUpdated');
        })
        onBeforeUnmount(() => {
            // 在组件销毁前执行某些代码
            // console.log('onBeforeUnmount');
        })
        onUnmounted(() => {
            // 在组件销毁后执行某些代码
            // console.log('unMounted');
        })
        return {
            ...toRefs(state),
            countAdd,
            goPage
        }
    }
}
</script>
