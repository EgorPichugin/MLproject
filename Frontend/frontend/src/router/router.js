import { createRouter, createWebHistory } from 'vue-router';
import GreetForm from '../components/HomeComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GreetForm,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;