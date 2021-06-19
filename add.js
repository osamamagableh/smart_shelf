'use strict';

function Product(name, shelfNumber, ProductWight,MaxinamCapacty) {
  this.name = name;
  this.shelfNumber = shelfNumber;
  this.ProductWight = ProductWight;
  this.MaxinamCapacty = MaxinamCapacty;
  
  Product.all.push(this);
}
Product.all = [];

let productlength;

// function gettingItem() {
//   let stringObj = localStorage.getItem('Product');
//   let normalObj = JSON.parse(stringObj);
//   if (normalObj !== null) {
//     Product.all = normalObj;

//     productlength = Product.all.length;
//   }
// }

// function settingItem() {
//   let data = JSON.stringify(Product.all);
//   localStorage.setItem('Product', data);
// }





