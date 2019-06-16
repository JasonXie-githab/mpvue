/*
 * @Author: Jason 
 * @Date: 2019-06-16 19:58:30 
 * @Last Modified by:   Jason 
 * @Last Modified time: 2019-06-16 19:58:30 
 */
<template>
  <div class="container">
    <div class="button" @click="confirm">confiem</div>
    <div class="button" @click="prompt">prompt</div>
    <div class="button" @click="showLoading">showLoading</div>
    <div class="button" @click="hideLoading">hideLoading</div>
    <div class="button" @click="openMask">openMask</div>
    <div class="button" @click="showSuccess">showSuccess</div>
    <ui/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motto: 'Hello World',
    };
  },
  methods: {
    confirm() {
      this.$confirm({
        title: '提示',
        content: this.test,
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
    showSuccess() {
      this.$showSuccess();
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
