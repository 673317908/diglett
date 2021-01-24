import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 重置样式
import "./styles/reset.css";
import "./styles/index.min.css";
// ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
