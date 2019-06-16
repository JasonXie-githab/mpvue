/*
 * @Author: Jason
 * @Date: 2019-06-13 16:42:36
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-14 18:36:18
 */

import apiModules from './api_module';
// 默认request的配置
const baseURL = process.env.API_DOMAIN;
/**
 * 根据网络状态码返回错误信息
 * @param {Number or String} status 网络状态码
 */
function getResponseErrorTip(status) {
  // 错误状态的提示文字
  const RESPONSE_ERROR_TIP = {
    400: '请求参数或语句有误！',
    401: '未授权，请重新登录！',
    403: '拒绝访问！',
    404: '未找到该资源！',
    405: '请求方法未允许！',
    408: '请求超时！',
    500: '服务器端出错！',
    501: '网络未实现！',
    502: '网络错误！',
    503: '服务不可用！',
    504: '网络超时！',
    505: 'http版本不支持该请求！',
  };
  return RESPONSE_ERROR_TIP[status] || '请求错误！';
}

export default class Request {
  /**
   * 构造函数
   * @param {Object} option 自定义request配置
   * option.module必传，其意为请求的模块名
   */
  constructor(option = {}) {
    if (option.module) {
      // 设置模块的url
      this.moduleUrl = apiModules[option.module];
      if (!this.moduleUrl) {
        throw new Error("the request's module is set incorrectly");
      }
    }
  }

  getDATA() {
    return JSON.stringify({
      _url_: url,
      random: '880000001',
    });
  }

  $http(method, url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + this.moduleUrl,
        method,
        data,
        header: {
          'content-type': 'application/json;charset=utf-8',
          DATA: this.getDATA(),
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }

  get(url, data) {
    return this.$http({
      method: 'GET',
      url,
      data,
    });
  }

  post(url, data) {
    return this.$http({
      method: 'POST',
      url,
      data,
    });
  }

  delete(url, data) {
    return this.$http({
      method: 'DELETE',
      url,
      data,
    });
  }

  put(url, data) {
    return this.$http({
      method: 'PUT',
      url,
      data,
    });
  }
}
