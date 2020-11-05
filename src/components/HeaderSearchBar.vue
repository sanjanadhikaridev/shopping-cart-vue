<template>
  <!-- Search bar start -->
  <form id="searchForm">
    <input type="text" placeholder="Enter keyword, title or author " />
    <input type="image" :src="require('../assets/images/site/searchicon.png')" alt="image" />
  </form>
  <!-- Search bar end -->
</template>

<script>
export default {
  name: "HeaderSearchBar"
};
</script>

<style scoped>
#searchForm {
  display: flex;
   border: 1px solid #ce7b42;
}
#searchForm input {
  font-size: 14px;
  color: #d6d4d4;
}
#searchForm input[type="text"] {
  background-color: #f2f2f2;
  padding: 6px 8px;
  width: 300px;
  color: #969595;
  border: unset;
  border-right: 1px solid #ce7b42;
}
#searchForm input[type="image"] {
  padding: 5px 8px;
  width: 24px;
  background-color: #f2f2f2;
}
#searchForm input:focus {
  outline: none;
}
@media (max-width: 800px){
 #searchForm input[type="text"] {
  width: 100%;
}
}
</style>
