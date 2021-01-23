<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
export default {
  data() {
    return {};
  },
  components: {
    Header,Footer
  },
};
</script>

<style scoped>
</style>