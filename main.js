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

  let row_id  = 'item_' + itemAdded;

  // If the user hasn't added this item before, create a row and add it
  // into the shopping cart table.
  if (document.getElementById(row_id) === null){
    // Create new row and give it an id so we can find it later on.
    let tr = document.createElement('tr');
    tr.id = row_id;

    let img = document.createElement('img');
    let itemImage = product[itemAdded].productImage;
    img.src = itemImage;
    tr.appendChild(img);

    let tdName = document.createElement('td');
    let itemName = product[itemAdded].productName;
    tdName.innerHTML = itemName;
    tr.appendChild(tdName);

    let tdPrice = document.createElement('td');
    let itemPrice = product[itemAdded].productPrice;
    tdPrice.innerHTML = itemPrice;
    tr.appendChild(tdPrice);  

    let cartItems = document.getElementById('cart-table');
    cartItems.appendChild(tr);
  }
}

// function updateCartTotal(){
//   let cartTotal = document.getElementsByClassName('cart-total');
//   let cartRows = product[itemAdded].productPrice;
//   let total = 0;
//   for (var i = 0; i < cartRows.length; i++) {
//     cart
//   }
// }

// Purchase button

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('Thank you for your purchase');
}