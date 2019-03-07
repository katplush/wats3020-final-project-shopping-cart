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
  new Product ('Beef Treats', 'Images/beef.jpg', '$10.99'),
];

document.getElementById('item').innerHTML = product[0].productName;
