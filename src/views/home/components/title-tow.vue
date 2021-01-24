<template>
  <div>
    <div class="title_box text_c">
      <div class="title_content flex jcc al_c" :style="{'--color':titleSetting.lineColor}">
        <p class="fs_38 fw_700">{{ titleSetting.en }}</p>
        <p class="fs_38">
          <span class="fw_700 ma_l_10">{{ startText }}</span
          >{{ endText }}
        </p>
      </div>
      <div class="title_tips ma_t_20">
        <p class="fs_14" :style="'color:' + titleSetting.color">
          {{ titleSetting.tips }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleSetting: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      startText: "",
      endText: "",
    };
  },
  mounted() {
    this.dealText();
  },
  methods: {
    dealText() {
      var split = this.titleSetting.ch.split("", this.titleSetting.ch.length);
      this.startText = split[0] + split[1];
      this.endText = split[2] + split[this.titleSetting.ch.length - 1];
    },
  },
};
</script>

<style scoped lang='less'>
.title_box {
  font-family: MicrosoftYaHei;
  .title_content::before,
  .title_content::after {
    content: "";
    display: block;
    height: 2px;
    background: var(--color);
    opacity: 0.4;
    width: 106px;
    margin: 0 18px;
  }
  .title_tips {
    color: #959595;
  }
}
</style>