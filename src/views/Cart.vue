<template>
  <div class="cart">
    <div style="display: flex; justify-content: space-around; font-size: 18px">
      <h1 style="font-weight: bold; color:#C55A11; font-size: 20px" v-if="getCartNumber!==1 & getCartNumber!==0"> Your shopping cart contains {{getCartNumber}} items. </h1>
      <h1 style="font-weight: bold; color:#C55A11; font-size: 20px" v-else-if="getCartNumber==0"> Your shopping cart is empty. </h1>
      <h1 style="font-weight: bold; color:#C55A11; font-size: 20px" v-else> Your shopping cart contains {{getCartNumber}} item. </h1>
      <button v-if="category_books.length!==0" class="btn-style btn-secondry" style="height: 35px" @click="clearCart">Clear Cart</button>
    </div>

    <CartTable style="margin-top: 3%" v-if="category_books.length!==0" :category_books = "category_books"/>

    <div class="cart-group" >
<!--      <button class="btn-style btn-secondry"  @click="clearCart">Clear Cart</button>-->
      <button class="btn-style btn-secondry" @click = "categorypage">Continue Shopping</button>
      <button v-if="category_books.length!==0" class="btn-style btn-primary" @click="checkout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";
export default {
  name: "Cart",
  components: {
    CartTable
  },
  computed:{
    getCartNumber(){
      let items = this.$store.state.cart._items;
      let result = 0;
      for (let i = 0; i < items.length; i++) {
        result = result + parseInt(items[i].quantity);
      }
      return result
    }
  },
  data(){
    return {
      category_books: [],
      category_name: ''
    }
  },
  created: function(){
    this.category_books = this.$store.state.cart._items;
    console.log(this.category_books);
    this.category_name = this.$route.params.name;
    console.log("this is the name in the cart view");
    console.log(this.category_name);
  },
  methods: {
    categorypage() {
      if(this.category_name!=="undefined") this.$router.push(`/category/${this.category_name}`);
      else this.$router.push('/category/Romance');
    },
    clearCart(){
      this.$store.dispatch('clearCart');
      this.category_books = [];
    },
    checkout(){
      console.log("checkout");
      this.$router.push('/views/checkout');
    }
  }
};
</script>

<style scoped>
.cart {
  margin-top: 50px;
}
.cart-group{
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 18px;
}
.btn-style {
  min-width: 200px;
  border-width: 0px;
  color: #404222;
  border-radius: 5px;
  padding: 10px 0px;
}
.btn-primary {
  background-color: #67ba5b;
}
.btn-secondry {
  background-color: #d8d8d8;
}

.btn-primary:hover{
  color: white;
  font-weight: bold;
}

.btn-secondry:hover{
  color: white;
  background-color: #efb095;
  font-weight: bold;
}
</style>
