import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Home"
  },
  {
    path: "/index",
    name: "Index",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import("../views/home/index.vue")
      },
      {
        path: "/project",
        name: "Project",
        component: () =>
          import("../views/project/index.vue")
      },
      {
        path: "/news",
        name: "News",
        component: () =>
          import("../views/news/index.vue")
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
