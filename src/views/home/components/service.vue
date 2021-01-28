<template>
  <div>
    <div class="service pad_40">
      <div class="service_box mini_w ma_t_50">
        <TitleTow :titleSetting="serviceTitleSetting" />
        <div class="service_img">
          <img
            src="../../../assets/images/home_slices/The Executive Team@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTow from "./title-tow";
export default {
  components: {
    TitleTow,
  },
  data() {
    return {
      serviceTitleSetting: {
        en: "PROCESS",
        ch: "服务流程",
        tips: "COMPANY PROCESS SERVICE",
        lineColor: "#959595",
      },
    };
  },
};
</script>

<style scoped lang='less'>
  .service {
    .service_img {
      margin-top: 60px;
    }
  }
</style>