<template>
  <div>
    <div class="contact">
      <div class="title_box text_c fw_700 ps_r ma_b_38">
        <p class="fs_48">CONTACT US?</p>
        <p class="fs_36">联系我们</p>
      </div>
      <div class="map">
        <Map />
      </div>
      <div class="contact_way">
        <div class="contact_way_box">
          <div class="contact_way_info text_c flex pad_t_33 pad_b_33">
            <div class="contact_way_l">
              <p class="fs_24 ma_b_27">地址</p>
              <p class="fs_20">广东省广州市天河区黄浦大道中 羊城创意园2-1203</p>
            </div>
            <div class="contact_way_r">
              <p class="fs_24 ma_b_27">电话</p>
              <p class="fs_20">(0571) 8710 3999</p>
            </div>
          </div>
        </div>

        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="contact_form ma_t_20 flex mini_w">
            <div class="contact_form_l ma_r_38">
              <el-form-item prop="name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="您的名字"
                ></el-input>
              </el-form-item>
              <el-form-item prop="mobile">
                <el-input
                  v-model="ruleForm.mobile"
                  placeholder="您的电话"
                ></el-input>
              </el-form-item>
              <el-form-item prop="wechat">
                <el-input
                  v-model="ruleForm.wechat"
                  placeholder="您的微信（选填）"
                ></el-input>
              </el-form-item>
            </div>
            <div class="contact_form_r">
              <el-form-item prop="desc">
                <el-input
                  type="textarea"
                  :rows="5"
                  v-model="ruleForm.desc"
                  placeholder="请填写您的需求"
                  resize="none"
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="mini"
                  type="warning"
                  @click="submitForm('ruleForm')"
                  >确认提交</el-button
                >
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validate_mobile } from "../../utils/validator"
import Map from "./components/map"
export default {
  components:{Map},
  data() {
    // 检验手机号码
    const validate_mobile_rules = (rule, value, callback) => {
      let regMobile = validate_mobile(value);
      if (value === "") {
        callback(new Error("请输入联系电话"));
      } else if (!regMobile) {
        callback(new Error("电话号码格式不正确"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        mobile: "",
        wechat: "",
        desc: "",
      },
      rules: {
        desc: [
          { required: true, message: "请输入您的需求描述", trigger: "blur" },
        ],
        mobile: [
          { required: true, validator: validate_mobile_rules, trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入联系人", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
@import url("../../styles/resetUi.css");
.title_box {
  color: #222222;
  padding-top: 50px;
  padding-bottom: 53px;
  p:nth-child(1) {
    color: #efefef;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  p:nth-child(2) {
    position: relative;
    z-index: 7;
  }
}
.contact_way {
  background: url("../../assets/images/contact_slices/ff858317302cb0bc38bf40886ab5032a@2x.png");
  padding: 56px 0 63px 0;
  .contact_way_box {
    width: 1200px;
    margin: 0 auto;
    .contact_way_info {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      .contact_way_l {
        border-right: 2px solid white;
        width: 630px;
        p:nth-child(2) {
          width: 280px;
          margin: 0 auto;
        }
      }
      .contact_way_r {
        width: 530px;
      }
    }
  }
  .contact_form_l {
    flex: 1;
  }
  .contact_form_r {
    flex: 1;
  }
}
</style>
