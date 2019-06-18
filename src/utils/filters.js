/*
 * @Author: Jason
 * @Date: 2019-06-18 17:03:47
 * @Last Modified by:   Jason
 * @Last Modified time: 2019-06-18 17:03:47
 */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

// 验证手机号码
export const testPhoneNumber = phoneNumber => /^[1][3,4,5,7,8][0-9]{9}$/.test(phoneNumber);

// 验证座机号码
export const testLandlineNumber = landlineNumber => /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(landlineNumber);

// 比对版本
export const compareVersion = (v1, v2) => {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (let i = 0; i < len; i += 1) {
    const num1 = parseInt(v1[i], 10);
    const num2 = parseInt(v2[i], 10);
    if (num1 > num2) {
      return 1;
    } if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

// 价格转换千分符
export const formatPriceStr = (num) => {
  const price = `${num}`;
  const number = price.split('.')[0];
  let decimals = '';
  if (price.split('.').length > 1) {
    decimals = price.split('.')[1];
  }
  let str = '';
  for (let i = number.length - 1, j = 1; i >= 0; i -= 1, j += 1) {
    if (j % 3 === 0 && i !== 0) {
      str += `${number[i]},`;
    } else {
      str += number[i];
    }
  }
  let priceStr = str.split('').reverse().join('');
  if (decimals) {
    if (decimals.length < 2) {
      decimals += '0';
    }
    priceStr += `.${decimals}`;
  }
  return priceStr;
};
