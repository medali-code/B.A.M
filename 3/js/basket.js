/*class basket{
  constructor(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
      return [];
    } else {
      this.basket = JSON.parse(basket);    
    }
  }

saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify (this.basket));
    }

addBasket(product){
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if (foundProduct != undefined){
      foundProduct.quantity++;
  } else{
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}
 removeFromBasket(product){
  this.basket = basket.filter (p => p.id != product.id);
  saveBasket(basket);
}
  
}*/
function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}
function getBasket(){
  let basket = localStorage.getItem("basket");
  if (basket == null){
    return [];
  }else{
    return JSON.parse(basket);
  }
}
function addBasket(product){
    let basket = getBasket();
   let foundProduct = basket.find(p => p.id == product.id);
   if (foundProduct != undefined){
        foundProduct.quantity++;
   } else{
    product.quantity = 1;
    basket.push(product);
   }
    saveBasket(basket);
}

function removeFromBasket(product){
  let basket = getBasket();
  basket = basket.filter (p => p.id != product.id);
  saveBasket(basket);
}

function changeQuantity(product , quantity){
  let basket = getBasket();
  let foundProduct = basket.find(p => p.id == product.id);
  if (foundProduct != undefined){
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0){
        removeFromBasket(foundProduct);
      }
    }
    saveBasket(basket);
}



function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}
function getTotalPrice() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity + product.price;
  }
  return total;
}


/************* Ajou Panier  **********/
function addPanier(){

  basket = {id: 1, nom: "t-shirt1", prix:150, img:"./IMAGES/madame1.jpg" , categorie:"t-shirt"};
  addBasket(basket);

}

