import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SmoothScrolling from "./views/SmoothScrolling.vue";
import ContextMenus from "./views/ContextMenus.vue";
import ConditionVisibility from "./views/ConditionVisibility.vue";
import Modals from "./views/Modals.vue";
import ConfirmationDialog from "./views/ConfirmationDialog.vue";
import NumberCount from "./views/NumberCount.vue";
import Carousel from "./views/Carousel.vue";
import Faqs from './views/Faqs.vue';
import PinnedTop from './views/PinnedTop.vue';
import IndexSticky from './views/IndexSticky.vue';

Vue.use(Router);

export default new Router({
  mode: "hash",
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
    },
    {
      path: "/condition-visibility",
      name: "condition-visibility",
      component: ConditionVisibility
    },
    {
      path: "/modals",
      name: "modals",
      component: Modals
    },
    {
      path: "/confirmation-dialog",
      name: "confirmation-dialog",
      component: ConfirmationDialog
    },
    {
      path: "/number-count",
      name: "number-count",
      component: NumberCount
    },
    {
      path: "/carousel",
      name: "carousel",
      component: Carousel
    },
    {
      path: "/faqs",
      name: "faqs",
      component: Faqs,
    },
    {
      path: "/pinned-top",
      name: "pinned-top",
      component: PinnedTop,
    },
    {
      path: "/index-sticky",
      name: "index-sticky",
      component: IndexSticky,
    }
  ]
});
