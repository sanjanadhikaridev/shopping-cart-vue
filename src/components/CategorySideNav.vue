<template>
  <nav id = "category-nav">
    <ul id = "categoryButtons">
      <template v-for="category in getCategory">
        <li class = "active"
            :key="category.categoryId"
            v-if="$route.params.name === category.name">
          {{ category.name }}
        </li>
        <li :key="category.categoryId" v-else>
          <router-link
              :to="{ name: 'category', params: { name: category.name } }">
            {{ category.name }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
//import ApiService from "@/services/ApiService";

export default {
  name: "CategorySideNav",
  // data: function() {
  //   return {
  //     categories: []
  //   };
  // },
  computed:{
    getCategory(){
      return this.$store.state.categories
    }
  },
  created: function() {
    // this.fetchCategories();
    this.$store.dispatch("fetchCategories");
    //console.log("Mark")
    //this.categories = this.$store.state.categories;
  },
  // methods: {
  //   fetchCategories() {
  //     const vm = this;
  //     ApiService.fetchCategories()
  //         .then(data => {
  //           console.log("Data: " + data);
  //           vm.categories = data;
  //         })
  //         .catch(reason => {
  //           console.log("Error: " + reason);
  //         });
  //   }
  // }
};
</script>

<style scoped>
#category-nav {
  width: 25%;
  text-align: left;
  border-right: 2px solid #000;
}
#category-nav h5 {
  background-color: #fbe5d6;
  color: #e07517;
  padding: 10px;
  font-size: 20px;
}
#categoryButtons li {
  padding: 10px;
  font-size: 18px;
  color: #000;
}
#categoryButtons li:hover {
  background-color:#fbe5d6;
}
#categoryButtons li a {
  font-size: 18px;
  color: #000;
}
#categoryButtons .active {
  background-color: #fed8b1;
}
</style>
