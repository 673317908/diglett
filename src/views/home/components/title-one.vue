<template>
  <div class="flex jcc">
    <div class="title_box text_c">
      <div class="title_en">
        <p
          class="fs_36 fw_300"
          :style="
            'font-family: SourceHanSansCN-Light;color:' + titleSetting.enColor
          "
        >
          
          {{titleSetting.en}}
        </p>
      </div>
      <div class="title_ch ma_t_10 ma_b_30">
        <p class="fs_36 fw_700">{{titleSetting.ch}}</p>
        <div class="line ps_r">
          <div class="dot ps_r">
            <span class="ps_a"></span>
            <span class="ps_a"></span>
            <span class="ps_a"></span>
          </div>
        </div>
      </div>
      <div class="title_tips ma_t_22">
        <p class="fs_16" :style="'color:'+titleSetting.tipsColor+';'">
          {{titleSetting.tips}}
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
    return {};
  },
};
</script>

<style scoped lang='less'>
.line::before,
.line::after {
  content: "";
  display: block;
  width: 126px;
  height: 2px;
  background: #e8e8e8;
  position: absolute;
  bottom: 0;
}
.line::before {
  left: 70px;
  top: 15px;
}
.line::after {
  right: 70px;
  top: 15px;
}
.title_tips {
  color: #9f9fa0;
}
.dot {
  span {
    display: block;
    width: 12px;
    height: 12px;
    background: #00a0e9;
    opacity: 0.5;
    border-radius: 50%;
  }
  span:nth-child(1) {
    top: 9px;
    left: 51%;
    transform: translateX(-50%);
  }
  span:nth-child(2) {
    top: 9px;
    right: 48%;
    transform: translateX(-50%);
  }
  span:nth-child(3) {
    bottom: -26px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>