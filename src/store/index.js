/*
 * @Author: Kaiser
 * @Date: 2019-06-10 09:51:38
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-17 20:36:56
 */
import Vue from 'vue';
import Vuex from 'vuex';

import Ui from './ui';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Ui,
  },
});
export default store;
