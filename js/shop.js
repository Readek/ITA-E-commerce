// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// al toque mi rey
import { products } from "./Product DB.mjs";

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
/** @typedef {import("./Product DB.mjs").Product} Product */
/** @type {Product[]} */
const cart = [];

let total = 0;

// Exercise 1

// onClick html events cant (and shouldnt) be used when using modules, so
// since the product data from index.html is hardcoded anyways, i'll be
// setting event listeners for each buy button so functionallity ends up being the same
const buyButtons = document.getElementsByClassName("buyProductBtn");
for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", () => {buy(i+1)});
}

/**
 * Adds requested product to current cart
 * @param {Number} id 
 */
function buy(id) {

    // check if we have product already
    let weHaveProductAtHome;
    cart.forEach(product => {

        if (product.id == id) {

            // increase quantity
            weHaveProductAtHome = true;
            product.quantity++;

        }

    });

    // in case we dont
    if (!weHaveProductAtHome) {

        // add the product
        products.forEach(product => {

            if (product.id == id) {

                // we dont want to modify the original db so we clone the product
                cart.push(structuredClone(product));
                // set initial quantity to last product in cart which should always
                // be the one we just added
                cart.at(-1).quantity = 1;

            }

        });

    }

}

// Exercise 2

document.getElementsByClassName("cartClearBtn")[0].addEventListener("click", () => {cleanCart()});
/** Removes all products from current cart */
function cleanCart() {

    cart.length = 0;

}

// Exercise 3

/**
 * Calculates all product prices of current cart
 * @param {Product[]} cartToCalc
 * @returns {Number}
 */
function calculateTotal(cartToCalc = cart) {

    let totalInCart = 0;

    cartToCalc.forEach(product => {
        totalInCart += product.price;
    });

    return totalInCart;

}

// Exercise 4

/**
 * Checks for product promotions on a cart
 * @param {Product[]} sentCart - Cart to check for promos
 * @returns {Product[]} Cart with slashed prices
 */
function applyPromotionsCart(sentCart) {
    
    // clone cart so we dont modify original
    const localCart = structuredClone(sentCart);

    localCart.forEach(product => {

        if (product.offer) {

            if (product.quantity >= product.offer.number) {
                product.price -= product.price * (product.offer.percent * 0.01);
            }

        }

    });

    return localCart;

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}