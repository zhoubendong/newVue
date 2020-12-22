<template>
    <p></p>
    <h2>store、computed、watch、watchEffect、getCurrentInstance用法</h2>
    <p></p><p></p>
    <div>
        vuex数据==>>>name：{{name}}，age：{{age}}
    </div>
    <p></p>
    <button @click="addAge">改变age</button>
</template>

<script>
import { reactive, ref, toRefs, toRef, computed, watch, getCurrentInstance, watchEffect } from 'vue';
import { useStore, mapState, mapMutations } from 'vuex';
export default {
    name: 'home',
    setup(props,context) {
        const store = useStore(); // 使用vuex
        // console.log(store);
                                        // computed 用法
        const name = computed(() => store.state.name);
        const age = computed(() => store.state.age);
        
        // const age = toRef(store.state, 'age');
        // const { name, age } = toRefs(store.state);
    
        // const { setAge } = toRefs(store.mutations);
        // console.log(setAge);
        
        function addAge() {
            store.commit('setAge', '20');
            // age.value = '30'; // 直接修改vuex数据，vuex开启严格模式将报错
            // setAge.value[0]('40');
            // store.commit('setName', 'test1');

            // state.count ++;
        }
        
                                            // watch 用法
        // watch(age, (newAge, oldAge) => { // 监听单一源
        //     console.log(oldAge);
        //     console.log(newAge);
        // });
        // watch([age,name], ([newAge, newName], [oldAge, oldName]) => { // 监听多个源
        //     console.log(oldAge);
        //     console.log(newAge);
        //     console.log(oldName);
        //     console.log(newName);
        // });

        const state = reactive({count: 0});
        // watch(state, (newVal, oldVal) => {
        //     console.log(newVal);
        //     console.log(oldVal);
        // });

                                            // watchEffect 用法
        // 官方解释：在响应式地跟踪其依赖项时立即运行一个函数。
        // 我方解释：组件初始化时会执行一次；不需要手动传入需要监听的值，所依赖项发生变化时，会自动触发执行；只能获取到变化后的值，不能获取到变化前的。
        watchEffect(() => {
            // console.log(age.value);
            // console.log(name.value);
            // console.log(state.count);
        })

                                            // getCurrentInstance用法,仅在setUp()或生命周期挂钩期间起作用
        const instance = getCurrentInstance();
        console.log(instance);

        return {
            name,
            age,
            addAge,
        }
    },



    // methods: {
    //     ...mapMutations({
    //         'setAge': 'setAge',
    //         'setName': 'setName'
    //     }),
    //     addAge() {
    //         this.setAge('22');
    //     }
    // }
}
</script>
