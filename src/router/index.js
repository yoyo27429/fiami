import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/task",
    name: "Task",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Task.vue")
  },
  {
    path: "/vip",
    name: "VIP",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vip.vue")
  },
  {
    path: "/member",
    name: "Member",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Member.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
