<template>
  <div class="footer">
    <div class="footer_box">
      <div class="footer_box_top flex al_c">
        <div class="logo flex al_c">
          <img src="../../assets/images/home_slices/logo.png" alt="">
        </div>
        <div class="qrcode flex al_c">qrcode</div>
      </div>
      <div class="footer_box_bottom flex">
        <div class="nav flex pad_t_40">
          <div class="nav_item" v-for="(item, index) in navArr" :key="index">
            <p class="title fw_600 fs_18">{{ item.title }}</p>
            <p class="ma_t_17 ma_b_17 fw_600" style="color: white">—</p>
            <ul v-if="item.children.length > 0">
              <li
                v-for="item2 in item.children"
                :key="item2.id"
                class="ma_b_25 fs_14"
              >
                {{ item2.text }}
              </li>
            </ul>
          </div>
        </div>
        <div class="info pad_l_40 pad_t_30">
          <div class="address">
            <p class="pad_b_15 fs_14">地址</p>
            <p class="fs_16">广东省广州市天河区&nbsp;黄埔大道中羊城创意园2-1203</p>
          </div>
          <div class="contact">
            <p class="pad_b_15 fs_14">联系我们</p>
            <p class="fs_16">(0571)&nbsp;8710&nbsp;3999</p>
          </div>
        </div>
      </div>
      <div class="footer_number flex al_c sp_b pad_t_50 pad_b_50 fs_14">
          <p>COPYRIGHT&nbsp;@&nbsp;2020&nbsp;SHUANGHUAN&nbsp;TRANSMISSION&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED.&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED.</p>
          <p>浙ICP备10039258号</p>
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
          title: "关于我们",
          children: [
            {
              id: 11,
              text: "关于我们",
              path: "",
            },
            {
              id: 12,
              text: "招聘",
              path: "",
            },
            {
              id: 13,
              text: "联系我们",
              path: "",
            },
            {
              id: 71,
              text: "关于我们",
              path: "",
            },
            {
              id: 42,
              text: "招聘",
              path: "",
            },
            {
              id: 109,
              text: "联系我们",
              path: "",
            },
          ],
        },
        {
          id: 2,
          title: "关于我们",
          children: [
            {
              id: 21,
              text: "关于我们",
              path: "",
            },
            {
              id: 22,
              text: "招聘",
              path: "",
            },
            {
              id: 23,
              text: "联系我们",
              path: "",
            },
          ],
        },
        {
          id: 3,
          title: "关于我们",
          children: [
            {
              id: 31,
              text: "关于我们",
              path: "",
            },
            {
              id: 32,
              text: "招聘",
              path: "",
            },
            {
              id: 33,
              text: "联系我们",
              path: "",
            },
          ],
        },
        {
          id: 4,
          title: "关于我们",
          children: [
            {
              id: 41,
              text: "关于我们",
              path: "",
            },
            {
              id: 42,
              text: "招聘",
              path: "",
            },
            {
              id: 43,
              text: "联系我们",
              path: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
.footer {
  background: #222328;
  font-family: MicrosoftYaHei;
  .footer_box {
    width: 1080px;
    margin: 0 auto;
    .footer_box_top {
        border-bottom: 2px solid #434448;

      .logo {
        width: 820px;
        border-right: 2px solid #434448;
        padding: 60px 0;
        img {
          width: 140px;
        }
      }
      .qrcode {
        width: 260px;
        padding: 45px 40px;
      }
    }
    .footer_box_bottom {
      border-bottom: 2px solid #434448;
      .nav {
        width: 820px;
        border-right: 2px solid #434448;
        .nav_item {
          margin-right: 164px;
          .title {
            color: white;
          }
          ul {
            li {
              user-select: none;
              color: #8b8e93;
              cursor: pointer;
            }
          }
        }
        .nav_item:last-child {
          margin-right: 0;
        }
      }
      .info {
        width: 260px;
        .address {
          margin-bottom: 80px;
          p:first-child{color: white;}
          p:last-child{color: #8b8e93;}
        }
        .contact {
          p:first-child{color: white;}
          p:last-child{color: #8b8e93;}
        }
      }
    }
    .footer_number {
        color: #8b8e93;
    }
  }
}
</style>