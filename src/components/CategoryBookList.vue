<template>
  <div class="primary-grid">
    <article id="image-grid">
      <h5>Best-selling Romance Titles</h5>
      <ul id="bookBoxes">
        <template v-for="book in getBooks">
          <category-book-list-item :key = "book.bookId"
                                   :book = book> </category-book-list-item></template>
      </ul>
    </article>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";

export default {
  name: "CategoryBookList",
  // props: {
  //   books: {
  //     type: Array,
  //     required: true
  //   }
  // },
  components: {
    CategoryBookListItem
  },
  computed:{
    getBooks(){
      return this.$store.state.selectedCategoryBooks;
    }
  },
};

</script>

<style scoped>
#image-grid , .primary-grid{
	width: 100%;
}
#image-grid h5{
	padding: 10px 30px;
	text-align: left;
	color:#C55A11;
	font-size: 20px;
}
ul {
  padding: 10px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
