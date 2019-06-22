
/*
 * @Author: Jason
 * @Date: 2019-06-16 19:57:54
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-22 11:13:13
 */
import Vue from 'vue';
import store from '@/store';

Vue.config.productionTip = false;

export default {
  // 打开蒙版
  $openMask(data = { closeOnClickMask: false, beforeClose: false }) {
    store.commit('setMask', {
      show: true,
      // 是否点击蒙版关闭
      closeOnClickMask: data.closeOnClickMask,
      // 关闭前回调
      beforeClose: data.beforeClose,
    });
  },
  // 关闭蒙版
  $closeMask() {
    store.commit('setMask', {
      show: false,
    });
  },
  // 显示loading
  $showLoading(data = {}) {
    store.commit('setLoading', { ...data, show: true });
  },
  // 关闭loading
  $hideLoading() {
    store.commit('setLoading', { show: false });
  },
  // 显示成功
  $success(data = {}) {
    const text = typeof data === 'string' ? data : data.text;
    store.commit('setSuccess', {
      show: true,
      // 文本
      text,
      // 关闭延迟时间
      duration: data.duration || 2000,
    });
  },
  // 文字提示
  $message(data = { message: '', duration: 2000 }) {
    const text = typeof data === 'string' ? data : data.text;
    store.commit('addMessage', {
      // 文本
      text,
      // 关闭延迟时间
      duration: data.duration || 2000,
    });
  },
  // 关闭文字提示
  $closeMessage(message) {
    store.commit('delMessage', message);
  },
  // 确认框
  $confirm({
    title = '', content = '', showCancelButton = true, confirmButtonText = '确定', cancelButtonText = '取消', success, fail,
  }) {
    store.commit('setConfirm', {
      show: true,
      // 标题
      title: String(title),
      // 内容
      content: String(content),
      // 确认按钮文字
      confirmButtonText,
      // 取消按钮文字
      cancelButtonText,
      // 是否显示取消按钮
      showCancelButton,
      // 确认回调
      success: success || false,
      // 取消回调
      fail: fail || false,
    });
  },
  // 关闭确认框
  $closeConfirm() {
    store.commit('setConfirm', {
      show: false,
    });
  },
  // 输入确认框
  $prompt({
    title = '', content = '', showCancelButton = true, confirmButtonText = '确定', cancelButtonText = '取消', inputPattern, inputErrorMessage, success, fail,
  }) {
    store.commit('setPrompt', {
      show: true,
      // 标题
      title: String(title),
      // input value
      content,
      // 确认按钮文字
      confirmButtonText,
      // 取消按钮文字
      cancelButtonText,
      // 是否显示取消按钮
      showCancelButton,
      // 正则表达式
      inputPattern,
      // 校验失败提示文字
      inputErrorMessage,
      // 成功回调
      success: success || false,
      // 失败回调
      fail: fail || false,
    });
  },
  // 关闭输入确认框
  $closePrompt() {
    store.commit('setPrompt', {
      show: false,
    });
  },
};
