<template>
    <div class="message_box">
        <div class="ms_message" :style="{opacity: opacity}">
            <span class="text">{{message}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MsMessage',
  props: {
    duration: {
      type: Number,
      default: () => 2000,
    },
    message: {
      type: String,
      default: () => '',
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
        this.$emit('closeMessage');
        clearTimeout(param2);
      }, 200);
      clearTimeout(param1);
    }, this.duration);
  },
};
</script>

<style lang="scss" scoped>
.message_box{
    padding-bottom: 20px;
    text-align: center;
    pointer-events: none;
    .ms_message{
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 30px;
        border-radius: 16px;
        max-width: 570px;
        white-space: normal;
        word-break:break-all;
        transition: 200ms linear;
        opacity: 0;
        text-overflow: ellipsis;
        max-height: 60vh;
        .text{
            font-size: 32px;
            color: #fff;
            font-weight: bold;
            line-height: 32px;
        }
    }
}
</style>
