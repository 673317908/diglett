<template>
  <div class="header ps_r">
    <div class="header_box flex w al_c sp_b pad_20">
      <div class="header_box_l">
        <div class="logo"></div>
        <div class="nav ps_r">
          <div class="nav_list flex">
            <div
              v-for="(item, index) in navArr"
              :key="item.id"
              class="nav_item pad_l_10 pad_r_20 fs_18"
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
        <div class="QQ-contact pad_r_5 pad_l_5 pad_t_7 pad_b_7 ma_r_20">
          <span class="fs_16">联系我们</span>
        </div>
        <div class="Watch-contact pad_r_5 pad_l_5 pad_t_7 pad_b_7">
          <span class="fs_16">微信联系</span>
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
          <img
            src="../../../../fl_new_shop-dev/src/images/04.png"
            alt=""
            class=""
          />
          <p>{{ item.text }}</p>
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
          imgUrl: "",
          text: "APP开发",
        },
        {
          imgUrl: "",
          text: "小程序开发",
        },
        {
          imgUrl: "",
          text: "微信开发",
        },
        {
          imgUrl: "",
          text: "系统开发",
        },
        {
          imgUrl: "",
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
    z-index: 22;
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
    transition: all 1s ease;
    .product_list {
      margin-left: 19%;
      .product_item {
        user-select: none;
        cursor: pointer;
        transition: all .3s ease;
        p {
          margin-top: 15px;
        }
        img {
          width: 80px;
          transition: all 1s ease;
        }
        &:hover {
          img {
            box-shadow: 0px 0px 5px 1px #000000;
            margin-top: -15px;
          }
          p {
            margin-top: 15px;
          }
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
  z-index: -1;
}
</style>