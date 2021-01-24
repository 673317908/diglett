<template>
  <div class="index">
    <!-- 轮播图 -->
    <Swiper />
    <!-- 需求填写 -->
    <Need />
    <!-- 核心业务 -->
    <Core />
    <!-- 方案 -->
    <Project />
    <!-- 推荐案例 -->
    <Recommend />
    <!-- 口碑评价 -->
    <Grade />
    <!-- 服务流程 -->
    <Service />
    <!-- 合作伙伴 -->
    <Partner />
    <!-- 新闻中心 -->
    <News />
  </div>
</template>

<script>
import Swiper from "./components/swiper";
import Need from "./components/need";
import Core from "./components/core";
import Project from "./components/project";
import Recommend from "./components/recommend";
import Grade from "./components/grade";
import Service from "./components/service";
import Partner from "./components/partner";
import News from "./components/news";
export default {
  components: {
    Swiper,
    Need,
    Core,
    Project,
    Recommend,
    Grade,
    Service,
    Partner,
    News,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang='less' scoped>
.index {

}
</style>