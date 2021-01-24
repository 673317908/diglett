<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always" :loop="true" height="700px">
      <el-carousel-item v-for="item in 4" :key="item">
      <img style="width:100%;height:100%;" src="../../../assets/images/地鼠首页/图层 527.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
@import url("../../../styles/resetUi.css");
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


</style>