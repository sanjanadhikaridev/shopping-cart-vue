<template>
  <div class="category-primary">
    <!-- <category-nav></category-nav> -->
    <CategorySideNav></CategorySideNav>
    <category-book-list :books="books" :category_name="category_name"> </category-book-list>
  </div>
</template>

<script>
// import CategoryNav from "@/components/CategoryNav";
import CategoryBookList from "@/components/CategoryBookList";
import CategorySideNav from "@/components/CategorySideNav";
//import ApiService from "@/services/ApiService";

export default {
  name: "category",
  components: {
    CategoryBookList,
    CategorySideNav
  },
  data() {
    return {
      category_name: this.$route.params.name
    }
  },
  created: function() {
    //this.fetchSelectedCategoryBooks(this.$route.params.name);
    this.$store.dispatch("selectCategory", this.$route.params.name);
    this.$store.dispatch("fetchSelectedCategoryBooks", this.$store.state.selectedCategoryName);
  },

};
</script>


<style scoped>
.category-primary{
  display: flex;
  margin: 10px 0;
}
</style>
