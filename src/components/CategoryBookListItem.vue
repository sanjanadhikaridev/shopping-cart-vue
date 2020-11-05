<template>
  <!-- Product image 1 start -->
  <li class="bookBlock">
    <div class="bookImage">
      <a href="#">
        <img
            :src="require('@/assets/images/books/' + bookImageFileName(book))"
            :alt="book.title"
        />
      </a>
    </div>
    <div id="image-text" class="cate-text">
      <ul class="bookInfo">
        <li class="bookTitle">{{ book.title }}</li>
        <li class="bookAuthor">{{ book.author }}</li>
        <li class="bookPrice">${{ (book.price / 100).toFixed(2) }}</li>
      </ul>
      <ul class="bookButtons" >
        <li class="readNowButton" v-if="book.isPublic">
          <router-link to="#" class="bookButtonLink" href="#" title="Read-now">
            <!-- <img src="../assets/images/site/read-icon.png" /> -->
            Read Now
          </router-link>
        </li>
        <li @click="addCart(book)" class="addToCartButton">
          <router-link to="#" class="bookButtonLink" href="#" title="Add to cart">
            Add to Cart
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "categoryBookListItem",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods:
      {
        addCart(book){
          this.$store.dispatch("addToCart",book)
         // console.log(book)
          //console.log("Book")
        },
        bookImageFileName: function(book) {
          let name = book.title
          //console.log (name)
          //name = name.replace(/ /g, '-')
          name = name.replace(/:/g, '-')
          console.log (name)
          return `${name}.jpg`
        }

      },
};
</script>
<style scoped>
#bookBoxes{
	display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
#bookBoxes .bookBlock{
    margin: 5px 15px;
    display: flex;
    justify-content: flex-start;
    border: 2px solid #C55A11;
    padding: 15px;
}
.bookInfo{
  width: 105px;
}
#image-text{
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
}
#image-text .bookInfo li{
   font-size: 14px;
   margin-bottom: 10px;
   text-align: left;
   line-height: 1.1;
}

.bookButtonLink img{
	width: 100%;
}

#bookBoxes .bookBlock .bookImage{
	width: 150px;
	height: 200px;
}
#bookBoxes .bookBlock .bookImage a img{
	width: 100%;
	height: 100%;
}
.cate-text .bookAuthor{
  /* font-style: italic; */
}
.cate-text .bookPrice{
	color: #C55A11;
  font-weight: 600;
}
.bookButtons{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  justify-content: flex-end;
}
.readNowButton {
  margin: 15px 0px;
  text-align: center;
}
.readNowButton a:hover{
  background-color: #C55A11;
   color: #fff;


}
.readNowButton a{
  width: 85px;
  border: 2px solid #C55A11;
  padding: 7px 8px;
  color: #C55A11;
  font-size: 14px;
}
.addToCartButton {
  text-align: center;
  margin: 15px 0px;
}
.addToCartButton a:hover{
  color: #C55A11;
  border: 2px solid #C55A11;
  background: #fff;
}
.addToCartButton a{
  width: 85px;
  background-color: #C55A11;
  padding: 8px;
   color: #fff;
   font-size: 14px;
}
.bookTitle{
  font-size: 15px!important;
}

</style>
