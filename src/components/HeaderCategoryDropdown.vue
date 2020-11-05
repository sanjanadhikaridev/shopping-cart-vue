<template>
  <!-- Dropdown start -->
  <div class="browse-container">
    <div class="container-cat">
      <div id="dropdown-main">
        <h1>Browse Categories</h1>
        <ul id="categoryDropdownList">
          <router-link to="/category/Romance" tag="li">Romance</router-link>
          <router-link to="/category/Fiction" tag="li">Fiction</router-link>
          <router-link to="/category/Business and Finance" tag="li">Business and Finance</router-link>
          <router-link to="/category/Mystery" tag="li">Mystery</router-link>
          <router-link to="/category/Cookbooks" tag="li">Cookbooks</router-link>

        </ul>
      </div>
    </div>
    <div class="image-browse">
      <img src="../assets/images/site/arrow.svg" />
    </div>
  </div>
  <!-- Dropdown end -->
</template>

<script>
export default {
  name: "HeaderCategoryDropdown"
};
</script>

<style scoped>
.browse-container {
  display: flex;
  align-items: center;
  margin: 0 11px 0 0;
  cursor: pointer;
  border: 1px solid #ce7b42;
  align-self: center;
  padding:7px 10px;
  background-color:#F2F2F2;
}
.browse-container .container-cat {
  border-right: unset;
}
.browse-container .container-cat p {
  font-size: 16px;
}
.image-browse img {
  position: relative;
  top: 0;
  transform: rotate(-182deg);
  transition: 0.4s ease-in-out;
  margin-left: 10px;
}
#dropdown-main ul {
  display: none;
  position: absolute;
  background-color: white;
  padding: 10px 10px;
  width: 143px;
  left: -11px;
  z-index: 1;
  top: 23px;
  text-align: left;
}
#dropdown-main ul li {
  padding: 5px 0px;
  color: #000;
}
#dropdown-main ul li:hover {
  color: white;
  background-color: #efb095 ;

}
.browse-container:hover #categoryDropdownList {
  display: block;
  background-color: white;
}
.browse-container:hover .image-browse img {
  transform: rotate(-90deg);
  opacity: 0.9;
}
#dropdown-main {
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 14px;
}
</style>
