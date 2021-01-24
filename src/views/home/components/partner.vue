<template>
  <div>
    <div class="partner">
      <TitleTow :titleSetting="partnerTitleSetting" />
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
      partnerTitleSetting: {
        en: "PARTNER",
        ch: "合作伙伴",
        tips: "CUSTOMER WORD OF MOUTH EVALUATION",
        lineColor: "#959595",
      },
    };
  },
};
</script>

<style scoped lang='less'>
.partner {
  padding: 60px;
  background: #fbfbfb;
}
</style>