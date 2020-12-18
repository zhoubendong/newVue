import { readonly } from "vue";
import { createStore } from "vuex";

export default createStore({
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