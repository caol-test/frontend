import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/consultants",
    name: "Consultants",
    component: () => import("@/views/Consultants"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/404"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
