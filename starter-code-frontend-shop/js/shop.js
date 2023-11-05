// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;

function updateCountProductElement() {
  const countProductElement = document.querySelector('#count_product');
  countProductElement.textContent = cart.length;
}
// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  var product = products.find(product => product.id === id);
  var cartProduct = cart.find(p => p.id === product.id);
  if (cartProduct) {
    cartProduct.quantity += 1;
    alert('The product is already in the cart and the quantity has been increased!');
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
    alert('Product has been added to your cart!');
  }

  applyPromotionsCart(); // Apply discounts when adding a product to the cart
  updateCountProductElement();
  updateCartModal();
}

function updateCartModal() {
  const cartListElement = document.querySelector("#cart_list");
  cartListElement.innerHTML = "";
  cart.forEach(product => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${product.name}</th>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.quantity}</td>
      <td>$${(product.price * product.quantity).toFixed(2)}</td>
      <td><button onclick="removeFromCart(${product.id})">❌</button></td>
      <td>$${(product.subtotalWithDiscount ? product.subtotalWithDiscount : product.price * product.quantity).toFixed(2)}</td>
    `;
    cartListElement.appendChild(row);
  });

  total = calculateTotal();
  document.querySelector('#total_price').textContent = calculateTotal().toFixed(2);
}
// Exercise 2
function cleanCart() {
  cart = [];
  updateCountProductElement();
  updateCartModal();
}
// Exercise 3
function calculateTotal() {
  total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (var i = 0; i < cart.length; i++) {
    var product = cart[i];
    //Check if the product has an offer and the required quantity is met
    if (product.id === 1 && product.quantity >= 3) {
      var discount = (product.price * product.quantity * 0.20);
      product.subtotalWithDiscount = (product.price * product.quantity) - discount;
    } else if (product.id === 3 && product.quantity >= 10) {
      var discount = (product.price * product.quantity * 0.10);
      product.subtotalWithDiscount = (product.price * product.quantity) - discount;
    }
  }
  updateCountProductElement();
  updateCartModal();
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart DOM
  const cartListElement = document.querySelector("#cart_list");
  cartListElement.innerHTML = "";

  let cartTotal = 0;

  cart.forEach(product => {
    let row = document.createElement('tr');
    let subtotal = (product.subtotalWithDiscount ? product.subtotalWithDiscount : product.price * product.quantity);
    cartTotal += subtotal; //Add to cart total
    row.innerHTML = `
      <th scope="row">${product.name}</th>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.quantity}</td>
      <td>$${subtotal.toFixed(2)}</td>
      <td><button onclick="removeFromCart(${product.id})">❌</button></td>
      <td>$${(product.subtotalWithDiscount ? product.subtotalWithDiscount : product.price * product.quantity).toFixed(2)}</td>
    `;
    cartListElement.appendChild(row);
  });

  total = cartTotal; // Update cart total

  document.querySelector('#total_price').textContent = total.toFixed(2);
}
// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity -= 1;
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  applyPromotionsCart(); //Apply discounts after updating cart
  updateCountProductElement();
  updateCartModal();
}

function open_modal() {
  printCart();
}
/*
function checkout() {
  open_modal(); // Call the function to update the cart in the modal
  // Save the cart in the sessionStorage
  sessionStorage.setItem('cart', JSON.stringify(cart));
  // Redirect to checkout form
  window.location.href = 'checkout.html';
}  */