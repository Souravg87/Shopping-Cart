const cartBtn= document.querySelector('.cart-btn');
const closeCartBtn= document.querySelector('.close-cart');
const clearCartBtn= document.querySelector('.clear-cart');
const cartDOM= document.querySelector('.cart');
const cartOverlay= document.querySelector('.cart-overlay');
const cartItems= document.querySelector('.cart-items');
const cartTotal= document.querySelector('.cart-total');
const cartContent= document.querySelector('.cart-content');
const productsDom= document.querySelector('.prdocts-center');

let cart=[];

class Products {
 async getProducts(){
   try {
     let result= await fetch('products.json');
     return result;

   } catch (e) {
     console.log(e);
   }
 }

  }

class UI {
  displayproducts(products){
    console.log(products);

  }

}

class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{
  const ui = new UI();
  const products = new Products();

  products.getProducts().then(products => ui.displayproducts(products));
});
