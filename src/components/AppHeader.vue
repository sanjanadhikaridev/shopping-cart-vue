<template>
  <header>
    <div id="leftheader">
      <div id="logo">
        <router-link to="/">
          <img src="../assets/images/site/bookstore-logo.png" alt="Bookstore Logo" height="100" />
        </router-link>
      </div>
    </div>
    <div id="midheader">
      <div class="flex">
        <div id="logoText">
          <router-link to="/">
             <h1>Sophomore Bookstore</h1>
            <!-- <img src="../assets/images/site/logo-text.png" alt="Wisdom Bookstore" /> -->
          </router-link>
        </div>
        <div class="search-container">
          <header-category-dropdown></header-category-dropdown>
          <header-search-bar></header-search-bar>
        </div>
      </div>
    </div>
    <div id="rightheader"> 
      <div id="cartButton">
<!--        <router-link to=`/views/cart/${category_name}`>-->
          <img role="button" style="cursor: pointer" @click="gotoCart" src="../assets/images/site/cart-logo.png" alt="Cart Icon" />

<!--        </router-link>-->
        <div id="cartCount">{{getCartNumber}}</div>
      </div>
      <div id="loginButton">Tanvi</div>
      <div id="loginButton">Logout</div>
    </div>
  </header>
</template>

<script>
import HeaderSearchBar from "@/components/HeaderSearchBar";
import HeaderCategoryDropdown from "@/components/HeaderCategoryDropdown";
export default {
  name: "AppHeader",
  components: { HeaderSearchBar, HeaderCategoryDropdown },
  component: {
    HeaderSearchBar,
    HeaderCategoryDropdown
  },
  data() {
    return {
      category_name: ''
    }
  },
  computed:{
    getCartNumber(){
      let items = this.$store.state.cart._items;
      let result = 0;
      for (let i = 0; i < items.length; i++) {
          result = result + parseInt(items[i].quantity);
      }
         return result
    },
  },
  created() {
    this.category_name = this.$route.params.name;
    console.log("mark");
    console.log(this.category_name);
  },

  methods: {
    gotoCart(){
      this.$router.push(`/views/cart/${this.category_name}`);
    }
  },
  watch: {
    $route() {
      this.category_name = this.$route.params.name;
      console.log("mark");
      console.log(this.category_name);
    },
  },
};
</script>

<style scoped>
/* header seting start */
header {
  display: flex;
  justify-content: space-between;
  background-color: #f2bfa6;
  color: rgb(197, 90, 17);
  border: 1px solid #cc3599;
  padding: 8px 20px;
  align-items: center;
  flex-wrap: wrap;
}
.search-container {
  display: flex;
  flex-wrap: wrap;
}
/* left side header setting start  */
#logo {
  width: 120px;
  height: 120px;
}
#logo img {
  width: 100%;
  height: 100%;
}
#logoText {
  margin: 0 auto;
  padding:0 0 16px 0;
}
#logoText h1{
  font-family: 'Lora', serif;
  color: #C55A11;
  text-shadow: 1px 1px 3px #2f2d2d6e;
  font-size: 48px;
  letter-spacing: 1.5px;
  font-weight: 600;
}
#logoText img {
  width: 100%;
}
/* left side header setting end  */
#midheader {
  text-align: center;
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
/* right side header setting start*/
#cartButton {
  position: relative;
  right: 15px;
}
#cartCount {
  position: absolute;
  top: -10px;
  background-color: #fc6400;
  color: #fff;
  border-radius: 100%;
  padding: 2px 5px;
  font-size: 12px;
  right: -3px;
  font-weight: bold;
}
#loginButton {
  border: 2px solid #cb6724;
  padding: 3px 18px;
  align-self: center;
  border-radius: 6px;
  font-size: 14px;
  margin-left: 14px;
  cursor: pointer;
}
#loginButton:hover{
  background: #efb095;
  color: #fff;
}
#rightheader {
  display: flex;
  align-self: flex-start;
  padding: 10px 0;
}
/* right side header setting end*/
@media (max-width: 800px){
  header{
    justify-content: center;
  }
  .search-container{
    justify-content: center;
    flex-direction: column-reverse;
  }
  .search-container>div{
   margin-top:10px;
  }
}
/* header seting end */
</style>
