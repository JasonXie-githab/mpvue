/*
 * @Author: Jason
 * @Date: 2019-06-16 19:59:26
 * @Last Modified by:   Jason
 * @Last Modified time: 2019-06-16 19:59:26
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './AppH5';
import router from './router';
import store from './store';
import './utils/flexible';
import Ui from './components/common/ui';
import './api/common_api';

Vue.mixin({
  components: {
    Ui,
  },
  data() {
    return {
      test: 456,
    };
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    },
    navigateBack(delta) {
      this.$router.back(-delta || -1);
    },
    redirectTo(url) {
      this.$router.redirect(url);
    },
    reLaunch(url) {
      this.$router.replace(url);
    },
    switchTab(url) {
      this.$router.push(url);
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
