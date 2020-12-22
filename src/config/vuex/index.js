import { createStore } from "vuex";

export default createStore({
    // strict: true, // 开启严格模式
    state: {
        name: "test",
        age: '18'
    },
    getters: {
        getName(state) {
            return state.name;
        },
        getAge(state) {
            return state.age;
        }
    },
    mutations: {
        setName(state, value) {
            state.name = value;
        },
        setAge(state, value) {
            state.age = value;
        }
    }
});