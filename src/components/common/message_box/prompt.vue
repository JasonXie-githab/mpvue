<template>
    <div class="ms_prompt" @touchmove.stop :style="{opacity: opacity}">
        <ms-mask/>
        <div class="ms_prompt_con">
            <div class="title">
                <span>{{title}}</span>
            </div>
            <div class="content">
                <input v-model="value" cursor-spacing="80" focus/>
                <span class="error">{{error}}</span>
            </div>
            <div class="bottom">
                <div class="btn cancel" v-if="showCancelButton" :class="active === 1? 'active': ''" @touchstart="touchstart(1)" @touchend="touchend" @click="callback(false)">
                    <span>{{cancelButtonText}}</span>
                </div>
                <div class="btn confirmed" :class="active === 2? 'active': ''" @touchstart="touchstart(2)" @touchend="touchend" @click="callback(true)">
                    <span>{{confirmButtonText}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MsMask from '../mask';

export default {
  name: 'MsPrompt',
  props: {
    title: {
      type: String,
      default: () => '请输入',
    },
    content: {
      type: String,
      default: () => '',
    },
    showCancelButton: {
      type: Boolean,
      default: () => true,
    },
    inputPattern: {
      type: RegExp,
      default: () => /\S/,
    },
    inputErrorMessage: {
      type: String,
      default: () => '格式不正确',
    },
    confirmButtonText: {
      type: String,
      default: () => '确定',
    },
    cancelButtonText: {
      type: String,
      default: () => '取消',
    },
  },
  components: {
    MsMask,
  },
  data() {
    return {
      opacity: 1,
      active: 0,
      value: '',
      error: '',
    };
  },
  created() {
    this.value = '';
    this.error = '';
  },
  mounted() {
    this.value = this.content;
  },
  methods: {
    touchstart(key) {
      this.active = key;
    },
    touchend() {
      this.active = 0;
    },
    callback(flag) {
      if (flag && !this.inputPattern.test(this.value)) {
        this.error = this.inputErrorMessage;
        return;
      }
      this.error = '';
      this.opacity = 0;
      setTimeout(() => {
        this.$emit('callback', flag, this.value);
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.ms_prompt{
    opacity: 0;
    transition: 200ms linear;
    width: 540px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1000;
    .ms_prompt_con{
        width: 100%;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        position: absolute;
        top: 30vh;
        z-index: 1001;
        .title{
            font-size: 36px;
            font-weight: bold;
            color: #222;
            text-align: center;
            line-height: 102px;
            border-bottom: solid 1px #e5e5e5;
        }
        .content{
            padding: 40px 48px;
            input{
                height: 60px;
                width: 100%;
                border: solid 2px #eee;
                border-radius: 5px;
                color: #333;
                font-size: 30px;
                padding: 0 10px;
            }
            .error{
                color: #F56C6C;
                font-size: 24px;
            }
        }
        .bottom{
            height: 88px;
            border-top: solid 1px #e5e5e5;
            line-height: 88px;
            font-size: 32px;
            color: $primary-color;
            display: flex;
            .btn{
                text-align: center;
                flex: 1;
                &.active{
                    background-color: #eee;
                }
            }
            .cancel{
                border-right: solid 1px #e5e5e5;
                color: #666;
            }
        }
    }
}
</style>
