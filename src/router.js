import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Category from "./views/Category.vue"
import Cart from "./views/Cart.vue";
import Checkout from "./views/Checkout.vue";


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
      path: "/category/:name",
      name: "category",
      component: Category,
      props: true
    },
    {
      path: "/views/Cart/:name",
      name: "cart",
      component: Cart,
      props: true
    },
    {
      path: "/views/checkout",
      name: "checkout",
      component: Checkout,
      props: true
    }

  ]
});
