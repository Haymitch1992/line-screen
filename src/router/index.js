import Vue from 'vue';
import VueRouter from 'vue-router';
import screen from '../views/screen.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'screen',
    component: screen,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
