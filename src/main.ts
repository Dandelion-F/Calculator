import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';
import './App.css';

useRegisterSW();

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
