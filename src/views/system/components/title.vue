<template>
  <div>
    <div class="web_desc_title ps_r">
      <p class="fs_30 fw_700">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.web_desc_title {
  p {
    color: #00a0e9;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    bottom: -18px;
    width: 67px;
    height: 6px;
    background: #00a0e9;
  }
}
</style>
