<template>
  <div class="cart-table-component">
    <table class="cart-table">
      <tr class="table-header">
        <th>Books</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>

      </tr>
      <tr v-for="(book, index) in category_books" :key="index" class="table-row">
        <td>
          <div>
            <div style="margin-bottom: 15px">
              <img :src="require('@/assets/images/books/' + bookImageFileName(book._book))" height="120" style = "text-align: right"/>
            </div>
            <div>
              {{book._book.title}}
            </div>

            </div>
        </td>

        <td style = "text-align: right;">{{book._book.price | currencyConvert}}</td>
        <td><input @change="changeQuantity(book)" type="number" v-model="book._quantity" class="input-style"/></td>
        <td style = "text-align: right">{{ (book._book.price * book._quantity) | currencyConvert}}</td></tr>

    </table>
    <div class="price-value">
      <div style="font-weight: bold; color:#C55A11; font-size:150%">Cart Total: {{subtotal | currencyConvert}}</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Carttable",
  props: ['category_books'],
  components: {

  },
  methods: {
    changeQuantity(book){
      const temp = {
        book: book._book,
        quantity: parseInt(book._quantity)
      };
      this.$store.dispatch('changeQuantity', temp);
      this.calculateSub();

    },
    bookImageFileName: function(book) {
      let name = book.title
      //console.log (name)
      //name = name.replace(/ /g, '-')
      name = name.replace(/:/g, '-')
      console.log(name)
      return `${name}.jpg`
    },
    calculateSub(){
      this.subtotal = 0;
      this.carttotal = 0;
      for(let i=0; this.category_books.length; i++){
        this.subtotal = this.subtotal + this.category_books[i]._book.price * this.category_books[i]._quantity;
        if(this.category_books[i]._book.isPublic == false){
          this.carttotal = this.carttotal + this.category_books[i]._book.price * this.category_books[i]._quantity * 2;
        }
        else this.carttotal = this.carttotal + this.category_books[i]._book.price * this.category_books[i]._quantity * 3;
      }
    }
  },
  data(){
    return {
      subtotal: 0,
      carttotal: 0,
    }
  },
  created: function() {
    console.log("this is the cart table");
    console.log(this.category_books);

    for(let i=0; this.category_books.length; i++){
      this.subtotal = this.subtotal + this.category_books[i]._book.price * this.category_books[i]._quantity;
      this.calculateSub();
    }
  },
  filters: {
    currencyConvert: function(money){
      return `$${money/100}`;
    }
  },
  watch: {
    category_books: function(){
     if(this.category_books.length === 0){
       this.subtotal=0;
       this.carttotal=0;
     }
     console.log("called");

    }
  }
};
</script>

<style scoped>
.cart-table {
  margin: 0 auto;
}
.cart-table-component{
  max-width: 1100px;
  margin: 0 auto;
}
.table-header {
  background-color: #f2bfa6;
  color: #C55A11;
  font-weight: bold;
}
td, th {
  border: 1px solid white;
  padding: 10px;
}
.table-row {
  background: #f2f2f2;
}
.input-style {
  width: 30px;
  margin: 0 auto;
}
.price-value {
  margin-top: 40px;
  text-align: center;
}
td{
  width: 16%;
  text-align: center;
}
tr {
  font-size: 18px;
}
</style>