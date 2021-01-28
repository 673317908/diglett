<template>
  <div class="news">
    <div class="banner ma_b_28">
      <img src="../../assets/images/company_slices/banner@2x.png" alt="" />
    </div>
    <div class="news_list mini_w pad_t_20 pad_b_34 ma_b_40">
      <div class="news_nav flex jcc al_c pad_b_16">
        <div
          class="news_nav_item fs_16 pad_t_11 pad_r_28 pad_b_11 pad_l_28 ma_r_35"
          :class="activeIndex === index ? 'active_css' : ''"
          v-for="(item, index) in navArr"
          :key="item.id"
          @click="handleNav(index)"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="news_content_list pad_l_32 pad_r_32">
        <div
          class="news_item flex ma_t_28 ma_b_28 pad_b_28"
          v-for="item in 6"
          :key="item"
        >
          <div class="news_item_l ma_r_11">
            <img
              src="../../assets/images/company_slices/tuceng39@2x.png"
              alt=""
            />
          </div>
          <div class="news_item_r">
            <div class="news_item_title fs_18 ma_b_17">
              个性化定制的OA办公管理系统如何赋能行业发展？能实现什么功能？
            </div>
            <div class="news_item_number">
              <img
                src="../../assets/images/company_slices/tuceng558@2x.png"
                alt=""
                class="ma_r_4"
              />
              <span class="fs_12">浏览量: 3259</span>
              <span class="fs_12 ma_r_6 ma_l_6">|</span>
              <span class="fs_12">2016-09-26</span>
            </div>
            <div class="news_item_info">
              <p class="fs_14 ma_b_16">
                大多数企业人员都知道，OA办公管理系统是企业管理不可缺少的管理系统，在市面上，OA系统大致分为两种，一类是通用版OA系统，一类是定制版OA系统。定制化的OA办公管理软件，是针对客户的个性化需求和管理开发的，因此相比通用版来说，定制OA办公管理系统能更加适配企业的经营需求。
              </p>
            </div>
            <div
              class="news_item_detail fs_14 pad_t_8 pad_l_12 pad_b_8 pad_r_12"
            >
              <p>查看详情>></p>
            </div>
          </div>
        </div>
      </div>
      <div class="news_page pad_l_30 flex al_c ps_r">
        <div class="news_page_total">
          <p class="fs_12">共10页 共120条信息</p>
        </div>
        <el-pagination
          prev-text="上一页"
          next-text="下一页"
          background
          layout="prev, pager, next"
          :total="1000"
          class="ps_a"
          style="left: 50%; transform: translateX(-50%)"
        >
        </el-pagination>
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
          text: "公司动态",
        },
        {
          id: 2,
          text: "行业资讯",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    handleNav(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang='less'>
@import url("../../styles/resetUi.css");
.banner {
  img {
    width: 100%;
  }
}
.news_list {
  background: #ffffff;
  box-shadow: 0px 0px 13px 0px rgba(215, 215, 215, 0.75);
  .news_nav {
    border-bottom: 2px solid #00a0e9;
  }
  .news_nav_item {
    border: 1px solid #00a0e9;
    color: #00a0e9;
    cursor: pointer;
    user-select: none;
  }
  .active_css {
    color: white;
    background: #00a0e9;
  }
  .news_item {
    border-bottom: 1px solid #e6e6e6;
    .news_item_l {
      img {
        width: 248px;
      }
    }
    .news_item_r {
      img {
        width: 15px;
      }
      .news_item_number {
        color: #969696;
      }
      .news_item_info {
        color: #646464;
      }
      .news_item_detail {
        border: 1px solid #00a0e9;
        user-select: none;
        cursor: pointer;
        width: 110px;
        &:hover {
          background: #00a0e9;
          color: white;
        }
      }
    }
  }
  .news_page {
    .news_page_total {
      color: #646464;
      //   flex: 1;
    }
  }
}
</style>