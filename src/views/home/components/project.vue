<template>
  <div ref="project">
    <div class="project pad_40 ma_t_50">
      <div class="project_box mini_w ps_r">
        <TitleOne :titleSetting="projectTitleSetting" />
        <div class="project_list flex al_c">
          <template v-for="item in projectArr">
            <div
              class="project_item ma_r_20"
              v-if="item.id != 1"
              :key="item.id"
            >
              <div class="project_img ps_r">
                <img :src="item.imgUrl" class="ps_a" />
                <img :src="item.bgUrl" />
              </div>
              <div class="project_content pad_t_30 pad_b_30 pad_l_15 pad_r_15">
                <p class="fs_22 fw_700 text_c">{{ item.content }}</p>
              </div>
            </div>
            <div class="project_item_alone ma_r_20 ps_r" v-else :key="item.id">
              <div class="project_img ps_a">
                <img :src="item.imgUrl" />
              </div>
              <img :src="item.bgUrl" />
              <div class="project_content ps_a">
                <p class="fs_22 fw_700">{{ item.title }}</p>
                <p class="text_c ma_t_26">{{ item.content }}</p>
              </div>
            </div>
          </template>
        </div>
        <div class="project_more ps_a text_c fs_42" @click="checkMore">+</div>
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
      projectTitleSetting: {
        en: "SOLUTION",
        ch: "解决方案",
        tips: "结合多年开发经验及市场深度调研，需求整合，制定开发方案",
        enColor: "#FFFFFF",
        tipsColor: "#FFFFFF",
      },
      projectArr: [
        {
          id: 1,
          title: "电商+直播解决方案",
          content:
            "对不同消费业务场景，进行创新营销，提升用户粘性，实现流量变现，提供成熟的技术框架和技术维护支持等服务方案。",
          imgUrl: require("../../../assets/images/home_slices/dengpao@2x.png"),
          bgUrl: require("../../../assets/images/home_slices/tuoyuan683@2x.png"),
        },
        {
          id: 2,
          content: "移动APP解决方案",
          imgUrl: require("../../../assets/images/home_slices/tuceng2@2x.png"),
          bgUrl: require("../../../assets/images/home_slices/yuanjiaojuxing1@2x.png"),
        },
        {
          id: 3,
          content: "智能硬件解决方案",
          imgUrl: require("../../../assets/images/home_slices/jinghuaqi@2x.png"),
          bgUrl: require("../../../assets/images/home_slices/zhineng@2x.png"),
        },
        {
          id: 4,
          content: "OA/CRM解决方案",
          imgUrl: require("../../../assets/images/home_slices/tuceng1@2x.png"),
          bgUrl: require("../../../assets/images/home_slices/oa.png"),
        },
        {
          id: 5,
          content: "美食解决方案",
          imgUrl: require("../../../assets/images/home_slices/meishi@2x.png"),
          bgUrl: require("../../../assets/images/home_slices/meishi2@2x.png"),
        },
      ],
    };
  },
  methods: {
    // 查看更多
    checkMore() {
      this.$router.push({ path: "/project" });
    },
  },
};
</script>

<style scoped lang='less'>
.project {
  background: url("../../../assets/images/home_slices/juxing2@2x.png")
    no-repeat;
  .project_list {
    margin-bottom: 66px;
    .project_item {
      width: 222px;
      margin-top: 110px;
      img:first-child {
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
      }
      .project_content {
        background: white;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
    .project_item_alone {
      margin-top: 55px;
      .project_img {
        top: 8%;
        left: 50%;
        transform: translateX(-50%);
      }
      .project_content {
        width: 172px;
        top: 35%;
        left: 11%;
        color: white;
      }
    }
  }
  .project_more {
    width: 74px;
    height: 74px;
    background: #ffffff;
    border: 1px solid #454545;
    border-radius: 50%;
    line-height: 66px;
    font-family: SourceHanSansCN-Normal;
    left: 50%;
    transform: translateX(-50%);
    user-select: none;
    cursor: pointer;
  }
}
</style>