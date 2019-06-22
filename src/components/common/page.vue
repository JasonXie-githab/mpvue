<template>
  <div id="page" ref="wrapper">
    <div id="content">
      <slot></slot>
    </div>
    <ms-ui/>
  </div>
</template>

<script>
import MsUi from './ui';

export default {
  name: 'MsPage',
  components: {
    MsUi,
  },
  config: {
    enablePullDownRefresh: true,
  },
  onPullDownRefresh() {
    this.$emit('pullingDown');
  },
  onReachBottom() {
    this.$emit('pullingUp');
  },
};
</script>

<style lang="scss" scoped>
#page{
  min-height: 100vh;
  #content{

  }
}
</style>


