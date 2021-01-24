import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "HomeIndex",
        component: () =>
          import("../views/home/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
