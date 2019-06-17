/*
 * @Author: Jason
 * @Date: 2019-06-16 19:59:22
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-17 20:33:20
 */
import Vue from 'vue';
import App from '@/App';
import store from './store';
import Ui from './components/common/ui';
import './api/common_api';

App.mpType = 'app';
Vue.prototype.$store = store;
const app = new Vue(App);
app.$mount();

Vue.component('Ui', Ui);

Vue.mixin({
  data() {
    return {};
  },
  methods: {
    navigateTo(url) {
      /* eslint-disable */
      const pages = getCurrentPages();
      /* eslint-enable */
      if (pages.length >= 10) {
        Vue.prototype.$confirm({
          title: '提示',
          content: '您当前打开的页面过多，继续打开页面会关闭当前页面，是否继续？',
          success: (res) => {
            if (res.confirmed) {
              wx.redirectTo({
                url: `pages/${url}/main`,
              });
            }
          },
        });
      } else {
        wx.navigateTo({
          url: `pages/${url}/main`,
        });
      }
    },
    navigateBack(delta) {
      wx.navigateBack({
        delta: delta || 1,
      });
    },
    redirectTo(url) {
      wx.redirectTo({
        url: `/pages/${url}/main`,
      });
    },
    reLaunch(url) {
      wx.reLaunch({
        url: `/pages/${url}/main`,
      });
    },
    switchTab(url) {
      wx.switchTab({
        url: `/pages/${url}/main`,
      });
    },
  },
});


export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black',
    },
  },
};
