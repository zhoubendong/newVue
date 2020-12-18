<template>
    <p></p>
    <h2>store、computed、watch用法</h2>
    <p></p><p></p>
    <div>
        vuex数据，name: {{name}}，age：{{age}}
    </div>
    <p></p>
    <button @click="addAge">改变age</button>
</template>

<script>
import { reactive, ref, toRefs, toRef, computed } from 'vue';
import { useStore, mapState, mapMutations } from 'vuex';
export default {
    name: 'home',
    setup() {
        const store = useStore(); // 使用vuex
        console.log(store);
        const name = computed(
            () => store.state.name
        );
        const age = computed(
            () => store.state.age
        );
        // const age = toRef(store.state, 'age');
        // const { name, age } = toRefs(store.state);

        // const { setAge } = toRefs(store.mutations);
        // console.log(store);

        function addAge() {
            store.commit('setAge', '20');
            console.log(age);
        } 
        return {
            name,
            age,
            // state,
            addAge
        }
    }
}
</script>
