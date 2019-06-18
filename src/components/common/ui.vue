<template>
    <div class="ms_ui">
        <ms-mask v-if="getMask.show" :closeOnClickMask="getMask.closeOnClickMask" @closeMask="closeMask"/>
        <div class="message_list" v-if="getMessageList.length > 0">
            <ms-message v-for="(item, index) in getMessageList" :message="item.text" :key="index"/>
        </div>
        <ms-confirm v-if="getConfirm.show" :title="getConfirm.title" :content="getConfirm.content" :confirmButtonText="getConfirm.confirmButtonText" :cancelButtonText="getConfirm.cancelButtonText" :showCancelButton="getConfirm.showCancelButton" @callback="confirmCallback"/>
        <ms-prompt v-if="getPrompt.show" :title="getPrompt.title" :content="getPrompt.content" :showCancelButton="getPrompt.showCancelButton" :inputPattern="getPrompt.inputPattern" :inputErrorMessage="getPrompt.inputErrorMessage" @callback="promptCallback"/>
        <ms-loading v-if="getLoading.show" :loadingText="getLoading.text"/>
        <ms-success v-if="getSuccess.show" :successText="getSuccess.text" :duration="getSuccess.duration" @closeSuccess="closeSuccess"/>
    </div>
</template>s
<script>
import { mapGetters } from 'vuex';
import MsMask from './mask';
import MsMessage from './message_box/message';
import MsConfirm from './message_box/confirm';
import MsPrompt from './message_box/prompt';
import MsLoading from './message_box/loading';
import MsSuccess from './message_box/success';

export default {
  name: 'Ui',
  computed: {
    ...mapGetters([
      'getMask',
      'getMessageList',
      'getLoading',
      'getSuccess',
      'getConfirm',
      'getPrompt',
    ]),
  },
  components: {
    MsMask,
    MsMessage,
    MsConfirm,
    MsPrompt,
    MsLoading,
    MsSuccess,
  },
  onUnload() {
    this.clear();
  },
  beforeDestroy() {
    this.clear();
  },
  onHide() {
    this.clear();
  },
  methods: {
    clear() {
      this.$store.commit('clearUiData');
    },
    closeMask() {
      if (this.getMask.beforeClose) {
        this.getMask.beforeClose();
      }
      this.$closeMask();
    },
    openMask({ closeOnClickMask, beforeClose }) {
      this.maskList.push({ closeOnClickMask: !!closeOnClickMask, beforeClose });
    },
    closeSuccess() {
      this.$closeSuccess();
    },
    confirmCallback(flag) {
      if (flag && this.getConfirm.success) {
        this.getConfirm.success({ confirmed: flag });
      }
      if (!flag && this.getConfirm.fail) {
        this.getConfirm.fail({ confirmed: flag });
      }
      this.$closeConfirm();
    },
    promptCallback(flag, value) {
      if (flag && this.getPrompt.success) {
        this.getPrompt.success({ confirmed: flag, value });
      }
      if (!flag && this.getPrompt.fail) {
        this.getPrompt.fail({ confirmed: flag, value });
      }
      this.$closePrompt();
    },
  },
};
</script>

<style lang="scss" scoped>
.ms_ui{
    .message_list{
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
