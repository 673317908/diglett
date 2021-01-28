<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/wechat_slices/tuceng565@2x.png" alt />
      <div class="banner_box mini_w ps_r">
        <div class="banner_content ps_a">
          <div class="banner_title">
            <p class="fs_58 fw_700 ma_b_38">高端微信营销 定制开发领导者</p>
            <p class="fs_26">支持开发微信订阅号、服务号、企业号</p>
            <p class="fs_26">实现对接H5/小程序或ERP/CRM/OA等系统</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 特点 -->
    <div class="benefits ps_r">
      <div class="benefits_box mini_w">
        <div class="benefits_list">
          <div class="benefits_item flex ma_b_38" v-for="item in 3" :key="item">
            <div class="benefits_item_img">
              <img src="../../assets/images/wechat_slices/duigou.png" alt />
            </div>
            <div class="benefits_item_info ma_l_15">
              <p class="fs_26 fw_700 ma_b_5">扩大影响力/ Expand influence</p>
              <p class="fs_16">展示企业品牌营销信息、增加粉丝互动、深化品牌传播、降低营销成本；</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 高级定制场景 -->
    <div class="senior">
      <div class="senior_box mini_w">
        <Title :titleSetting="seniorTitle" />
        <div class="senior_list flex fl_w al_c">
          <div class="senior_item ma_b_14 ma_r_14 flex fl_d al_c" v-for="item in 4" :key="item">
            <div class="senior_img">
              <img src="../../assets/images/wechat_slices/xingzhuang13@2x.png" alt />
            </div>
            <div class="senior_title pad_b_14">
              <p class="fs_26 text_c">功能定制</p>
            </div>
            <div class="senior_desc text_c">
              <p class="fs_16">根据您的实际需求定制您所想要的功能，以实现功能体验完全贴近用户的微信公众平台</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 行业场景 -->
    <div class="industry">
      <div class="industry_box mini_w">
        <Title :titleSetting="industryTitle" />
        <div class="industry_list flex fl_w ma_t_52">
          <div class="industry_item ma_r_16 ma_b_22 pad_20" v-for="item in 8" :key="item">
            <div class="industry_img ma_b_42">
              <img src="../../assets/images/wechat_slices/dianshang.png" alt />
            </div>
            <div class="industry_title text_c fw_700">
              <p class="fs_28">o2o电商</p>
            </div>
            <div class="industry_desc ma_t_23">
              <p class="fs_16">线上运营，线下消费，线上线下结合</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐案例 -->
    <div class="recommend">
      <div class="recommend_box mini_w pad_b_50">
        <Title :titleSetting="recommendTitle" />
        <div class="recommend_list flex fl_w ma_t_50">
          <div
            class="recommend_item ma_r_8 ma_b_28 text_c pad_14 ps_r"
            v-for="item in recommendArr"
            :key="item.id"
          >
            <img :src="item.imgUrl" alt />
            <p class="fs_20 fw_700 ma_t_16">{{ item.title }}</p>
          </div>
        </div>
        <div class="recommend_more text_c fs_42">+</div>
        <p class="text_c ma_t_10" style="color: #dab866">查看更多</p>
      </div>
    </div>
    <!-- 业务展示 -->
    <div class="show">
      <div class="show_box mini_w">
        <Title :titleSetting="showTitle" />
        <div class="show_list ma_t_46 flex">
          <div class="show_item ma_r_10 pad_t_24 pad_r_50 pad_l_50" v-for="item in 5" :key="item">
            <div class="show_img">
              <img src="../../assets/images/wechat_slices/zu59@2x.png" alt />
            </div>
            <div class="show_title pad_b_16 ps_r text_c">
              <p class="fs_28 fw_700">网站建设</p>
            </div>
            <div class="show_path text_c">
              <p class="fs_18 ma_b_17">品牌展示网站</p>
              <p class="fs_18 ma_b_17">品牌展示网站</p>
              <p class="fs_18 ma_b_17">品牌展示网站</p>
              <p class="fs_18 ma_b_17">品牌展示网站</p>
              <p class="fs_18 ma_b_17">品牌展示网站</p>
              <p class="fs_18 ma_b_17">品牌展示网站</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/title/title";
export default {
  components: {
    Title
  },
  data() {
    return {
      recommendTitle: {
        title: "推荐案例",
        tips: "RECOMMENDED CASE",
        titleColor: "white",
        tipsColor: "white"
      },
       recommendArr: [
        {
          id: 1,
          imgUrl: require("../../assets/images/home_slices/shejiaoAPP-Bene.png"),
          title: "社交APP-Bene社交",
        },
        {
          id: 2,
          imgUrl: require("../../assets/images/home_slices/zufangAPP.png"),
          title: "租房APP-租客",
        },
        {
          id: 3,
          imgUrl: require("../../assets/images/home_slices/jiaoyuAPP.png"),
          title: "教育APP-腾讯课堂",
        },
        {
          id: 4,
          imgUrl: require("../../assets/images/home_slices/jinrongAPP.png"),
          title: "金融APP-优财金融",
        },
        {
          id: 5,
          imgUrl: require("../../assets/images/home_slices/dianshangAPP.png"),
          title: "电商APP-轻拍购物",
        },
        {
          id: 6,
          imgUrl: require("../../assets/images/home_slices/canyinAPP.png"),
          title: "餐饮APP-米熊",
        },
      ],
      seniorTitle: {
        title: "高端定制场景",
        tips:
          "让您的微信公众平台更具吸引力，针对行业及企业的个性化需求，定制开发利用最大化，用户体验最优化，生产管理做到精益求精为您创造更",
        titleColor: "#000000",
        tipsColor: "#666666"
      },
      industryTitle: {
        title: "场景行业",
        tips: "微信应用遍布各个行业，使用广泛，效果极佳",
        titleColor: "#000000",
        tipsColor: "#666666"
      },
      showTitle: {
        title: "业务展示",
        tips: "Business presentation",
        titleColor: "#000000",
        tipsColor: "#666666"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.banner {
  z-index: 11;
  img {
    width: 100%;
    z-index: 11;
  }
  .banner_title {
    color: white;
    padding-bottom: 73px;
  }
  .banner_content {
    bottom: 122px;
  }
}
.benefits_box {
  z-index: 99;
  margin-top: -88px;
  position: relative;
  .benefits_list {
    background-color: #edfaff;
    padding: 28px 85px 26px 85px;
    margin-bottom: 78px;
    z-index: 99;
    img {
      width: 52px;
      margin: 0 auto;
    }
    .benefits_item {
      .benefits_item_info {
        p:nth-child(2) {
          color: #797979;
        }
      }
      &:nth-child(3) {
        margin-bottom: 0;
      }
    }
  }
}
.senior {
  background: #f1f1f1;
  padding-top: 60px;
  padding-bottom: 87px;
  .senior_list {
    margin-top: 80px;
    .senior_item {
      background: #ffffff;
      padding: 63px 0 48px 0;
      width: 588px;
      &:hover {
        outline: 3px solid #00a0e9;
        box-shadow: 0px 0px 15px 1px rgba(0, 67, 97, 0.56);
      }
      &:nth-child(2n + 2) {
        margin-right: 0;
      }
      .senior_img {
        width: 90px;
        margin: 0 auto 40px auto;
        img {
          width: 100%;
        }
      }
      .senior_title {
        border-bottom: 2px solid #dfac32;
      }
      .senior_desc {
        color: #333333;
        width: 336px;
        margin: 17px auto 0 auto;
      }
    }
  }
}
.industry {
  padding-top: 80px;
  padding-bottom: 70px;
  .industry_item {
    background: #165ac9;
    width: 285px;
    padding: 60px 12px 65px 12px;
    color: white;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    .industry_img {
      width: 90px;
      border-radius: 50%;
      background: white;
      padding: 20px;
      margin: 0 auto 42px auto;
      img {
        width: 52px;
        margin: 0 auto;
      }
    }
    .industry_title {
      position: relative;
      padding-bottom: 12px;
      &::after {
        content: "";
        display: block;
        height: 5px;
        width: 40px;
        background: #dab866;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.recommend {
  background: url("../../assets/images/app_slices/ff858317302cb0bc38bf40886ab5032a@2x.png")
    no-repeat center center;
  background-size: cover;
  .recommend_box {
    padding-top: 40px;
    .recommend_item {
      border: 1px solid #dfdfdf;
      width: 388px;
      background: white;
      z-index: 99;
      img {
        width: 360px;
        margin: 0 auto;
      }
      &::after {
        width: 100%;
        content: "";
        height: 6px;
        background: #00a0e9;
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
.show {
  padding-top: 75px;
  padding-bottom: 88px;
  .show_item {
    width: 232px;
    background: #f2f2f2;
    &:hover {
      outline: 2px solid #00a0e9;
      box-shadow: 0px 1px 17px 1px rgba(0, 37, 54, 0.28);
    }
    .show_img {
      width: 132px;
      margin: 0 auto 12px auto;
      img {
        width: 100%;
      }
    }
    .show_title {
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 42px;
        height: 3px;
        background: #888888;
      }
    }
    .show_path {
      color: #555555;
      margin-top: 66px;
      p {
        cursor: pointer;
        user-select: none;
      }
      p:hover {
        color: #00a0e9;
      }
    }
  }
}
</style>
