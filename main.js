class Product {
  constructor(name, image, price){
    this.productName = name;
    this.productImage = image;
    this.productPrice = price;
  }
}

const product = [
  new Product ('Liver Treats', 'Images/Liver.jpg', '$10.99'),
  new Product ('Chicken Treats', 'Images/chicken.jpg', '$9.99'),
  new Product ('Beef Treats', 'Images/beef.jpg', '$11.99'),
];

const gridContainer = document.querySelector('.grid-container');

for (let i=0; i<product.length; i++){

  let gridItem = document.createElement('div');
  gridItem.setAttribute('class','grid-item');

  let image = document.createElement('img');
  image.setAttribute('src', product[i].productImage);

  let gridTitle = document.createElement('p');
  gridTitle.setAttribute('class','item-name');
  gridTitle.innerHTML = product[i].productName;

  let gridPrice = document.createElement('p');
  gridPrice.setAttribute('class','item-price');
  gridPrice.innerHTML = product[i].productPrice;

  let gridButton = document.createElement('button');
  gridButton.setAttribute('class','add-button');
  gridButton.innerHTML = 'Add to Cart';
  gridButton.addEventListener('click', function() {
    addButtonClicked(i);
  });

  gridItem.appendChild(image);
  gridItem.appendChild(gridTitle);
  gridItem.appendChild(gridPrice);
  gridItem.appendChild(gridButton);
  gridContainer.appendChild(gridItem);
}

function addButtonClicked(product_index) {
  var itemAdded = product_index;
  addItemToCart(itemAdded);
}

function addItemToCart (itemAdded) {
  console.log(itemAdded);
  // let itemInCart = itemAdded;
  // let itemImage = itemInCart.productImage;
  // let itemName = itemInCart.productName;
  // let itemPrice = itemInCart.productPrice;

  let tr = document.createElement('tr');

  let tdImage = document.createElement('td');
  let tdName = document.createElement('td');
  let tdPrice = document.createElement('td');

  // tdImage.appendChild(itemImage);
  // tdName.appendChild(itemName);
  // tdPrice.appendChild(itemPrice);
  tr.appendChild(tdImage);
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);

  table.appendChild(tr);

  // appendToTable(itemImage, itemName, itemPrice);
}

// Cart Table and Header

let cols = ['Product','Price'];

let table = document.createElement('table');
table.id = 'cart_table';
table.classList.add('cart-header', 'cart-column');

table.appendChild(document.createElement('thead'));
table.querySelector('thead').appendChild(document.createElement('tr'));

for (var i=0; i<cols.length; i++) {
  let heading = document.createElement('td');
  heading.textContent = cols[i];
  table.querySelector('thead tr').appendChild(heading);
}

document.getElementById('wrapper').appendChild(table);

// function appendToTable(itemImage, itemName, itemPrice) {
// let cartRow = document.createElement('div');
// cartRow.classList.add('cart-row');





//get item from product array using itemAdded as index

//create a new row

//create 2 tds for the row reprpesenting the product name and price

//append tds to row

//append row to table

//keep a global total amount and increment here

//update the total amount inner html

// using const and let instead of var. You could move all your functions up to the top.    You could use document.querySelector and document.querySelector all to select single items and multiple items instead of getElementsById and getElementsByClassname.





// Purchase button

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('Thank you for your purchase');
}

