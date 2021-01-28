<template>
  <div>
    <div class="grade pad_40">
      <div class="grade_box mini_w">
        <TitleTow :titleSetting="gradeTitleSetting" />
        <div class="grade_swiper flex ps_r">
          <div class="grade_swiper_left ps_a">
            <img src="../../../assets/images/home_slices/left.png" alt="" />
          </div>
          <div class="grade_swiper_list flex jcc">
            <div
              class="grade_swiper_item ps_r ma_r_25"
              v-for="item in 3"
              :key="item"
            >
              <img src="../../../assets/images/home_slices/duobianxing.png" alt="" />
              <div class="grade_swiper_item_content ps_a">
                <div
                  class="grade_swiper_item_header flex al_c sp_b ma_b_26 ma_t_32 ma_r_19 ma_l_19"
                >
                  <p class="fw_700 fs_22">格里用户评价</p>
                  <p class="fs_16" style="color: #f9b253">★★★★★</p>
                </div>
                <div class="grade_swiper_item_main ma_t_32 ma_r_19 ma_l_19">
                  <p class="fs_14">
                    从最初的不信任，到逐渐了解这家公司，通过看了他们很多案例，深入了解、放心把项目交给他们做，这个期间他们团队的态度非常专业，也很有耐心，网站建设
                    的项目交付非常快，这点我们非常满意！
                  </p>
                </div>
              </div>
              <div class="grade_swiper_item_footer">
                <img
                  src="../../../assets/images/home_slices/tuceng694@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="grade_swiper_right ps_a">
            <img src="../../../assets/images/home_slices/right.png" alt="" />
          </div>
        </div>
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
      gradeTitleSetting: {
        en: "EVALUATE",
        ch: "口碑评价",
        tips: "CUSTOMER WORD OF MOUTH EVALUATION",
        color: "white",
        lineColor: "white",
      },
    };
  },
};
</script>

<style scoped lang='less'>
  .grade {
    background: url("../../../assets/images/home_slices/zu59@2x.png") no-repeat;
    .grade_swiper {
      margin-top: 80px;
      .grade_swiper_left,
      .grade_swiper_right {
        width: 44px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        img {
          width: 44px;
        }
      }
      .grade_swiper_left {
        left: -80px;
      }
      .grade_swiper_right {
        right: -80px;
      }
      .grade_swiper_list {
        width: 100%;
      }
      .grade_swiper_item {
        width: 335px;
        .grade_swiper_item_content {
          top: 0px;
          .grade_swiper_item_main {
            color: #666666;
          }
        }
        .grade_swiper_item_footer {
          border-radius: 50%;
          width: 82px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>