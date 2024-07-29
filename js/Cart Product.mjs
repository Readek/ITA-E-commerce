/** @typedef {import("./Product DB.mjs").Product} Product */

const cartListDiv = document.getElementById("cart_list");

export class CartProduct {

    /** @type {HTMLElement} */
    #productRow;

    /**
     * Adds a product's info to the shooping cart DOM list
     * @param {Product} product 
     */
    constructor(product) {

        this.#createElement(product);
        
    }

    /**
     * Creates the DOM element for this product
     * @param {Product} product 
     */
    #createElement(product) {

        this.#productRow = document.createElement("tr");

        this.#createColumnInfo(product.name, "th");
        this.#createColumnInfo("$" + product.price.toFixed(2));
        this.#createColumnInfo(product.quantity);
        this.#createColumnInfo("$" + (product.price * product.quantity).toFixed(2));

        cartListDiv.appendChild(this.#productRow);

    }

    /**
     * Creates a table column element
     * @param {String} value - Element's content
     * @param {String} type - Element's type
     */
    #createColumnInfo(value, type = "td") {

        const columnEl = document.createElement(type);
        columnEl.innerHTML = value;

        if (type == "th") {
            columnEl.setAttribute("scope", "row");
        }

        this.#productRow.appendChild(columnEl);

    }

}