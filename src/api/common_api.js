/*
 * @Author: Jason
 * @Date: 2019-06-16 19:57:54
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-16 20:21:36
 */
import Vue from 'vue';

Vue.prototype.$App = new Vue();
Vue.config.productionTip = false;
// 打开蒙版
Vue.prototype.$openMask = (data = { closeOnClickMask: false, beforeClose: false }) => {
  Vue.prototype.$App.$emit('openMask', {
    // 是否点击蒙版关闭
    closeOnClickMask: data.closeOnClickMask,
    // 关闭前回调
    beforeClose: data.beforeClose,
  });
};

// 关闭蒙版
Vue.prototype.$closeMask = () => {
  Vue.prototype.$App.$emit('closeMask');
};

Vue.prototype.$showLoading = (data = { title: '' }) => {
  Vue.prototype.$App.$emit('showLoading', data);
};

Vue.prototype.$hideLoading = () => {
  Vue.prototype.$App.$emit('hideLoading');
};

Vue.prototype.$showSuccess = (data = { message: '', duration: 2000 }) => {
  const message = typeof data === 'string' ? data : data.message;
  Vue.prototype.$App.$emit('showSuccess', {
    // 文本
    message,
    // 关闭延迟时间
    duration: data.duration,
  });
};

// 提示文字
Vue.prototype.$message = (data = { message: '', duration: 2000 }) => {
  const message = typeof data === 'string' ? data : data.message;
  Vue.prototype.$App.$emit('message', {
    // 文本
    message,
    // 关闭延迟时间
    duration: data.duration,
  });
};

// 确认框
Vue.prototype.$confirm = ({
  title = '', content = '', showCancelButton = true, confirmButtonText = '确定', cancelButtonText = '取消', success, fail,
}) => {
  Vue.prototype.$App.$emit('confirm', {
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
};

// 关闭确认框
Vue.prototype.$closeConfirm = () => {
  Vue.prototype.$App.$emit('closeConfirm');
};

// 输入确认框
Vue.prototype.$prompt = ({
  title = '', content = '', showCancelButton = true, confirmButtonText = '确定', cancelButtonText = '取消', inputPattern, inputErrorMessage, success, fail,
}) => {
  Vue.prototype.$App.$emit('prompt', {
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
};

// 关闭输入确认框
Vue.prototype.$closePrompt = () => {
  Vue.prototype.$App.$emit('closePrompt');
};
