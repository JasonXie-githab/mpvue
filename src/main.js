/*
 * @Author: Jason
 * @Date: 2019-06-16 19:59:22
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-22 11:01:37
 */
import Vue from 'vue';
import App from '@/App';
import store from './store';
import MsPage from './components/common/page';
import commonMethods from './api/common_api';


App.mpType = 'app';
Vue.prototype.$store = store;
const app = new Vue(App);
app.$mount();

Vue.component('MsPage', MsPage);

Vue.mixin({
  data() {
    return {};
  },
  computed: {
    // 页面参数
    $query() {
      return this.$root.$mp.query;
    },
  },
  methods: {
    ...commonMethods,
    // 重置query
    $resetQuery(data) {
      let queryStr = '?';
      const arr = Object.keys(data);
      if (arr.length <= 0) {
        return '';
      }
      for (let i = 0; i < arr.length; i += 1) {
        queryStr += `${arr[i]}=${data[arr[i]]}&`;
      }
      return queryStr;
    },
    // 跳转页面
    $go(name, query = {}) {
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
                url: `/pages/${name}/main${this.$resetQuery(query)}`,
              });
            }
          },
        });
      } else {
        wx.navigateTo({
          url: `/pages/${name}/main${this.$resetQuery(query)}`,
        });
      }
    },
    // 回退页面
    $back(delta) {
      wx.navigateBack({
        delta: delta || 1,
      });
    },
    // 重定向页面
    $redirect(name, query) {
      wx.redirectTo({
        url: `/pages/${name}/main${this.$resetQuery(query)}`,
      });
    },
    // 关闭所有页面，打开某个页面
    $reLaunch(name, query) {
      wx.reLaunch({
        url: `/pages/${name}/main${this.$resetQuery(query)}`,
      });
    },
    // 跳转tab页面
    $switchTab(name, query) {
      wx.switchTab({
        url: `/pages/${name}/main${this.$resetQuery(query)}`,
      });
    },
    // 滚动到顶部
    $scrollToTop() {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    },
    // 本地存储
    $setStorage(key, value) {
      if (typeof key !== 'string' || typeof value !== 'string') {
        return this.message('数据类型错误');
      }
      return wx.setStorageSync(key, value);
    },
    // 读取本地
    $getStorage(key) {
      if (typeof key !== 'string') {
        this.$message('数据类型错误');
        return false;
      }
      return wx.getStorageSync(key) || false;
    },
    // 删除本地
    $removeStorage(key) {
      if (typeof key !== 'string') {
        return this.$message('数据类型错误');
      }
      return wx.removeStorageSync(key);
    },
  },
});


export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundColor: '#eee',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue',
      navigationBarTextStyle: 'black',
    },
  },
};
