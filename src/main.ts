import { createApp } from 'vue';
import App from './App.vue';
import router from "./config/router/index";
import store from "./config/vuex/index";
import './index.css';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
