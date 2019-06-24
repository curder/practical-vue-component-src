import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SmoothScrolling from "./views/SmoothScrolling.vue";
import ContextMenus from "./views/ContextMenus.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/smooth-scrolling",
      name: "smooth-scrolling",
      component: SmoothScrolling
    },
    {
      path: "/context-menus",
      name: "context-menus",
      component: ContextMenus
    }
  ]
});
