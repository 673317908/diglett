<template>
  <div>
    <div class="banner">
      <div class="banner_box flex al_c jcc">
        <div class="banner_l">
          <div class="banner_title fw_700 fs_58 ma_b_25">
            OA CRM ERP 系统开发
          </div>
          <div class="banner_desc">
            <p class="fs_26">支持统一后台管理、多端同步协同操作</p>
            <p class="fs_26 ma_b_30">支持WEB+PC+APP+微信四合一全网开发</p>
            <p class="fs_26 ma_b_20">
              助力发展客户关系、梳理销售管理流程、合理调配企业资源，
              使企业管理质量升级，全面提升核心竞争力！以“事找人”的
              工作方式，代办事务推送工作桌面
            </p>
            <p class="fs_26">
              从企业需求出发，打造具有高灵活性、高延展性应用系统,并提
              供全套技术支持及维护延展服务
            </p>
          </div>
        </div>
        <div class="banner_r">
          <img src="../../assets/images/system_slices/chahua@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="system">
      <div class="system_title text_c">
        <p class="fs_36 fw_700 ma_b_28">系统开发</p>
        <p class="fs_24">SYSTEM DEVELOPMENT</p>
      </div>
      <div class="system_list">
        <div class="system_item flex al_c mini_w">
          <div class="system_item_l">
            <systemTitle title="OA办公系统" />
            <div class="system_tips ma_b_38 ma_t_26 fs_24">
              <p>提高企业办公效率，无纸化办公模式</p>
            </div>
            <div class="system_desc fs_24">
              <p class="ma_b_30">
                OA办公管理系统是目前很多中大型企业都在用的
                企业办公新模式，企业办公自动化提高了企业店办 公效率。
              </p>
              <p>
                办公自动化（OA）是面向组织的日常运作和管理，
                员工及管理者使用频率最高的应用系统，OA在运
                用内容的深度与广度、IT技术运用等方面都有了新
                的变化和发展，并成为组织不可或缺的核心应用系统。
              </p>
            </div>
          </div>
          <div class="system_item_r">
            <img
              src="../../assets/images/system_slices/tuceng567@2x.png"
              alt=""
            />
          </div>
        </div>
        <div style="background: white">
          <div class="system_item flex al_c mini_w">
            <div class="system_item_r ma_r_50">
              <img
                src="../../assets/images/system_slices/tuceng568@2x.png"
                alt=""
              />
            </div>
            <div class="system_item_l">
              <systemTitle title="ERP管理系统" />
              <div class="system_tips ma_b_38 ma_t_26 fs_24">
                <p>提高管理层决策效率</p>
              </div>
              <div class="system_desc fs_24">
                <p class="ma_b_30">
                  集信息技术与先进管理思想于一身，以系统化的管理
                  思想，为企业员工及决策层提供决策手段的管理平台
                </p>
                <p>
                  它跳出了传统企业边界，从供应链范围去优化企业的
                  资源，优化了现代企业的运行模式，反映了市场对企
                  业合理调配资源的要求。它对于改善企业业务流程、
                  提高企业核心竞争力具有显著作用。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="system_item flex al_c mini_w">
          <div class="system_item_l">
            <systemTitle title="CRM客户管理系统" />
            <div class="system_tips ma_b_38 ma_t_26 fs_24">
              <p>规范客户的管理方式、提高客户开发能力</p>
            </div>
            <div class="system_desc fs_24">
              <p class="ma_b_30">
                多维度分类支持百万级客户管理，多维度分类管理，
                面对海量客户资源，也能精准把握客户偏好，挖掘
                客户潜力用量化的数据对目标客户群进行等级的划
                分，用量化的方法客观的评价你的客户。
              </p>
              <p>
                根据业务员能力限定跟进与服务客户数量，没有及
                时跟进的客户放入“公海”重新分配，保证每个客
                户都得到有效的跟进，减少客户的流失，以客户为
                中心查看相关的询盘、报价、订单、出运以及收汇 情况。
              </p>
            </div>
          </div>
          <div class="system_item_r">
            <img
              src="../../assets/images/system_slices/tuceng569@2x.png"
              alt=""
            />
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
      </div>
    </div>
    <!-- 业务展示 -->
    <div class="show">
      <div class="show_box mini_w">
        <Title :titleSetting="showTitle" />
        <div class="show_list ma_t_46 flex">
          <div
            class="show_item ma_r_10 pad_t_24 pad_r_50 pad_l_50"
            v-for="item in 5"
            :key="item"
          >
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
import systemTitle from "./components/title";
export default {
  components: {
    Title,
    systemTitle,
  },
  data() {
    return {
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
      showTitle: {
        title: "业务展示",
        tips: "Business presentation",
        titleColor: "#000000",
        tipsColor: "#666666",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.banner {
  background: url("../../assets/images/system_slices/tuceng1@2x.png") no-repeat
    center center;
  padding-top: 92px;
  padding-bottom: 56px;
  color: white;
  .banner_l {
    width: 740px;
  }
  .banner_r {
    width: 968px;
    img {
      width: 100%;
    }
  }
}
.system {
  background: white;
  padding-top: 63px;
  .system_title {
    p:nth-child(2) {
      color: #666666;
    }
  }
  .system_list {
    margin-top: 117px;
    background: #f1f1f1;
    .system_item {
      padding-top: 54px;
      padding-bottom: 47px;
    }
    .system_item_l {
      margin-right: 70px;
    }
    .system_desc {
      color: #666666;
    }
  }
}
.recommend {
  background: url("../../assets/images/web_slices/ff858317302cb0bc38bf40886ab5032a@2x.png")
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
      background: #00a0e9;
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
