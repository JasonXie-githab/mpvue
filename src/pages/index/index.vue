/*
 * @Author: Jason 
 * @Date: 2019-06-16 19:58:30 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-06-22 11:58:11
 */
<template>
  <ms-page @pullingDown="pullingDown" @pullingUp="pullingUp">
    <div class="container">
      <div class="button" @click="confirm">confirm</div>
      <div class="button" @click="prompt">prompt</div>
      <div class="button" @click="showLoading">showLoading</div>
      <div class="button" @click="hideLoading">hideLoading</div>
      <div class="button" @click="openMask">openMask</div>
      <div class="button" @click="success">success</div>
      <div class="button" @click="toHome">go to home</div>
      <div class="button" @click="redirect">redirect to home</div>
      <div class="button" @click="reLaunch">reLaunch to home</div>
      <div class="button" @click="setStorage">setStorage</div>
      <div class="button" @click="getStorage">getStorage</div>
      <div class="button" @click="removeStorage">removeStorage</div>
    </div>
  </ms-page>
</template>

<script>
export default {
  data() {
    return {
      motto: 'Hello World',
    };
  },
  methods: {
    pullingDown() {
      console.log('pullingDown');
    },
    pullingUp() {
      console.log('pullingUp');
    },
    confirm() {
      this.$confirm({
        title: '提示',
        content: '123',
        success: () => {
          this.$message('success');
        },
        fail: () => {
          this.$message('fail');
        },
      });
    },
    prompt() {
      this.$prompt({
        title: '请输入手机号',
        content: '123',
        inputPattern: /^[1][3,4,5,7,8][0-9]{9}$/,
        inputErrorMessage: '手机号不正确',
        success: (res) => {
          this.$message(res.value);
        },
        fail: () => {
          this.$message('fail');
        },
      });
    },
    showLoading() {
      this.$showLoading();
    },
    hideLoading() {
      this.$hideLoading();
    },
    openMask() {
      this.$openMask({
        closeOnClickMask: true,
        beforeClose: () => {
          this.$message('beforeClose');
        },
      });
    },
    success() {
      this.$success();
    },
    toHome() {
      this.$go('home', { id: 1 });
    },
    redirect() {
      this.$redirect('home');
    },
    reLaunch() {
      this.$reLaunch('home');
    },
    setStorage() {
      this.$setStorage('test', 'testStorage');
    },
    getStorage() {
      this.$message(this.$getStorage('test'));
    },
    removeStorage() {
      this.$removeStorage('test');
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  padding: 30px;
}
.button{
  width: 100%;
  height: 100px;
  background: #f2f2f2;
  text-align: center;
  border-radius: 10px;
  line-height: 100px;
  margin-bottom: 20px;
}
</style>
