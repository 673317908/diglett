<template>
  <div>
    <div class="news">
      <TitleTow :titleSetting="newsTitleSetting" />
      <div class="news_box mini_w"></div>
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
      newsTitleSetting: {
        en: "NEWS",
        ch: "新闻中心",
        tips: "COMPANY NEWS CENTER",
        lineColor: "#959595",
      },
    };
  },
};
</script>

<style scoped lang='less'>
.news {
  padding: 80px;
  background: #eeeeee;
  .news_box {
    margin-top: 60px;
  }
}
</style>