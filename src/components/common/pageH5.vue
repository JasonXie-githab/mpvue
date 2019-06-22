<template>
  <div id="page" ref="wrapper">
    <div id="content">
      <div class="pulling_down_loading">
        <span>加载中</span>
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
    this.$nextTick(() => {
      if (this.enablePull === undefined || this.enablePull === false) {
        return;
      }
      const scroll = new BScroll(this.$refs.wrapper, {
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
          threshold: 0,
        },
      });
      // 下拉
      scroll.on('pullingDown', () => {
        this.$emit('pullingDown');
        setTimeout(() => {
          // 结束下拉操作
          this.scroll.finishPullDown();
        }, 2000);
      });
      // 上拉
      scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
        this.scroll.finishPullUp();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
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
      text-align: center;
      line-height: 120px;
      color: #999;
      position: absolute;
      left: 0;
      top: -120px;
    }
  }
}
</style>


