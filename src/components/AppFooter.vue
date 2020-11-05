<template>
  <footer>
    <div id="leftfooter">
      <h6>Follow us on:</h6>
      <div class="flexItem">
        <ul class="horizontal">
          <li>
            <router-link to="#" href="#">
              <img src="../assets/images/site/Picture9.png" width="32" height="32" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../assets/images/site/Picture10.png" width="32" height="32" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../assets/images/site/Picture11.png" width="32" height="32" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mid-conatainer">
      <div>
        <ul class="horizontal">
          <li>
            <router-link to="#">About</router-link>
          </li>
          <li>
            <router-link to="#" href="#">Directions</router-link>
          </li>
          <li>
            <router-link to="#">Contact Us</router-link>
          </li>
          <li>
            <router-link to="#">Help</router-link>
          </li>
        </ul>
        <p>© 2020 WisdomBookstore Inc. All Rights Reserved</p>
      </div>
    </div>
    <div id="rightfooter">
      <div class="flexItem">
        <p>For feedback/suggestions:</p>
        <p>
          <router-link to="#">Click Here</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  background-color: #f2bfa6;
  color: rgb(197, 90, 17);
  align-items: center;
  padding: 6px 30px 6px 0px;
  flex-wrap: wrap;
}
footer p {
  font-size: 14px;
  color:#98440a;
}
#leftfooter {
  width: 150px;
}
#rightfooter p a {
  color:#98440a;
}
#rightfooter p {
  text-align: left;
  font-size: 12px;
  font-weight: 600;
}
#leftfooter .horizontal {
  display: flex;
  justify-content: center;
}
#leftfooter .horizontal li {
  padding: 2px;
}
#rightfooter p a:hover {
  color: white;
  font-weight: bold;
}

.mid-conatainer .horizontal li a:hover {
  color: white;
}
#leftfooter h6 {
  color:#98440a;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}
.mid-conatainer,
#rightfooter {
  line-height: 1.5;
}
.mid-conatainer h4 {
  font-weight: bold;
  font-size: 18px;
}
.mid-conatainer p {
  font-size: 12px;
  text-align: center;
  font-weight: 600;
}
.mid-conatainer .horizontal {
  display: flex;
}
.mid-conatainer .horizontal li {
  display: flex;
  border-right: 2px solid#98440a;
  padding: 0 12px;
}
.mid-conatainer .horizontal li:last-child {
  border: unset;
}
.mid-conatainer .horizontal li a {
  color:#98440a;
  font-weight: 600;
  font-size: 14px;
}
@media (max-width: 800px){
  footer{
    padding:20px 0;
    text-align: center;
    justify-content: center;
  }
  footer>div{
    margin-top:10px;
  }
  #rightfooter p{
     text-align: center;
  }
}
</style>
