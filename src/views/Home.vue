<template>
  <div id="home">
    <!-- <p>
      Welcome to another bookstore &ndash; a client-side application written in
      Vue. It includes a home-page view and a category-page view. The reason
      these are views and not proper pages is because this is a single-page
      application. The Vue router allows you to navigate between pages as you
      would in a traditional web app. Take some time and explore the code.
    </p> -->
    <home-category-list></home-category-list>
    <download-csv
      :data="json_data">
      Download Data
      <img src="download_icon.png">
</download-csv>
  </div>
</template>

<script>
import HomeCategoryList from "@/components/HomeCategoryList";

export default {
  name: "Home",
   components: {
    HomeCategoryList,

  },
  data() {
    return {
     json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ]
    };
  },
 
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

p {
  font-family: "Proza Libre", sans-serif;
  line-height: 1.3;
  width: 300px;
  margin: 10px;
}
</style>
