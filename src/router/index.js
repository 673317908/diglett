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
      },
      {
        path: "/app",
        name: "App",
        component: () => import("../views/app/index.vue")
      },
      {
        path: "/wechat",
        name: "Wechat",
        component: () => import("../views/wechat/index.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/about/index.vue")
      },
      {
        path: "/culture",
        name: "Culture",
        component: () => import("../views/culture/index.vue")
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/contact/index.vue")
      },
      {
        path: "/web",
        name: "Web",
        component: () => import("../views/web/index.vue")
      },
      {
        path: "/system",
        name: "System",
        component: () => import("../views/system/index.vue")
      },
      {
        path: "/solve",
        name: "Solve",
        component: () => import("../views/solve/index.vue")
      }
    ]
  },
];

const router = new VueRouter({
  routes,
  // 指定该钩子函数，返回坐标值即可
  scrollBehavior(to, from, savedPosition) {

    return { x: 0, y: 0 }
  }
});

export default router;
