<template>
    <div class="success" :style="{opacity: opacity}">
        {{successText}}
    </div>
</template>

<script>
export default {
  name: 'MsSuccess',
  props: {
    successText: {
      type: String,
      default: () => '成功',
    },
    duration: {
      type: Number,
      default: () => 2000,
    },
  },
  data() {
    return {
      opacity: 1,
    };
  },
  mounted() {
    const param1 = setTimeout(() => {
      this.opacity = 0;
      const param2 = setTimeout(() => {
        this.$emit('closeSuccess');
        clearTimeout(param2);
      }, 200);
      clearTimeout(param1);
    }, this.duration);
  },
};
</script>


<style lang='scss' scoped>
.success{
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    line-height: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    transition: 200ms linear;
}
</style>
