import Vue from 'vue';
import Router from 'vue-router';
import index from '../pages/index/index.vue';

Vue.use(Router);
const routes = [{
  path: '/',
  name: 'index',
  component: index,
  alias: '/pages/index/main',
}];

export default new Router({
  routes,
});
