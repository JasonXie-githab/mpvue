<template>
    <div class="loading">
        {{loadingText}}
    </div>
</template>

<script>
export default {
  name: 'MsLoading',
  props: {
    loadingText: {
      type: String,
      default: () => '加载中',
    },
  },
};
</script>


<style lang='scss' scoped>
.loading{
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    line-height: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
}
</style>
