var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  const itemsAndPrices = []

  if(cart.length === 0){
      console.log('Your shopping cart is empty.');
    }
    cart.forEach(elemento => {
    itemsAndPrices.push(`${elemento.itemName} at $${elemento.itemPrice}`)});

    var myString = 'In your cart, you have'
    if (itemsAndPrices.length === 1) {
      myString += itemsAndPrices + '.'
    }else if (itemsAndPrices === 2) {
      myString += (itemsAndPrices[0] + 'and' + itemsAndPrices[1] + '.')
    }
   return console.log(myString`${itemsAndPrices.join(', ')}`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
