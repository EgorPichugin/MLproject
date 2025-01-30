import { createApp } from 'vue'
import App from './App.vue'
import { NConfigProvider } from 'naive-ui';
import router from './router/router.js';

const app = createApp(App);

app.component('NConfigProvider', NConfigProvider);
app.use(router);
app.mount('#app');
