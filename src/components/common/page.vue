<template>
  <div id="page" @touchmove="touchmove" :style="{top: pageOffsetTop + 'px'}">
    <div id="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsPage',
  data() {
    return {
      pageOffsetTop: 0,
      pageClientYStart: 0,
    };
  },
  methods: {
    // touchstart(e) {
    //   // this.pageClientYStart = e.clientY;
    // },
    touchmove(e) {
      console.log(e);
      const selQuery = wx.createSelectorQuery();
      selQuery.select('#page').boundingClientRect((rect) => {
        console.log(rect);
        if (rect.top <= 0) {
          if (this.pageClientYStart < 0) {
            const num = this.pageClientYStart - e.clientY;
            this.pageOffsetTop = num > 0 ? num : 0;
          } else {
            this.pageClientYStart = e.clientY;
          }
        }
      }).exec();
    },
  },
};
</script>

<style lang="scss" scoped>
#page{
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>


