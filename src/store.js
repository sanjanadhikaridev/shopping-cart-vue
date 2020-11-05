import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from "@/services/ApiService";
import {ShoppingCart} from "../ShoppingCartResources/src/models/ShoppingCart";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        selectedCategoryName: "",
        selectedCategoryBooks: [],
        cart: new ShoppingCart()

    },
    mutations: {SET_CATEGORIES(state, newCategories) {
            state.categories = newCategories;
        },
        SELECT_CATEGORY(state, categoryName){
            state.selectedCategoryName = categoryName;
        },
        SET_SELECTED_CATEGORY_BOOKS(state,categoryBooks ) {
            state.selectedCategoryBooks = categoryBooks
        },
        ADD_TO_CART(state, BookName){
            state.cart.addItem(BookName,1);
            localStorage.setItem('CART_STORAGE_KEY', JSON.stringify(state.cart));
        },
        CHANGE_QUANTITY(state, payload){
            state.cart.update(payload.book, payload.quantity);
            localStorage.setItem('CART_STORAGE_KEY', JSON.stringify(state.cart));
        },
        CLEAR_CART(state){
            state.cart = new ShoppingCart();
            localStorage.setItem('CART_STORAGE_KEY', JSON.stringify(state.cart));
        },
        SET_CART(state, shoppingCart){
            localStorage.setItem('CART_STORAGE_KEY', JSON.stringify(shoppingCart));
            let newCart = new ShoppingCart();
            shoppingCart.items.forEach(item => {
                newCart.addItem(item.book, item.quantity);
            });
            state.cart = newCart;
        }
    },
    actions: {
        fetchCategories(context) {
            // const vm = this;
            ApiService.fetchCategories()
                .then(categories => {
                    // console.log("Mark")
                    console.log("Categories: " + categories);
                    // vm.categories = data;
                    context.commit('SET_CATEGORIES', categories)
                })
                .catch(reason => {
                    console.log("Error: " + reason);
                });
        },
        selectCategory(context, categoryName){
            context.commit('SELECT_CATEGORY', categoryName);
        },
        fetchSelectedCategoryBooks(context, CategoryName) {
          //  console.log("CategoryName" +CategoryName)
            // const vm = this;
             ApiService.fetchSelectedCategoryBooks(CategoryName)
                .then(data => {
                    //console.log("mark")
                    console.log("Data: " + data);
                    context.commit('SET_SELECTED_CATEGORY_BOOKS',data)
                    // vm.books= data;
                })
                .catch(reason => {
                    console.log("Error: " + reason);
                });
        },
        addToCart(context, BookName) {
            context.commit('ADD_TO_CART', BookName);
        },
        changeQuantity(context, payload){
            context.commit('CHANGE_QUANTITY', payload);
        },
        clearCart(context){
            context.commit('CLEAR_CART');
        }


    }
});
