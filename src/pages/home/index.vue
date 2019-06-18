<template>
  <ms-page class="ms_page">
    <div class="container">
      <div class="button" @click="back">back index</div>
      <div class="box"></div>
      <div class="button" @click="scrollToTop">scrollToTop</div>
    </div>
  </ms-page>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    back() {
      this.$back();
    },
    scrollToTop() {
      this.$scrollToTop();
    },
  },
};
</script>

<style lang="scss" scoped>
.ms_page{
  // display: flex;
  // flex-direction: column;
}
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
.box{
  height: 150vh;
  width: 100%;
  background-color: #f2f2f2;
}
</style>

