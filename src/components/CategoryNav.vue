<template>
  <nav>
      <router-link to="/category/Romance" tag="li">Romance</router-link>
      <router-link to="/category/Fiction" tag="li">Fiction</router-link>
      <router-link to="/category/Business and Finance" tag="li">Business and Finance</router-link>
      <router-link to="/category/Mystery" tag="li">Mystery</router-link>
      <router-link to="/category/Cookbooks" tag="li">Cookbooks</router-link>

  </nav>
</template>

<script>
export default {
  name: "CategoryNav",
  data: function() {
    return {};
  }
};
</script>



<style scoped>
nav {
  padding: 1em;
}

#selected {
  background: darkblue;
}
</style>
