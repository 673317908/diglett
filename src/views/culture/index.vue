<template>
  <div>
    <div class="culture">
      <div class="culture_box mini_w">
        <div class="culture_title fs_36 fw_700 ma_b_30 text_c">
          <p>企业文化</p>
        </div>
        <div class="culture_img">
          <img
            src="../../assets/images/culture_slices/tuceng572@2x.png"
            alt=""
          />
        </div>
        <div class="culture_list flex ma_t_21">
          <div
            class="culture_item ps_r text_c ma_r_20"
            v-for="item in 3"
            :key="item"
          >
            <img
              src="../../assets/images/culture_slices/juxing192@2x.png"
              alt=""
            />
            <div class="culture_content ps_a">
              <p class="fs_26 fw_700 ma_b_12">地鼠使命</p>
              <p class="fs_14">专注每一款产品研发 致力为产品赋予灵魂</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="team_box mini_w">
        <div class="team_title text_c ma_b_40">
          <p class="fs_36 fw_700 ma_b_8">我们的团队</p>
          <p class="fs_26">OUR TEAM</p>
        </div>
        <div class="team_list flex fl_w">
          <div
            class="team_item ma_r_25 ma_b_30 pad_r_20 pad_l_20 pad_b_24 text_c"
            v-for="item in 6"
            :key="item"
          >
            <div class="team_info ps_r">
              <div class="team_img ps_a">
                <img
                  src="../../assets/images/home_slices/tuceng694@2x.png"
                  alt=""
                />
              </div>
              <div class="team_name">
                <p class="fw_700 fs_32 ma_b_10">Tony</p>
                <p class="fs_18">技术总监</p>
              </div>
            </div>
            <div class="team_desc fs_14 ma_t_20">
              <p>
                有丰富的项目实战+管理经验，擅长攻克技术难点，带领团队全面推动技术与创新能力、提升用户体验，活跃在技术开发一线，获阿里云MVP认证。主导过东风日产、中国电信、好莱客、禾葡兰、南方网通等多家知名企业的信息化建设，在汽车、电商、通讯、医疗、云计算等多个领域有出色的表现。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="describe">
      <div class="describe_box mini_w text_c">
        <div class="describe_title fs_60 ma_b_34 fw_700">
          <p>地鼠科技精英团队</p>
        </div>
        <div class="describe_content fs_26">
          <p class="ma_b_15">力求用最专业的技术和服务</p>
          <p class="ma_b_15">为全国客户提供更精准高效的一站式互联网产品设计开发方案</p>
          <p class="ma_b_15">为企业品牌赋能！</p>
        </div>
        <div class="describe_footer pad_t_22">
          <p>HAMSTER TECHNOLOGY ELITE TEAM STRIVE TO USE THE MOST PROFESSIONAL TECHONOLGY AND SERVICETO PROVIDE MORE ACCURATE AND EFFICIENT ONE-STOP INTERNET PRODUCT DESIGN</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import aa from ""
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
.culture {
  background: url("../../assets/images/about_slices/tuceng560@2x.png");
  padding-top: 70px;
  padding-bottom: 85px;
  .culture_title {
    width: 1200px;
    color: #222222;
  }
  .culture_img {
    width: 1200px;
    margin: 0 auto 20 auto;
    img {
      width: 100%;
    }
  }
  .culture_item {
    color: white;
    .culture_content {
      width: 128px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:nth-child(3) {
      margin-right: 0;
    }
  }
}
.team {
  background: white;
  padding-top: 78px;
  padding-bottom: 46px;
  .team_title {
    p:nth-child(1) {
      color: #222222;
    }
    p:nth-child(2) {
      color: #bcbcbc;
    }
  }
  .team_item {
    width: 380px;
    background: white;
    border: 1px solid #adadad;
    padding-top: 120px;
    &:hover {
      outline: 4px solid #00a0e9;
    }
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    .team_info {
      width: 110px;
      border-radius: 5px;
      background: #00a0e9;
      padding-top: 56px;
      padding-bottom: 15px;
      margin: 0 auto;
      .team_img {
        width: 155px;
        border-radius: 50%;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 100%;
        }
      }
      .team_name {
        color: white;
      }
    }
    .team_desc {
      color: #666666;
    }
  }
}
.describe {
  background: url("../../assets/images/culture_slices/juxing4@2x.png") no-repeat;
  background-size:100% 100%;
  padding-top: 156px;
  padding-bottom: 132px;
  color: white;
  .describe_footer {
    margin-top: 105px;
    border-top: 2px solid white;

  }
}
</style>
