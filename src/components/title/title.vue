<template>
  <div>
    <div class="title_box mini_w text_c">
      <p
        class="fs_36 fw_700 ma_b_12"
        :style="{'--color':titleSetting.titleColor}"
      >{{titleSetting.title}}</p>
      <p
        class="fs_24"
        :style="{'--color':titleSetting.tipsColor}"
      >{{titleSetting.tips}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleSetting: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.title_box {
  font-family: MicrosoftYaHei;
  z-index: 99;
  p:nth-child(1) {
    color: var(--color);
  }
  p:nth-child(2) {
    color: var(--color);
  }
}
</style>
