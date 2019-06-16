<template>
    <div class="ms_mask" @touchmove.stop :style="{opacity: opacity}" @click.stop="closeMask"></div>
</template>

<script>
export default {
  name: 'MsMask',
  props: {
    closeOnClickMask: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      opacity: 1,
    };
  },
  methods: {
    closeMask() {
      if (!this.closeOnClickMask) {
        return;
      }
      setTimeout(() => {
        this.$emit('closeMask');
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.ms_mask{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color:rgba(0, 0, 0, 0.5);
    transition: 300ms linear;
    opacity: 0;
    z-index: 1000;
}
</style>
