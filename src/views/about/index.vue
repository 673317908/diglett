<template>
  <div>
    <div class="banner">
      <div class="banner_box flex sp_b">
        <div class="banner_img">
          <img
            src="../../assets/images/about_slices/tuceng559@2x.png"
            alt=""
          />
        </div>
        <div class="banner_content">
          <div class="title ma_b_40 flex sp_b al_c">
            <p class="fs_36 fw_700">关于我们</p>
            <img src="../../assets/images/about_slices/tuoyuan1@2x.png" alt="">
          </div>
          <div class="content fs_16">
            <p class="ma_b_20">
              广州地鼠科技有限公司-是国内领先的互联网+应用解决方案服务商10年实战开发经验，至今已拥有100+资深IT技术人员，50+行业技术顾问，服务过1000+家企事业单位，经过5000+项目的锤炼，获得国家高新技术企业认证、多项国家级软件著作权证书。
            </p>
            <p>
              「地鼠科技」长期服务于上市企业东风日产、本科院校广州工商学院先后为南方科技大学、花镇、法兰克福、澳门通等知名企事业单位提供专业的核心技术架构建设和重点模块研发服务，多次协助职能部门，为多个政府项目提供技术支撑，项目案例覆盖电商、直播、智能硬件、教育培训等领域，助力传统企业成功转型!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="reason">
      <div class="reason_box mini_w">
        <div class="reason_title text_c fw_700 ps_r ma_b_38">
          <p class="fs_48">WHY CHOOSE US?</p>
          <p class="fs_36">为什么选择我们</p>
        </div>
        <div class="reason_content text_c fs_22">
          <p>
            地鼠科技，专注于互联网创新模式软件开发，为多行业提供高效落地的一站式应用解决方案，多年核心技术沉淀，从创始至今，公司不断跃进蜕变，成功取得跨越性的斐然成就，并迅速成长为互联网行业内的技术型口碑公司之一。
          </p>
        </div>
      </div>
    </div>
    <div class="trait">
      <div class="trait_box mini_w">
        <div class="trait_list flex">
          <div class="trait_item text_c" v-for="item in 3" :key="item">
            <div class="trait_img pad_t_34 pad_r_35 pad_b_33 pad_l_35">
              <img
                src="../../assets/images/about_slices/ziyuan3mdpi@2x.png"
                alt=""
              />
            </div>
            <div class="trait_title">
              <p class="fs_32 fw_700">资深</p>
            </div>
            <div class="trait_content">
              <p class="fs_16">
                拥有100+资深IT技术人员，超80%
                的技术人员拥有6年以上开发经验，丰沛人才储备为客户提供坚实的保障
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="works">
      <div class="works_box mini_w">
        <div class="works_title text_c fw_700 ps_r ma_b_38">
          <p class="fs_48">SOFTWARE WORKS</p>
          <p class="fs_36">软件著作</p>
        </div>
        <div class="works_content text_c fs_20">
          <p>
            黑蜂科技是高新技术企业，多年深耕技术开发领域，软件项目著作权数量突破50个，荣获中国软件行业协会颁发的多个奖项。并与多所高校、事企业单位签署长期战略合作协议，成为广工商、南方科技大学的“最佳互联网供应商”
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.banner {
  background: url("../../assets/images/about_slices/tuceng560@2x.png");
  padding-top: 172px;
  padding-bottom: 86px;
  padding-right: 123px;
  padding-left: 250px;
  .banner_box {
    background: white;
    padding-top: 80px;
    padding-bottom: 78px;
    padding-right: 110px;
    width: 1400px;
    margin: 0 auto;
    .banner_img {
      margin-left: -120px;
      margin-top: -190px;
      img {
        width: 866px;
      }
    }
    .banner_content {
      margin-left: 60px;
      color: #353535;
    }
  }
}
.reason {
  background: white;
  padding-top: 102px;
  padding-bottom: 72px;
  .reason_title {
    color: #222222;
    p:nth-child(1) {
      color: #efefef;
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    p:nth-child(2) {
      position: relative;
      z-index: 7;
    }
  }
  .reason_content {
    color: #333333;
  }
}
.trait {
  background: url("../../assets/images/about_slices/tuceng564@2x.png")
    no-repeat;
  padding: 86px 0;
  .trait_item {
    width: 348px;
    margin-right: 60px;
    &:nth-child(3) {
      margin-right: 0;
    }
    .trait_img {
      width: 148px;
      border-radius: 50%;
      background: white;
      margin: 0 auto;
      img {
        width: 78px;
        margin: 0 auto;
      }
    }
    .trait_title {
      margin-top: 60px;
      margin-bottom: 44px;
      color: #333333;
    }
    .trait_content {
      color: #666666;
    }
  }
}
.works {
  background: #f4f4f4;
  padding-top: 52px;
  padding-bottom: 57px;
  .works_title {
    color: #222222;
    p:nth-child(1) {
      color: #efefef;
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    p:nth-child(2) {
      position: relative;
      z-index: 7;
      color: #666666;
    }
  }
  .works_content {
    width: 850px;
    margin: 0 auto;
  }
}
</style>
