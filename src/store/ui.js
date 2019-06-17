/*
 * @Author: Jason
 * @Date: 2019-06-17 20:38:40
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-17 21:18:20
 * ui弹框等组件控制数据
 */
/* eslint-disable no-param-reassign */
module.exports = {
  state: {
    // 蒙版控制
    mask: false,
    // message 列表
    messageList: [],
    // loading控制
    loading: {
      // 显示
      show: false,
      // 文字
      text: '加载中',
    },
    // 成功弹框控制
    success: {
      // 显示
      show: false,
      // 文字
      text: '成功',
      // 关闭延迟时间ms
      duration: 2000,
    },
    // 确认框控制
    confirm: {
      // 显示
      show: false,
      // 标题
      title: '',
      // 内容
      content: '',
      // 确定按钮文字
      confirmButtonText: '确定',
      // 取消按钮文字
      cancelButtonText: '取消',
      // 是否显示取消按钮
      showCancelButton: true,
      // 确认后回调
      success: '',
      // 取消后回调
      fail: '',
    },
    // 输入对话框控制
    prompt: {
      // 显示
      show: false,
      // 标题
      title: '',
      // 内容
      content: '',
      // 确定按钮文字
      confirmButtonText: '确定',
      // 取消按钮文字
      cancelButtonText: '取消',
      // 是否显示取消按钮
      showCancelButton: true,
      // 正则
      inputPattern: /\S/,
      // 校验失败提示文字
      inputErrorMessage: '格式不正确',
      // 确认后回调
      success: '',
      // 取消后回调
      fail: '',
    },
  },
  mutations: {
    setTest(state, test) {
      state.test = test;
    },
  },
  getters: {
    getTest(state) {
      return state.test;
    },
  },
};
