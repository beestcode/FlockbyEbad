    
    //show and hide menu buton
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector(".menu-btn").style.display = "none";
}
    //hide menu
function closeMenu() {
    document.getElementById("menu").classList.remove("show");
    document.querySelector(".menu-btn").style.display = "block";
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});


// Cart functionality

let cart = [];
let total = 0;

function addToCart(itemName, price) {
  // add item to cart
  cart.push({ name: itemName, price: price });

  // update total
  total += price;

  // show in cart
  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.innerText = itemName + " - $" + price;
  cartItems.appendChild(li);

  // update total display
  document.getElementById("cart-total").innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  } 
    alert("Proceeding to checkout. Total amount: $" + total); 
    
    
    // here you would normally redirect to a payment page
    window.location.href = "payment.html";
}



