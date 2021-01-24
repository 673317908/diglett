<template>
  <div>
    <div class="need_form">
      <el-form
        :inline="true"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="needDesc">
          <el-input
            type="text"
            placeholder="请用一句话描述 您的需求  例如:商城APP"
            v-model="ruleForm.needDesc"
            maxlength="20"
            show-word-limit
            style="width: 380px"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="联系电话"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="联系人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getProject('ruleForm')"
            >立即免费获取报价方案</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validate_mobile } from "../../../utils/validator"
export default {
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
        needDesc: "",
        mobile: "",
        name: "",
      },
      rules: {
        needDesc: [
          { required: true, message: "请输入您的需求描述", trigger: "blur" },
        ],
        mobile: [
          { required: true,validator:validate_mobile_rules, trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入联系人", trigger: "blur" }],
      },
    };
  },
  methods: {
    getProject(formName) {
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

<style scoped>
</style>