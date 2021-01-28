<template>
  <div>
    <div class="need pad_40">
      <div class="need_box mini_w">
        <div class="need_list flex text_c">
          <div
            class="need_item ma_r_9 text_c pad_r_18 pad_l_18 pad_t_14 pad_b_14 flex fl_d jcc al_c"
            v-for="item in needArr"
            :key="item.id"
          >
            <img :src="item.imgUrl" alt="" />
            <p class="ma_t_16 fs_9">{{ item.text }}</p>
          </div>
        </div>
        <div class="need_title flex jcc">
          <p class="fs_30 fw_700">想要开发一款</p>
          <p class="fs_30 fw_700">高质量的APP?</p>
        </div>
        <div class="need_tips">
          <p class="fs_16 fw_400 text_c ma_b_28">
            请填写你的开发需求，我们会尽快与您取得联系
          </p>
        </div>
        <!-- 需求表单 -->
        <needForm />
      </div>
    </div>
  </div>
</template>

<script>
import needForm from "./needForm";
export default {
  components: {
    needForm,
  },
  data() {
    return {
      needArr: [
        {
          id: 1,
          text: "国家高新技术企业",
          imgUrl: require("../../../assets/images/home_slices/dc-icon-1.png"),
        },
        {
          id: 2,
          text: "校企合作基地",
          imgUrl: require("../../../assets/images/home_slices/dc-icon-2.png"),
        },
        {
          id: 3,
          text: "校企合作基地",
          imgUrl: require("../../../assets/images/home_slices/dc-icon-2.png"),
        },
        {
          id: 4,
          text: "校企合作基地",
          imgUrl: require("../../../assets/images/home_slices/dc-icon-2.png"),
        },
        {
          id: 5,
          text: "校企合作基地",
          imgUrl: require("../../../assets/images/home_slices/dc-icon-2.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
.need {
  background: #f1f1f1;
  .need_item {
    width: 220px;
    background: white;
    img {
      width: 52px;
      margin: 0 auto;
    }
  }
  .need_title {
    margin-top: 54px;
    margin-bottom: 27px;
    p:nth-child(2) {
      color: #00a0e9;
    }
  }
  .need_tips {
    color: #9f9fa0;
  }
}
</style>