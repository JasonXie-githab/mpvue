import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index.vue';
import home from '@/pages/home';

Vue.use(Router);
const routes = [{
  path: '/',
  name: 'index',
  component: index,
  alias: '/pages/index/main',
}, {
  path: '/home',
  name: 'home',
  component: home,
  alias: '/pages/home/main',
}];

export default new Router({
  routes,
});
