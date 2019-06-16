<template>
    <div class="ms_ui">
        <ms-mask v-for="(item, index) in maskList" :key="index" :closeOnClickMask="item.closeOnClickMask" @closeMask="closeMask(index)"/>
        <div class="message_box" v-if="messageList.length > 0">
            <ms-message v-for="(item, index) in messageList" :message="item.message" :duration="item.duration" :key="index" @closeMessage="closeMessage(index)"/>
        </div>
        <ms-confirm v-for="(item, index) in confirmList" :key="index" :index="index" :title="item.title" :content="item.content" :confirmButtonText="item.confirmButtonText" :cancelButtonText="item.cancelButtonText" :showCancelButton="item.showCancelButton" @callback="confirmCallback"/>
        <ms-prompt v-for="(item, index) in promptList" :key="index" :index="index" :title="item.title" :content="item.content" :showCancelButton="item.showCancelButton" :inputPattern="item.inputPattern" :inputErrorMessage="item.inputErrorMessage" @callback="promptCallback"/>
        <ms-loading v-if="showLoading" :loadingText="loadingText"/>
        <ms-success v-if="showSuccess" :successText="successText" :duration="successDuration" @closeSuccess="closeSuccess"/>
    </div>
</template>s
<script>
import MsMask from './mask';
import MsMessage from './message_box/message';
import MsConfirm from './message_box/confirm';
import MsPrompt from './message_box/prompt';
import MsLoading from './message_box/loading';
import MsSuccess from './message_box/success';

export default {
  name: 'Ui',
  data() {
    return {
      maskList: [],
      messageList: [],
      confirmList: [],
      promptList: [],
      showLoading: false,
      loadingText: '加载中',
      showSuccess: false,
      successText: '成功',
      successDuration: 2000,
    };
  },
  components: {
    MsMask,
    MsMessage,
    MsConfirm,
    MsPrompt,
    MsLoading,
    MsSuccess,
  },
  onShow() {
    this.ready();
  },
  created() {
    this.ready();
  },
  onUnload() {
    this.closeAll();
  },
  beforeDestroy() {
    this.closeAll();
  },
  onHide() {
    this.closeAll();
  },
  methods: {
    closeAll() {
      this.$closeConfirm();
      this.$closeMask();
      this.$hideLoading();
    },
    ready() {
      this.$App.$off('openMask');
      this.$App.$off('closeMask');
      this.$App.$off('message');
      this.$App.$off('confirm');
      this.$App.$off('prompt');
      this.$App.$off('closeConfirm');
      this.$App.$off('closePrompt');
      this.$App.$off('showLoading');
      this.$App.$off('hideLoading');
      this.$App.$off('showSuccess');
      this.$App.$on('openMask', ({ closeOnClickMask, beforeClose }) => {
        this.openMask({ closeOnClickMask, beforeClose });
      });
      this.$App.$on('closeMask', () => {
        this.closeMask();
      });
      this.$App.$on('message', ({ message, duration }) => {
        if (message) {
          for (let i = 0; i < this.messageList.length; i += 1) {
            if (this.messageList[i].message === message) {
              this.messageList.splice(i, 1);
              break;
            }
          }
          this.messageList.push({ message, duration: duration || 2000 });
        }
      });
      this.$App.$on('confirm', ({
        title,
        content,
        showCancelButton,
        confirmButtonText,
        cancelButtonText,
        success,
        fail,
      }) => {
        this.confirmList.push({
          title: title || '', content: content || '', confirmButtonText: confirmButtonText || '确定', cancelButtonText: cancelButtonText || '取消', showCancelButton: !!showCancelButton, success, fail,
        });
      });
      this.$App.$on('prompt', ({
        title,
        content,
        showCancelButton,
        confirmButtonText,
        cancelButtonText,
        inputPattern,
        inputErrorMessage,
        success,
        fail,
      }) => {
        this.promptList.push({
          title: title || '', content: content || '', confirmButtonText: confirmButtonText || '确定', cancelButtonText: cancelButtonText || '取消', showCancelButton: !!showCancelButton, inputPattern, inputErrorMessage, success, fail,
        });
      });
      this.$App.$on('closeConfirm', () => {
        this.confirmList = [];
      });
      this.$App.$on('closePrompt', () => {
        this.promptList = [];
      });
      this.$App.$on('showLoading', ({ title }) => {
        this.showLoading = true;
        if (title) this.loadingText = title;
      });
      this.$App.$on('hideLoading', () => {
        this.showLoading = false;
        this.title = '加载中';
      });
      this.$App.$on('showSuccess', ({ message, duration }) => {
        this.showSuccess = true;
        if (message) this.successText = message;
        this.successDuration = duration || 2000;
      });
    },
    closeMask(index) {
      if (index >= 0) {
        if (this.maskList[index].beforeClose) {
          this.maskList[index].beforeClose();
        }
        this.maskList.splice(index, 1);
      } else {
        this.maskList = [];
      }
    },
    openMask({ closeOnClickMask, beforeClose }) {
      this.maskList.push({ closeOnClickMask: !!closeOnClickMask, beforeClose });
    },
    closeMessage(index) {
      if (index >= 0) {
        this.messageList[index].closed = true;
        for (let i = 0; i < this.messageList.length; i += 1) {
          if (!this.messageList[i].closed) {
            return;
          }
        }
        this.messageList = [];
      } else {
        this.messageList = [];
      }
    },
    closeSuccess() {
      this.showSuccess = false;
      this.successText = '成功';
      this.successDuration = 2000;
    },
    confirmCallback(flag, index) {
      if (flag && this.confirmList[index].success) {
        this.confirmList[index].success({ confirmed: flag });
      }
      if (!flag && this.confirmList[index].fail) {
        this.confirmList[index].fail({ confirmed: flag });
      }
      this.$App.$emit('closeConfirm');
    },
    promptCallback(flag, index, value) {
      if (flag && this.promptList[index].success) {
        this.promptList[index].success({ confirmed: flag, value });
      }
      if (!flag && this.promptList[index].fail) {
        this.promptList[index].fail({ confirmed: flag, value });
      }
      this.$App.$emit('closePrompt');
    },
  },
};
</script>

<style lang="scss" scoped>
.ms_ui{
    .message_box{
        position: fixed;
        top: 20vh;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1002;
        max-width: 630px;
        text-align: center;
    }
}
</style>
