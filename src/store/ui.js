/*
 * @Author: Jason
 * @Date: 2019-06-17 20:38:40
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-18 15:52:30
 * ui弹框等组件控制数据
 */
/* eslint-disable no-param-reassign */

export default {
  state: {
    // 蒙版控制
    mask: {
      // 显示
      show: false,
      // 是否点击关闭
      closeOnClickMask: false,
      // 关闭前回调
      beforeClose: '',
    },
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
    // 设置蒙版
    setMask(state, data) {
      if (data.show) {
        state.mask = { ...state.mask, ...data };
      } else {
        state.mask = {
          show: false,
          closeOnClickMask: false,
          beforeClose: '',
        };
      }
    },
    // 添加message
    addMessage(state, data) {
      if (!state.messageList.some(ele => ele.text === data.text)) {
        state.messageList.push(data);
        setTimeout(() => {
          state.messageList = state.messageList.filter(ele => ele.text !== data.text);
        }, data.duration);
      }
    },
    // 设置loading
    setLoading(state, data) {
      if (data.show) {
        state.loading = { ...state.loading, ...data };
      } else {
        state.loading = {
          show: false,
          text: '加载中',
        };
      }
    },
    // 设置成功弹框
    setSuccess(state, data) {
      if (data.show) {
        if (!data.text) {
          delete data.text;
        }
        state.success = { ...state.success, ...data };
      } else {
        state.success = {
          show: false,
          text: '成功',
          duration: 2000,
        };
      }
    },
    // 设置确认框
    setConfirm(state, data) {
      if (data.show) {
        state.confirm = { ...state.confirm, ...data };
      } else {
        state.confirm = {
          show: false,
          title: '',
          content: '',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton: true,
          success: '',
          fail: '',
        };
      }
    },
    // 设置对话框
    setPrompt(state, data) {
      if (data.show) {
        state.prompt = { ...state.prompt, ...data };
      } else {
        state.prompt = {
          show: false,
          title: '',
          content: '',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton: true,
          inputPattern: /\S/,
          inputErrorMessage: '格式不正确',
          success: '',
          fail: '',
        };
      }
    },
    // 清空数据
    clearUiData(state) {
      state.mask = {
        show: false,
        closeOnClickMask: false,
        beforeClose: '',
      };
      state.messageList = [];
      state.loading = {
        show: false,
        text: '加载中',
      };
      state.success = {
        show: false,
        text: '成功',
        duration: 2000,
      };
      state.confirm = {
        show: false,
        title: '',
        content: '',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        success: '',
        fail: '',
      };
      state.prompt = {
        show: false,
        title: '',
        content: '',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        inputPattern: /\S/,
        inputErrorMessage: '格式不正确',
        success: '',
        fail: '',
      };
    },
  },
  getters: {
    // 获取mask信息
    getMask(state) {
      return state.mask;
    },
    // 获取messageList
    getMessageList(state) {
      return state.messageList;
    },
    // 获取loading信息
    getLoading(state) {
      return state.loading;
    },
    // 获取成功弹框信息
    getSuccess(state) {
      return state.success;
    },
    // 获取确认框信息
    getConfirm(state) {
      return state.confirm;
    },
    // 获取对话框信息
    getPrompt(state) {
      return state.prompt;
    },
  },
};
