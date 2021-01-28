<template>
  <div>
    <div class="recommend">
      <div class="recommend_box mini_w pad_b_50">
        <TitleTow :titleSetting="recommendTitleSetting" />
        <div class="recommend_list flex fl_w ma_t_50">
          <div
            class="recommend_item ma_r_8 ma_b_28 text_c pad_14 ps_r"
            v-for="item in recommendArr"
            :key="item.id"
          >
            <img :src="item.imgUrl" alt="" />
            <p class="fs_20 fw_700 ma_t_16">{{ item.title }}</p>
          </div>
        </div>
        <div class="recommend_more text_c fs_42" @click="checkMore">+</div>
        <p class="text_c ma_t_10" style="color: #dab866">查看更多</p>
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
      recommendTitleSetting: {
        en: "CASE",
        ch: "案例推荐",
        tips: "company case recommend",
        lineColor: "#959595",
      },
      recommendArr: [
        {
          id: 1,
          imgUrl: require("../../../assets/images/home_slices/shejiaoAPP-Bene.png"),
          title: "社交APP-Bene社交",
        },
        {
          id: 2,
          imgUrl: require("../../../assets/images/home_slices/zufangAPP.png"),
          title: "租房APP-租客",
        },
        {
          id: 3,
          imgUrl: require("../../../assets/images/home_slices/jiaoyuAPP.png"),
          title: "教育APP-腾讯课堂",
        },
        {
          id: 4,
          imgUrl: require("../../../assets/images/home_slices/jinrongAPP.png"),
          title: "金融APP-优财金融",
        },
        {
          id: 5,
          imgUrl: require("../../../assets/images/home_slices/dianshangAPP.png"),
          title: "电商APP-轻拍购物",
        },
        {
          id: 6,
          imgUrl: require("../../../assets/images/home_slices/canyinAPP.png"),
          title: "餐饮APP-米熊",
        },
      ],
    };
  },
  methods:{
    // 查看更多
    checkMore(){
      this.$router.push({path:"/project"})
    }
  }
};
</script>

<style scoped lang='less'>
.recommend {
  .recommend_box {
    margin-top: 100px;
    .recommend_item {
      border: 1px solid #dfdfdf;
      width: 388px;
      img {
        width: 360px;
        margin: 0 auto;
      }
      &::after {
        width: 100%;
        content: "";
        height: 6px;
        background: #dab866;
        left: 0;
        bottom: -1px;
        display: none;
        position: absolute;
      }
      &:hover::after {
        display: block;
      }
    }
    .recommend_more {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      line-height: 66px;
      font-family: SourceHanSansCN-Normal;
      margin: 0 auto;
      user-select: none;
      cursor: pointer;
      background: #dab866;
      color: white;
    }
  }
}
</style>