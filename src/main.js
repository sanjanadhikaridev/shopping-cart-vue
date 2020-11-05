import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/normalize-and-reset.css";
import "@/assets/css/global.css";
import store from "./store";
import Vuelidate from 'vuelidate'
import TreeView from 'vue-json-tree-view'
import JsonCSV from 'vue-json-csv'

Vue.use(Vuelidate)
Vue.use(JsonCSV)
Vue.use(TreeView)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
  created: function(){
    const cartString = localStorage.getItem('CART_STORAGE_KEY');
    if (cartString) {
      const shoppingCart = JSON.parse(cartString);
      this.$store.commit("SET_CART", shoppingCart);
    }

  }
}).$mount("#app");
