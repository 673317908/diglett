<template>
  <div>
    <div class="core pad_40">
      <div class="core_box mini_w ps_r">
        <TitleOne :titleSetting="coreTitleSetting" />
        <div class="core_list flex fl_w">
          <div class="core_item" v-for="(item, index) in coreArr" :key="index">
            <div class="item_img" v-if="item.imgUrl">
              <img :src="item.imgUrl" alt="" />
            </div>
            <div class="item_text" v-else>
              <p class="fs_22 fw_700 ma_b_12">{{ item.title }}</p>
              <p class="fs_15">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="core_more ps_a text_c fs_42">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleOne from "./title-one";
export default {
  components: {
    TitleOne,
  },
  data() {
    return {
      coreArr: [
        {
          imgUrl: require("../../../assets/images/地鼠首页/图层 3 拷贝@2x.png"),
        },
        {
          title: "微信定制开发",
          text: "微信公众号、微信商城、H5开、小程序开发发",
        },
        {
          imgUrl: require("../../../assets/images/地鼠首页/系统 拷贝@2x.png"),
        },
        {
          title: "网站开发",
          text: "企业官网定制开发电商系统、社交平台等网站开发",
        },
        {
          title: "移动APP定制开发",
          text: "Android、IOS系统开发，满足全行业类型需求",
        },
        {
          imgUrl: require("../../../assets/images/地鼠首页/we@2x.png"),
        },
        {
          title: "系统研发",
          text: "企业集团OA系统开发CRM、ERP系统",
        },
        {
          imgUrl: require("../../../assets/images/地鼠首页/完为止@2x.png"),
        },
      ],
      coreTitleSetting: {
        en: "CORE" + " " + "BUSINSS",
        ch: "核心业务",
        tips: "丰富的策划经验+资深的开发能力，为您提供一站式满分服务",
        enColor: "#cacacc",
        tipsColor: "#9f9fa0",
      },
    };
  },
};
</script>

<style scoped lang='less'>
  .core {
    .core_list {
      margin-top: 70px;
      .core_item {
        width: 295px;
        background: #f8f8f8;
        img {
          display: block;
        }
        .item_text {
          padding-top: 42px;
          padding-left: 46px;
          padding-right: 20px;
          p:nth-child(1) {
            color: #020d26;
          }
          p:nth-child(2) {
            color: #6b6a69;
          }
        }
      }
    }
    .core_more {
      width: 74px;
      height: 74px;
      background: #ffffff;
      border: 1px solid #454545;
      border-radius: 50%;
      line-height: 66px;
      font-family: SourceHanSansCN-Normal;
      left: 50%;
      bottom: -33px;
      transform: translateX(-50%);
      user-select: none;
      cursor: pointer;
    }
  }
</style>