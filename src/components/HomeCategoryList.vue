<template>
  <!-- Images section start -->
  <main>
    <section>
        <div id = "Upperhome">
            <router-link to="#">
                 <img src="../assets/images/site/head.png" alt="Drive the road of knowledge with the best collection of books!" />
            </router-link>
        </div>
    </section>
    <article id="image-grid-home">
      <h5>*** Recommended Books ***</h5>
      <ul id="bookBoxes">
        <!-- Product image 1 start -->
        <li class="bookBlock recommended">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture1 (1).png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text">
            <ul class="bookInfo">
              <li class="title">The Last One Out</li>
              <li class="bookAuthor">By Victor Adams</li>
            </ul>
          </div>
        </li>
        <!-- Product image 2 start -->
        <li class="bookBlock recommended">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture2 (1).png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text">
            <ul class="bookInfo">
              <li class="title">Rebel</li>
              <li class="bookAuthor">By Marie Lu</li>
            </ul>
          </div>
        </li>
        <!-- Product image 3 start -->
        <li class="bookBlock recommended">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture3 (1).png" alt="The Hobbit" />
            </router-link >
          </div>
          <div id="image-text">
            <ul class="bookInfo">
              <li class="title">Bears’s All-Night Party</li>
              <li class="bookAuthor">By Bill Harley</li>
            </ul>
          </div>
        </li>
        <!-- Product image 4 start -->
        <li class="bookBlock recommended">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture4 (1).png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text">
            <ul class="bookInfo">
              <li class="title">The Terrible Twos</li>
              <li class="bookAuthor">By Mac Burnett</li>
            </ul>
          </div>
        </li>
      </ul>
      <h5>!!! Books on sale !!!</h5>
      <ul id="bookBoxes">
        <!-- Product image 1 start -->
        <li class="bookBlock">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture5 (1).png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text" class="sale-image">
            <ul class="bookInfo red">
              <li class="bookTitle">RRP $29.99</li>
            </ul>
            <ul class="bookInfo red">
              <li class="title">$20.99</li>
            </ul>
          </div>
        </li>
        <!-- Product image 2 start -->
        <li class="bookBlock">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture6 (1).png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text" class="sale-image">
            <ul class="bookInfo red">
              <li class="bookTitle">RRP $49.99</li>
            </ul>
            <ul class="bookInfo red">
              <li class="title">$41.99</li>
            </ul>
          </div>
        </li>
        <!-- Product image 3 start -->
        <li class="bookBlock">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture7.png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text" class="sale-image">
            <ul class="bookInfo red">
              <li class="bookTitle">RRP $29.99</li>
            </ul>
            <ul class="bookInfo red">
              <li class="title">$25.99</li>
            </ul>
          </div>
        </li>
        <!-- Product image 4 start -->
        <li class="bookBlock">
          <div class="bookImage">
            <router-link to="#">
              <img src="../assets/images/site/Picture8.png" alt="The Hobbit" />
            </router-link>
          </div>
          <div id="image-text" class="sale-image">
            <ul class="bookInfo red">
              <li class="bookTitle">RRP $29.99</li>
            </ul>
            <ul class="bookInfo red">
              <li class="title">$20.99</li>
            </ul>
          </div>
        </li>
      </ul>
    </article>
  </main>
  <!-- <ul>
    <router-link to="../category/classics" tag="li">
      <img
        src="../assets/images/categories/italy-4159425_960_720.jpg"
        alt="coliseum image"
      />
      <div>Classics</div>
    </router-link>
    <router-link to="../category/fantasy" tag="li">
      <img
        src="../assets/images/categories/fantasy-saki_asakura-d3btz0x.jpg"
        alt="fantasy castle image"
      />
      <div>Fantasy</div>
    </router-link>
    <router-link to="../category/mystery" tag="li">
      <img
        src="../assets/images/categories/mystery.jpeg"
        alt="person in woods image"
      />
      <div>Mystery</div>
    </router-link>
    <router-link to="../category/romance" tag="li">
      <img
        src="../assets/images/categories/romance.jpg"
        alt="couple on a beach image"
      />
      <div>Romance</div>
    </router-link>
  </ul>-->
</template>

<script>
export default {
  name: "HomeCategoryList"
};
</script>

<style scoped>
#Upperhome {
    padding: 5px;
    display: flex;
    justify-content: center;
}
#Upperhome img{
  width:100%;
}
#image-grid-home{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-bottom: 10px;
}
#image-grid-home h5{
	padding-bottom: 10px;
	text-align: center;
	color: #548235;
    font-size: 24px;
    font-weight: 600;
}
#bookBoxes{
	display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.bookTitle:first-child{
 text-decoration: line-through;
}
#bookBoxes .bookBlock{
    margin: 0px 50px 0px 50px ;
}
#image-text{
    display: flex;
    padding: 5px 0px;
}
.sale-image{
    display: flex;
    justify-content: space-around;
}
#image-text .bookInfo li{
   font-size: 14px;
   margin-right: 5px;
   margin-bottom: 7px;
   text-align: left;
}
.recommended .bookInfo li{
    padding-left: 3px;
}
.bookAuthor{
    font-style: italic;
}
.bookButtonLink{
	width: 30px;
	height: 30px;
}
.bookButtonLink img{
	width: 100%;
}
#Upperhome{
    padding: 5px;
}
#bookBoxes .bookBlock .bookImage{
    width: 200px;
    height: 200px;
}
#bookBoxes .bookBlock .bookImage a img{
    width: 100%;
    height: 100%;
}
.red li{
 color:#C55A11;
 font-weight: 600;
}
.title{
  font-size: 15px!important;
}
</style>
