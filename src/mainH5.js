/*
 * @Author: Jason
 * @Date: 2019-06-16 19:59:26
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-18 20:54:36
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './AppH5';
import router from './router';
import store from './store';
import './utils/flexible';
import Ui from './components/common/ui';
import MsPage from './components/common/page';
import './api/common_api';

Vue.mixin({
  components: {
    Ui,
    MsPage,
  },
  data() {
    return {};
  },
  computed: {
    // 页面参数
    $query() {
      return this.$route.query;
    },
  },
  methods: {
    $go(name, query = {}) {
      this.$router.push({
        name,
        query,
      });
    },
    $back(delta) {
      this.$router.back(-delta || -1);
    },
    $redirect(name, query) {
      this.$router.replace({
        name,
        query,
      });
    },
    $reLaunch(name, query) {
      this.$router.replace({
        name,
        query,
      });
    },
    $switchTab(name, query) {
      this.$router.push({
        name,
        query,
      });
    },
    // 滚动到顶部
    $scrollToTop() {
      // eslint-disable-next-line no-undef
      window.scroll(0, 0);
    },
    // 本地存储
    $setStorage(key, value) {
      if (typeof key !== 'string' || typeof value !== 'string') {
        return this.message('数据类型错误');
      }
      // eslint-disable-next-line no-undef
      return localStorage.setItem(key, value);
    },
    // 读取本地
    $getStorage(key) {
      if (typeof key !== 'string') {
        this.$message('数据类型错误');
        return false;
      }
      // eslint-disable-next-line no-undef
      return localStorage.getItem(key) || false;
    },
    // 删除本地
    $removeStorage(key) {
      if (typeof key !== 'string') {
        return this.$message('数据类型错误');
      }
      // eslint-disable-next-line no-undef
      return localStorage.removeItem(key);
    },
  },
});
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
