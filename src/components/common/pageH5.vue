<template>
  <div id="page" ref="wrapper">
    <div id="content">
      <div class="pulling_down_loading" v-if="enablePull !== undefined && enablePull !== false">
        <div class="loading_box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <slot></slot>
    </div>
    <ms-ui/>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import BScroll from '@better-scroll/core';
import PullDown from '@better-scroll/pull-down';
import PullUp from '@better-scroll/pull-up';
import MsUi from './ui';

BScroll.use(PullDown);
BScroll.use(PullUp);

export default {
  name: 'MsPage',
  props: ['enablePull'],
  components: {
    MsUi,
  },
  mounted() {
    this.scroll = null;
    this.$nextTick(() => {
      if (this.enablePull === undefined || this.enablePull === false) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        // 允许点击
        click: true,
        // 反弹时间
        bounceTime: 800,
        // 下拉数据
        pullDownRefresh: {
          // 距离顶部多远触发pullingDown
          threshold: 70,
          // 反弹距离
          stop: 50,
        },
        // 上拉
        pullUpLoad: {
          // 距离底部距离触发pullingUp
          threshold: 10,
        },
      });
      // 下拉
      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown');
        setTimeout(() => {
          // 结束下拉操作
          this.$finishPullDown();
        }, 2000);
      });
      // 上拉
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
        this.scroll.finishPullUp();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@keyframes loading {
  from{
    background-color: #ccc;
  }
  to{
    background-color: #fff;
  }
}
#page{
  height: 100vh;
  position: relative;
  background-color: #eee;
  #content{
    background-color: #fff;
    position: relative;
    .pulling_down_loading{
      width: 100%;
      height: 120px;
      position: absolute;
      left: 0;
      top: -120px;
      .loading_box{
        width: 80px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        span{
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #ccc;
          &:nth-child(1){
            animation: loading 1s linear infinite;
          }
          &:nth-child(2){
            animation: loading 1s linear .3s infinite;
          }
          &:nth-child(3){
            animation: loading 1s linear .6s infinite;
          }
        }
      }
    }
  }
}
</style>


