<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/app_slices/tuceng565@2x.png" alt />
    </div>
    <div class="banner ps_r">
      <img src="../../assets/images/app_slices/appkaifa.png" alt />
      <Title
        :titleSetting="focusTitle"
        class="ps_a"
        style="top: 60px; left: 50%; transform: translateX(-50%)"
      />
    </div>
    <!-- 应对场景 -->
    <div class="scenario">
      <div class="scenario_box mini_w">
        <Title :titleSetting="focusTitle" />
        <div class="scenario_list flex fl_w ma_t_50">
          <div
            class="scenario_item ma_r_15 ma_b_20 pad_t_22 pad_b_20"
            v-for="item in appArr"
            :key="item.id"
          >
            <div class="scenario_item_img pad_t_11 pad_r_23 pad_b_15 pad_l_12">
              <img :src="item.imgUrl" alt />
            </div>
            <p class="fs_18 ma_t_9 text_c">{{item.text}}</p>
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
  </div>
</template>

<script>
// import aa from ""
import Title from "../../components/title/title";
export default {
  components: {
    Title,
  },
  data() {
    return {
      focusTitle: {
        title: "App开发注重点",
        tips:
          "APP开发中，我们注重于整个平台的交互效果、用户体验、兼容性、个性化定制、安全性、数据分析处理",
        titleColor: "#000000",
        tipsColor: "#666666",
      },
      scenarioTitle: {
        title: "应用场景介绍",
        tips:
          "我们对各行业的用户调查和市场分析，确保能针对不同行业开发出最适合消费者的APP",
        titleColor: "#000000",
        tipsColor: "#666666",
      },
      recommendTitle: {
        title: "推荐案例",
        tips: "RECOMMENDED CASE",
        titleColor: "white",
        tipsColor: "white",
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
      appArr:[
        {
          id:1,
          imgUrl:require("../../assets/images/app_slices/yiliao.png"),
          text:"医疗健康"
        },
        {
          id:2,
          imgUrl:require("../../assets/images/app_slices/dianshang.png"),
          text:"电商"
        },
        {
          id:3,
          imgUrl:require("../../assets/images/app_slices/zhibo.png"),
          text:"直播"
        },
        {
          id:4,
          imgUrl:require("../../assets/images/app_slices/shejiao.png"),
          text:"社交"
        },
        {
          id:5,
          imgUrl:require("../../assets/images/app_slices/paotui.png"),
          text:"跑腿"
        },
        {
          id:6,
          imgUrl:require("../../assets/images/app_slices/canyin.png"),
          text:"餐饮"
        },

        {
          id:7,
          imgUrl:require("../../assets/images/app_slices/daohang.png"),
          text:"导航"
        },
        {
          id:8,
          imgUrl:require("../../assets/images/app_slices/xinwen.png"),
          text:"新闻类"
        },
        {
          id:9,
          imgUrl:require("../../assets/images/app_slices/jiaoyu.png"),
          text:"教育"
        },
        {
          id:10,
          imgUrl:require("../../assets/images/app_slices/jinrong.png"),
          text:"金融"
        },
        {
          id:11,
          imgUrl:require("../../assets/images/app_slices/meirong.png"),
          text:"美容"
        },
        {
          id:12,
          imgUrl:require("../../assets/images/app_slices/jiazheng.png"),
          text:"家政类APP"
        },
        {
          id:13,
          imgUrl:require("../../assets/images/app_slices/lvyou.png"),
          text:"旅游类"
        },
        {
          id:14,
          imgUrl:require("../../assets/images/app_slices/waimai.png"),
          text:"外卖"
        },
        {
          id:15,
          imgUrl:require("../../assets/images/app_slices/fangchan.png"),
          text:"房产APP"
        },
        {
          id:16,
          imgUrl:require("../../assets/images/app_slices/jiaoyou.png"),
          text:"交友类"
        },
        {
          id:17,
          imgUrl:require("../../assets/images/app_slices/jinrong2.png"),
          text:"金融类APP"
        },
        {
          id:18,
          imgUrl:require("../../assets/images/app_slices/bangong.png"),
          text:"办公类"
        },
        {
          id:19,
          imgUrl:require("../../assets/images/app_slices/youxi.png"),
          text:"游戏"
        },
        {
          id:20,
          imgUrl:require("../../assets/images/app_slices/shenghuofuwu.png"),
          text:"生活服务"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
.scenario {
  padding-top: 80px;
  padding-bottom: 66px;
  .scenario_item {
    background: #f0f0f0;
    width: 226px;
    position: relative;
    cursor: pointer;
    &:nth-child(5n + 5) {
      margin-right: 0;
    }
    &::after {
      content: "";
      display: none;
      height: 2px;
      background: #dab866;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover::after {
      display: block;
    }
    &:hover .scenario_item_img {
      background: #dab866;
    }
    .scenario_item_img {
      border-radius: 50%;
      background: #f9f9f9;
      width: 57px;
      margin: 0 auto;
      img {
        width: 33px;
        margin: 0 auto;
      }
    }
  }
}
.recommend {
  background: url("../../assets/images/app_slices/ff858317302cb0bc38bf40886ab5032a@2x.png")
    no-repeat;
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
        background: #dab866;
        left: 0;
        bottom: 0;
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
