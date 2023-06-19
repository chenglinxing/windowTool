import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import("../views/home/index.vue")
  // },
  {
    path: "/",
    name: "home",
    component: () => import("../components/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/tools/index.vue"),
      },
      {
        path: "/exportTable",
        name: "exportTable",
        component: () => import("../views/exportTable/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
