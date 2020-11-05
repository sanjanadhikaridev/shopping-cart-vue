<template>
    <!-- TODO: Add an HTML section to display when checking out with an empty cart -->
    <div class="cart">
      <div style="text-align: center; margin-top: 2vh">
        <!-- <h1 style="font-weight: bold; color:#C55A11; font-size: 20px" v-if="getCartNumber==0"> Your shopping cart is empty. </h1> -->
       <button class="btn-style btn-secondry" style="margin-top: 1vh" @click = "categorypage">Continue Shopping</button>
      </div>
    <!-- <section class="categoryView" v-if="!cart.empty"> -->
    <section class="categoryView">

      <form @submit.prevent="submitOrder">
        <div>
          <label for="name" style="min-width: 85px">Name:</label>
          <input
            type="text"
            size="20"
            id="name"
            name="name"
            v-model.trim="$v.name.$model"
          />
        </div>
        <template v-if="$v.name.$error">
          <span class="error" v-if="!$v.name.required">Name is required</span>
          <span class="error" v-else-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </span>
          <span class="error" v-else-if="!$v.name.maxLength">
            Name can have at most
            {{ $v.name.$params.maxLength.max }} letters.
          </span>
          <span class="error" v-else>
            An unexpected error occurred.
          </span>
        </template>
        <!-- TODO: Add address input and validation messages -->
        <div>
          <label for="address" style="width: 85px">Address:</label>
          <input
              type="text"
              size="20"
              id="address"
              name="address"
              v-model.lazy="$v.address.$model"
          />

        </div>
        <template v-if="$v.address.$error">
          <span class="error" v-if="!$v.address.required">Address is required</span>
          <span class="error" v-else-if="!$v.address.minLength">
             Address must have at least
            {{ $v.address.$params.minLength.min }} letters.
          </span>
          <span class="error" v-else-if="!$v.address.maxLength">
            Address can have at most
            {{ $v.address.$params.maxLength.max }} letters.
          </span>
          <span class="error" v-else>
            An unexpected error occurred.
          </span>
        </template>

        <!-- Field for the phone number -->
        <div>
          <label for="phone" style="width: 85px">Phone:</label>
          <input
            class="textField"
            type="text"
            size="20"
            id="phone"
            name="phone"
            v-model.lazy="$v.phone.$model"
          />
        </div>
        <!-- Vaidation for the Phone Number -->
         <template v-if="$v.phone.$error">
          <span class="error" v-if="!$v.phone.required">Phone is required</span>
            <span class="error" v-else-if="!$v.address.phoneVal">
              Please enter exact phone number.
            </span>
        </template>

        <!-- TODO: Add phone validation message(s) -->

        <div>
          <label for="email" style="width: 85px">Email:</label>
          <input 
            type="text" 
            size="20" 
            id="email" 
            name="email" 
            v-model.lazy="$v.email.$model"
          />
        </div>
        <!-- TODO: Add email validation message(s) -->
        <template v-if="$v.email.$error">
          <span class="error" v-if="!$v.email.required">Email is required</span>
            <span class="error" v-else-if="!$v.address.phoneVal">
              Please enter exact email.
            </span>
        </template>


        <div>
          <label for="ccNumber" style="width: 85px">Credit card:</label>
          <input 
            type="text" 
            size="20" 
            id="ccNumber" 
            name="ccNumber"
            v-model.lazy="$v.ccNumber.$model"
          />
        </div>
        <!-- TODO: Add credit card validation message(s) -->
         <template v-if="$v.ccNumber.$error">
          <span class="error" v-if="!$v.ccNumber.required">Credit Card is required</span>
            <span class="error" v-else-if="!$v.ccNumber.creditCard">
              Please enter exact email.
            </span>
        </template>


        <div style="width: 100%; justify-content: flex-start">
          <label style="width: 85px">Exp Date</label>
          <select v-model="ccExpiryMonth" style="padding: 3px">
            <option
              v-for="(month, index) in months"
              :key="index"
              :value="index + 1"
              >{{ month }} ({{ index + 1 }})</option
            >
          </select>
          <select v-model="ccExpiryYear">
            <option
                v-for="(year, index) in years"
                :key="index"
                :value="year"
                >{{ year }}</option
              >
            <!-- TODO: Complete this select tag for 'ccExpiryYear'. -->
          </select>
        </div>
        <!-- TODO (style): Use a single label for both month and date and put the on the same line. -->
        <!-- TODO (style): For example: Exp Date {Month} {Year}, with space between month/year selectors. -->

        <input
          type="submit"
          name="submit"
          :disabled="checkoutStatus == 'PENDING'"
          value="Complete Purchase"
        />
        <!-- TODO (style): The submit button should not take up the entire width of the form. -->
        <!-- TODO (style): The submit button should be styled consistent with your own site. -->
      </form>
      <!-- TODO (style): Fix error message placement so they nearer to the correct fields. -->
      <!-- TODO (style): HINT: Use another <div> and label, input, and error, and use flexbox to style. -->

      <div
        style="border: 1px solid black; padding: 1em; margin-left: 1em; text-align: left "
      >
        <tree-view
          :data="$v"
          :options="{ rootObjectKey: '$v', maxDepth: 1 }"
        ></tree-view>
      </div>

      <!-- TODO: Display the cart total, subtotal and surcharge. -->

      <section v-show="checkoutStatus != ''" class="checkoutStatusBox">
        <div v-if="checkoutStatus == 'ERROR'">
          Error: Please fix the problems above and try again.
        </div>

        <div v-else-if="checkoutStatus == 'PENDING'">
          Processing...
        </div>

        <div v-else-if="checkoutStatus == 'OK'">
          Order placed...
        </div>

        <div v-else>
          <!-- "checkoutStatus == 'SERVER_ERROR'" -->
          An unexpected error occurred, please try again.
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

import isCreditCard from "validator/lib/isCreditCard";
import isMobilePhone from "validator/lib/isMobilePhone";

const phoneVal = value => isMobilePhone(value, "en-US");
const creditCard = value => isCreditCard(value);

export default {
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      ccNumber: "",
      ccExpiryMonth: new Date().getMonth() + 1,
      ccExpiryYear: new Date().getFullYear(),
      checkoutStatus: ""
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    address: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    phone: {
      required,
      phoneVal,
    },
    email: {
      required,
      email
    },
    ccNumber: {
      required,
      creditCard
    }
    // TODO: Add more validations for the other fields that need validation.
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    getCartNumber(){
      let items = this.$store.state.cart._items;
      let result = 0;
      for (let i = 0; i < items.length; i++) {
        result = result + parseInt(items[i].quantity);
      }
      return result
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    },
    years() {
      const year = new Date().getFullYear();
      let result = [];
      
      for(var i= parseInt(year); i < parseInt(year + 16); i++){
          console.log(i);
          result.push(i);
      }
      return result;
      // return result;
    }
  },

  methods: {
    submitOrder() {
      console.log(this.phone);
      console.log(creditCard("378282246310005"));
      console.log("Submit order");
      this.$v.$touch(); // Ensures validators always run
      if (this.$v.$invalid) {
        this.checkoutStatus = "ERROR";
      } else {
        this.checkoutStatus = "PENDING";
        setTimeout(() => {
          this.checkoutStatus = "OK";
          setTimeout(() => {this.$router.push({ name: 'confirmation' })}, 1000);

        }, 1000);
      }
    },

    categorypage() {
      // if(this.category_name!=="undefined") this.$router.push(`/category/${this.category_name}`);
      // else this.$router.push('/category/Romance');
    },

    /* NOTE: For example yearFrom(0) == 2019 */
    yearFrom(index) {
      return new Date().getFullYear() + index;
    }
  }
};
</script>

<style scoped>
/* TODO: Adapt these styles to your page */
.categoryView {
  display: flex;
  margin: 1em;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form > div {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.2em;
}

form > div > input,
form > div > select {
  margin-left: 0.5em;
}

form > .error {
  margin-left: 20px;
  color: red;
  text-align: right;
  margin-top: 0px;
  margin-bottom: 0.4em;
  font-size: 0.8em;
}

.checkoutStatusBox {
  margin: 1em;
  padding: 1em;
  text-align: center;
}
</style>
