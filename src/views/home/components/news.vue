<template>
  <div>
    <div class="news">
      <TitleTow :titleSetting="newsTitleSetting" />
      <div class="news_box mini_w">
        <div class="news_content flex">
          <div class="news_item_l ps_r ma_r_9">
            <img
              src="https://n.sinaimg.cn/fashion/transform/610/w260h350/20210126/75f7-kicwvzq5573917.jpg"
              alt
              class="bg"
            />
            <div class="news_info flex ps_a sp_b al_c pad_t_27 pad_b_27 pad_l_17 pad_r_28">
              <div class="news_info_text">
                <p
                  class="fs_22 fw_700 text_over_2 text_over"
                >互联网营销，商战是核战互联网营销商互联网营销，商战是核战互联网营销商互联网营销，商战是核战互联网营销商</p>
              </div>
              <img src="../../../assets/images/home_slices/right2.png" alt />
            </div>
          </div>
          <div class="news_list flex fl_w">
            <div
              class="news_item pad_t_44 pad_r_20 pad_l_20 pad_b_16 ma_r_9 ma_b_10"
              v-for="item in 4"
              :key="item"
            >
              <div class="news_title ma_b_22">
                <p class="fs_20 text_over_1 text_over">互联网营销，商战是核战</p>
              </div>
              <div class="news_desc pad_b_20">
                <p
                  class="fs_14 text_over_2 text_over"
                >互联网营销，商战是核战互联网营销，商战是核战互联网营销，商战是核战互联网营销商战是核战互联网营销商战是核战互联网营销，商战是核战</p>
              </div>
              <div class="news_footer flex sp_b al_c ma_t_28">
                <div class="news_date">
                  <p class="fs_26 ma_b_7">22</p>
                  <p class="fs_16">2021-01</p>
                </div>
                <img src="../../../assets/images/home_slices/right2.png" alt />
              </div>
            </div>
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
    TitleTow
  },
  data() {
    return {
      newsTitleSetting: {
        en: "NEWS",
        ch: "新闻中心",
        tips: "COMPANY NEWS CENTER",
        lineColor: "#959595"
      }
    };
  }
};
</script>

<style scoped lang='less'>
.news {
  padding: 80px;
  background: #eeeeee;
  .news_box {
    margin-top: 60px;
    .news_item_l {
      flex:1;
      width: 382px;
      .bg {
        width: 100%;
      }
      .news_info {
        width: 360px;
        background: white;
        bottom: 20px;
        left: 12px;
        .news_info_text {
          width: 230px;
        }
        img {
          width: 25px;
          cursor: pointer;
        }
      }
    }
    .news_list {
      flex: 2;
      .news_item {
        background: white;
        width: 382px;
        &:nth-child(2n + n) {
          margin-right: 0;
        }
        &:hover .news_title,
        &:hover .news_desc {
          color: #dab866;
        }
        .news_title {
          color: #222222;
        }
        .news_desc {
          color: #666666;
          border-bottom: 2px solid #eeeeee;
        }
        .news_footer {
          img {
            width: 25px;
            cursor: pointer;
          }
          p:nth-child(1) {
            color: #333333;
          }
          p:nth-child(2) {
            color: #888888;
          }
        }
      }
    }
  }
}
</style>