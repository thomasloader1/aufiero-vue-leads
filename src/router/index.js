import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  scrollBehavior(){
    return window.scrollTo({top:0, behavior: 'smooth'})
  },
  routes, // short for routes: routes
  linkActiveClass: "active"
});

export default router;
