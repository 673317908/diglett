<template>
  <div class="header ps_r">
    <div class="header_box flex w al_c sp_b pad_20">
      <div class="header_box_l flex al_c">
        <div class="logo ma_r_34">
          <img src="../../assets/images/地鼠首页/图层 531.png" alt="" />
        </div>
        <div class="nav ps_r">
          <div class="nav_list flex">
            <div
              v-for="(item, index) in navArr"
              :key="item.id"
              class="nav_item pad_l_10 pad_r_25 fs_22"
              :class="activeIndex === index ? 'active_css' : ''"
              ref="nav_item"
              @click="activeNav(index)"
            >
              {{ item.text }}
            </div>
          </div>
          <!-- <div
            class="nav_line ps_a"
            :style="'left:' + left + 'px;width:' + width + 'px;'"
          ></div> -->
          <!-- <div class="nav_line ps_a" :style="lineSite"></div> -->
        </div>
      </div>
      <div class="header_box_r flex al_c">
        <div class="QQ-contact flex al_c pad_r_5 pad_l_5 pad_t_8 pad_b_8 ma_r_20">
          <img src="../../assets/images/地鼠首页/形状 1.png" alt="">
          <span class="fs_18 ma_l_3">联系我们</span>
        </div>
        <div class="Watch-contact flex al_c  pad_r_5 pad_l_5 pad_t_8 pad_b_8">
          <img src="../../assets/images/地鼠首页/形状 2.png" alt="">
          <span class="fs_18 ma_l_3">微信联系</span>
        </div>
      </div>
    </div>
    <div
      class="header_product pad_t_20 pad_b_20 ps_a"
      :class="activeIndex === 1 ? '' : 'product_css'"
    >
      <div class="product_list flex al_c">
        <div
          class="product_item ma_r_10 text_c"
          v-for="(item, index) in productArr"
          :key="index"
        >
          <div
            class="product_item_img pad_t_5 pad_b_5 pad_r_14 pad_l_14 flex al_c jcc"
          >
            <img :src="item.imgUrl" alt="" class="" />
          </div>
          <p class="fs_18">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        {
          id: 1,
          text: "首页",
        },
        {
          id: 2,
          text: "产品介绍",
        },
        {
          id: 3,
          text: "项目案例",
        },
        {
          id: 4,
          text: "新闻资讯",
        },
        {
          id: 5,
          text: "关于我们",
        },
      ],
      productArr: [
        {
          imgUrl: require("../../assets/images/地鼠首页/app开发.png"),
          text: "APP开发",
        },
        {
          imgUrl: require("../../assets/images/地鼠首页/小程序.png"),
          text: "小程序开发",
        },
        {
          imgUrl: require("../../assets/images/地鼠首页/微信开发.png"),
          text: "微信开发",
        },
        {
          imgUrl: require("../../assets/images/地鼠首页/小程序开发.png"),
          text: "系统开发",
        },
        {
          imgUrl: require("../../assets/images/地鼠首页/网站开发.png"),
          text: "网站开发",
        },
      ],
      activeWidth: 0,
      activeIndex: 0,
    };
  },
  computed: {
    // lineSite() {
    //   let lineStyle = {
    //     left: this.activeWidth * 2 + "px",
    //     transition: "all .3s ease-in",
    //   };
    //   return lineStyle;
    // },
  },
  methods: {
    activeNav(index) {
      this.activeWidth = this.$refs.nav_item[index].offsetWidth;
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang='less'>
.header {
  background: white;
  .header_box {
    .logo {
      width: 190px;
      img {
        width: 100%;
      }
    }
    .nav_item {
      user-select: none;
      cursor: pointer;
      &:hover {
        color: #00a0e8;
      }
    }
    .nav_line {
      height: 3px;
      background: #00a0e8;
      bottom: -25px;
    }
    .QQ-contact,
    .Watch-contact {
      background: #00a0e8;
      border-radius: 22px;
      color: white;
      user-select: none;
      cursor: pointer;
    }
  }
  .header_product {
    background: #effafe;
    width: 100%;
    z-index: 99;
    transition: all 1s ease;
    .product_list {
      margin-left: 25%;
      .product_item {
        user-select: none;
        cursor: pointer;
        transition: all 0.3s ease;
        p {
          margin-top: 15px;
        }
        .product_item_img {
          background: white;
          width: 58px;
          height: 41px;
          transition: all 1s ease;
          img {
            width: 100%;
            margin: 0 auto;
          }
        }
        &:hover {
          .product_item_img {
            box-shadow: 0px 1px 7px 1px rgba(0, 69, 101, 0.22);
            transform: translateY(-5px);
          }
          // p {
          //   margin-top: 30px;
          // }
        }
      }
    }
  }
}
.active_css {
  color: #00a0e8;
}
.product_css {
  opacity: 0;
  overflow: hidden;
  display: none;
}
</style>