<template>
  <div class="project">
    <div class="banner">
      <img src="../../assets/images/行业案例_slices/banner1@2x.png" alt="" />
    </div>
    <div class="filter pad_t_20 pad_b_20">
      <div class="filter_list mini_w flex al_c">
        <span class="fs_20">行业：</span>
        <div
          class="filter_item fs_20 pad_t_5 pad_b_5 pad_l_14 pad_r_14 ma_r_20"
          v-for="item in filterItemArr"
          :key="item.id"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="project_center">
      <div class="project_list mini_w flex fl_w">
        <div class="project_item ma_b_24 ps_r" v-for="item in 11" :key="item">
          <img
            src="../../assets/images/行业案例_slices/色相／饱和度 2@2x.png"
            alt=""
          />
          <div class="project_item_title ps_a">
            <p class="fs_46 fw_700">APP</p>
            <p class="fs_18">DONGFENG</p>
            <div class="line ma_t_24"></div>
            <img
              class="ma_t_23"
              src="../../assets/images/行业案例_slices/手机 (3)@2x.png"
              alt=""
            />
          </div>
          <div class="project_item_content pad_t_30 pad_l_4 pad_b_22 pad_r_17">
            <div class="project_item_content_title flex sp_b al_c ma_b_16">
              <p class="fs_26 fw_700">东风日产</p>
              <p class="fs_16">2018/01/04</p>
            </div>
            <div class="project_item_content_info">
              <p class="fs_16">东风日产奕炫东风日产奕炫东风日产奕炫</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project_more">
        <img
          src="../../assets/images/行业案例_slices/组 67 拷贝@2x.png"
          alt=""
        />
        <p class="fs_26 ma_t_15">下滑查看更多</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterItemArr: [
        {
          id: 1,
          text: "全部",
        },
        {
          id: 2,
          text: "商城",
        },
        {
          id: 3,
          text: "App",
        },
        {
          id: 4,
          text: "微信",
        },
        {
          id: 5,
          text: "品牌官网",
        },
        {
          id: 6,
          text: "网站",
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
.project {
  font-family: MicrosoftYaHei;
  .banner {
    img {
      width: 100%;
    }
  }
  .filter {
    background: #ffffff;
    box-shadow: 0px 2px 0px 0px #cacaca;
    .filter_item {
      background: #dab866;
      border-radius: 10px;
      color: white;
    }
  }
  .project_center {
    background: #f0f0f0;
    padding: 60px 0;
    .project_list {
      .project_item {
        width: 290px;
        background: #ffffff;
        transition: all 0.3s ease;
        margin-right: 10px;
        .project_item_title {
          top: 62px;
          left: 20px;
          z-index: 99;
          color: white;
          img {
            width: 36px;
          }
          .line {
            width: 44px;
            height: 4px;
            background: #ffffff;
          }
        }
        .project_item_content {
          background: white;
          .project_item_content_title {
            p:nth-child(1) {
              color: #333331;
            }
            p:nth-child(2) {
              color: #888;
            }
          }
          .project_item_content_info {
            color: #666666;
          }
        }
        img {
          width: 100%;
        }
        &:hover {
          box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.38);
        }
        &:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
    }
    .project_more {
      color: #797979;
      font-family: SourceHanSansCN-Normal;
      width: 160px;
      margin: 48px auto 52px auto;
      img {
        width: 50px;
        margin: 0 auto;
      }
    }
  }
}
</style>