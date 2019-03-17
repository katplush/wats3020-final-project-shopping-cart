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

  gridItem.appendChild(image);
  gridItem.appendChild(gridTitle);
  gridItem.appendChild(gridPrice);
  gridItem.appendChild(gridButton);
  gridContainer.appendChild(gridItem);
}

// function addItemToCart(product) {

// }
// document.addEventListener('click', function(e) {
//   if (addItemToCart(e.tartet, )
// }

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('Thank you for your purchase');
}

// document.getElementById('item').innerHTML = product[0].productName;





