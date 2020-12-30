<template>
    <h2> reactive、 ref、 toRefs、 toRef、 toRaw、 markRaw 的用法</h2>
    <p></p>
    <p></p>
    <!-- <div>父组件count值：{{count}}</div> -->

    <div>age：{{state.age}}</div>
    <!-- <div>age2：{{state2.age2}}</div>
    <div>age3：{{state3.age3}}</div> -->

    <!-- <div>age：{{age}}</div>
    <div>age2：{{age2}}</div>
    <div>age3：{{age3}}</div> -->

    <!-- <div>data4：{{data4.age}}</div> -->
    

    <p></p>
    <p></p>
    <button @click="addAge">增加</button>
</template>

<script>
import { markRaw, reactive, ref, toRaw, toRef, toRefs } from 'vue';
export default {
    name: 'home',
    props: {
        count: Number
    },
    setup(props, context) {
        // 非响应式数据
        const state = {
            age: 1,
            name: '小明',
            obj: {
                num: 111
            }
        };
        // ref定义响应式数据
        const state2 = reactive({
            age2: 1,
            name: '小红',
            obj: {
                num: 222
            }
        });
        // reactive定义响应式数据
        const state3 = ref({
            age3: 1,
            name: '小王',
            obj: {
                num: 333
            }
        });

        // console.log(state);
        // console.log(state2);
        // console.log(state3.value);

        function addAge() { // 增加age
            state.age += 1;
            state2.age2 += 1;
            state3.value.age3 += 1;
            // console.log(state);
            
            // data4.age += 1;
            // console.log(data4);  
        }

                                                            // toRef 模块
        // toRef 官方解释：toRef用来为源响应式对象上的属性创建一个 ref。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接。
        // toRef 我方解释：toRef是对原数据某条属性的引用，改变此值，相当于直接操作原数据
        const data = toRef(state2, 'obj');
        // console.log(state2.obj);
        // console.log(data.value);

        // console.log(data.value === state2.obj);

        // data.value.num = 444; // 改变data.value的值
        // console.log(state2.obj.num);
        
                                                            // toRefs 模块
        // toRefs 官方解释：将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的ref
        // toRefs 我方解释：是对原数据的引用，改变此值，相当于直接操作原数据
        const data2 = toRefs(state2);
        // console.log(data2);

                                                            // toRaw 模块
        // toRaw 方法是用于获取 ref 或 reactive 对象的原始数据的        
        // const data3 = reactive(state);
        // const raw = toRaw(data3);
        // console.log(state === raw);
        // raw.age = 9;
        // console.log(state);

                                                    // markRaw 模块
        // markRaw 方法可以将原始数据标记为非响应式的，即使用 ref 或 reactive 将其包装，仍无法实现数据响应式    
        // const raw2 = markRaw(state);
        // const data4 = reactive(raw2);
        // console.log(raw2);
        // console.log(data4);

    
        return {
            state,
            state2,
            state3,
            addAge,
            // data4,
        //     ...toRefs(state),
        //     ...toRefs(state2.value),
        //     ...toRefs(state3)
        }
    }
}
</script>
