'use strict';


//Hanna - first I'm making a class that represents the table of the product data
class Product {
  constructor() {
    this._storage = [];
    this.schema = {
      categoryId: { required : true,},

      price: {required: true,},

      weight: {required: true,},

      quantityInStock: {required: true,},
    };
  };
};

module.exports = Product;