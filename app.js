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
const addProuductForm = document.getElementById('addProduct');
const tableBox = document.getElementById('tableBox');
const ProductList = document.getElementById('ProductList');

let x = document.createElement('table');
  document.body.appendChild(x);

function tableHeaderRender() {
  
  let trEl = document.createElement('tr');
  x.append(trEl);

  let thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.append(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'ShelfNumber';
  trEl.append(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'ProductWight';
  trEl.append(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'MaxinamCapacty';
  trEl.append(thEl);
}

function tableCreateRender(name, shelfNumber, ProductWight, MaxinamCapacty) {
  let trEl = document.createElement('tr');
  x.appendChild(trEl);

  let tdEl = document.createElement('td');
  tdEl.textContent = name;
  trEl.append(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = shelfNumber;
  trEl.append(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = ProductWight;
  trEl.append(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = MaxinamCapacty;
  trEl.append(tdEl);
}

function Product(product) {
  this.product = product;
}

Product.prototype.addProduct = function (name, shelfNumber, ProductWight, MaxinamCapacty) {
  this.product.push({ name, shelfNumber, ProductWight, MaxinamCapacty});
};

Product.prototype.saveToLocalStorage = function () {
  localStorage.setItem('Product', JSON.stringify(this.product));
};

let employees = new Product([]);

function loadLocalStorage() {
  const myLocalStorage = JSON.parse(localStorage.getItem('Product')) || [];
  employees = new Product(myLocalStorage);
}
loadLocalStorage();

addProuductForm.addEventListener('submit', addNewEmployee);

function addNewEmployee(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let shelfNumber = event.target.shelfNumber.value;
  let ProductWight = event.target.ProductWight.value;
  let MaxinamCapacty = event.target.MaxinamCapacty.value;

  employees.addProduct(name, shelfNumber, ProductWight, MaxinamCapacty);
  employees.saveToLocalStorage();

  renderProductList();

  addProuductForm.reset();
}

function renderProductList() {

  //ProductList.textContent = '';
  //tableBox.classList.add('displayNone');
  if (!employees.product.length - 1) {
    //tableBox.classList.remove('displayNone');
    tableHeaderRender();
    for (let i = 0; i < employees.product.length; i++) {
      let name = employees.product[i].name;
      let shelfNumber = employees.product[i].shelfNumber;
      let ProductWight = employees.product[i].ProductWight;
      let MaxinamCapacty = employees.product[i].MaxinamCapacty;
      tableCreateRender(name, shelfNumber, ProductWight, MaxinamCapacty);
      
    }
    
  }
}

renderProductList();