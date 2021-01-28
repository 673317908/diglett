<template>
  <div class="header ps_r">
    <div class="header_box flex w al_c sp_b pad_20">
      <div class="header_box_l flex al_c">
        <div class="logo ma_r_34">
          <img src="../../assets/images/home_slices/logo.png" alt />
        </div>
        <div class="nav ps_r">
          <div class="nav_list flex">
            <div
              v-for="(item, index) in navArr"
              :key="item.id"
              class="nav_item pad_l_10 pad_r_25 fs_22"
              :class="activeIndex === index ? 'active_css' : ''"
              ref="nav_item"
              @click="activeNav(item, index)"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="header_box_r flex al_c">
        <div
          class="QQ-contact flex al_c pad_r_5 pad_l_5 pad_t_8 pad_b_8 ma_r_20"
        >
          <img src="../../assets/images/home_slices/qq.png" alt />
          <span class="fs_18 ma_l_3">联系我们</span>
        </div>
        <div class="Watch-contact flex al_c pad_r_5 pad_l_5 pad_t_8 pad_b_8">
          <img src="../../assets/images/home_slices/wechat.png" alt />
          <span class="fs_18 ma_l_3">微信联系</span>
        </div>
      </div>
    </div>
    <template v-if="isShow">
      <div class="header_product pad_t_28 pad_b_28 ps_a">
        <template v-if="productShow">
          <div class="product_list flex al_c mini_w">
            <div
              class="product_item flex al_c jcc fl_d ma_r_10 text_c pad_t_22 pad_b_20"
              v-for="(item, index) in productArr"
              :key="index"
              @click="activeProduct(item)"
            >
              <div
                class="product_item_img pad_t_5 pad_b_5 pad_r_14 pad_l_14 ma_b_10"
              >
                <!-- <img :src="item.imgUrl" alt class /> -->
              </div>
              <p class="fs_18">{{ item.text }}</p>
            </div>
          </div>
        </template>
        <template v-if="aboutShow">
          <div class="about_list mini_w">
            <ul class="flex al_c">
              <li
                @click="activeAbout(item, index)"
                class="fs_18 ma_r_28"
                :class="aboutIndex === index ? 'active_css' : ''"
                v-for="(item, index) in aboutArr"
                :key="item.id"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </template>
      </div>
    </template>
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
          path: "/home",
        },
        {
          id: 2,
          text: "产品介绍",
        },
        {
          id: 3,
          text: "解决方案",
          path:"/solve"
        },
        {
          id: 4,
          text: "项目案例",
          path: "/project",
        },
        {
          id: 5,
          text: "新闻资讯",
          path: "/news",
        },
        {
          id: 6,
          text: "关于我们",
        },
      ],
      productArr: [
        {
          imgUrl: require("../../assets/images/home_slices/app.png"),
          text: "APP开发",
          path: "/app",
        },
        {
          imgUrl: require("../../assets/images/home_slices/wxapp.png"),
          text: "小程序开发",
        },
        {
          imgUrl: require("../../assets/images/home_slices/wechat2.png"),
          text: "微信开发",
          path: "/wechat",
        },
        {
          imgUrl: require("../../assets/images/home_slices/system.png"),
          text: "系统开发",
          path: "/system",
        },
        {
          imgUrl: require("../../assets/images/home_slices/web.png"),
          text: "网站开发",
          path: "/web",
        },
      ],
      aboutArr: [
        {
          id: 1,
          text: "公司动态",
          path: "/about",
        },
        {
          id: 2,
          text: "企业文化",
          path: "/culture",
        },
        {
          id: 3,
          text: "联系我们",
          path: "/contact",
        },
      ],
      isShow: false,
      productShow: false,
      aboutShow: false,
      activeWidth: 0,
      activeIndex: 0,
      aboutIndex: 0,
    };
  },
  mounted() {
  },
  methods: {
    activeNav(item, index) {
      this.activeIndex = index;
      if (index == 1 || index == 5) {
        this.isShow = true;
        this.productShow = index == 1 ? true : false;
        this.aboutShow = index == 5 ? true : false;
      } else {
        this.isShow = false;
      }
      if (item.path) {
        this.$router.push({ path: item.path });
      } else {
        return false;
      }
    },
    activeProduct(item) {
      if (item.path) {
        this.$router.push({ path: item.path });
        this.isShow = false;
      } else {
        return false;
      }
    },
    activeAbout(item, index) {
      this.aboutIndex = index;
      if (item.path) {
        this.$router.push({ path: item.path });
        this.isShow = false;
      } else {
        return false;
      }
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
      // margin-left: 25%;
      .product_item {
        user-select: none;
        cursor: pointer;
        width: 226px;
        background: #f0f0f0;
        color: #535353;
        .product_item_img {
          background: white;
          width: 58px;
          height: 41px;
          border-radius: 50%;
          padding: 12px 10px 11px;
          img {
            width: 36px;
            margin: 0 auto;
          }
        }
        &:hover {
          .product_item_img {
            background: #dab866;
          }
          // p {
          //   margin-top: 30px;
          // }
        }
      }
    }
    .about_list {
      margin-left: 50%;
      color: #353535;
      li {
        user-select: none;
        cursor: pointer;
        &:hover {
          color: #00a0e9;
        }
      }
    }
  }
}
.active_css {
  color: #00a0e8;
}
</style>