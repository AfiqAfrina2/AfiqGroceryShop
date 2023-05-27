// JavaScript
const filterInput = document.getElementById('filterInput');
const menuTable = document.getElementById('productTable');

filterInput.addEventListener('keyup', filterMenu);

function filterMenu() {
  const filterValue = filterInput.value.toLowerCase();
  const rows = menuTable.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const itemCell = rows[i].getElementsByTagName('td')[0];
    const itemText = itemCell.textContent.toLowerCase();

    if (itemText.indexOf(filterValue) > -1) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
}
    var cart = {}; // Initialize an empty object to store cart items

    function addToCart(productName, price) {
      if (cart[productName]) {
        cart[productName].quantity++; // Increment the quantity if the item is already in the cart
      } else {
        cart[productName] = {
          quantity: 1,
          price: price
        }; // Add the item to the cart with quantity and price
      }

      updateCartDisplay();
    }

    function cancelItem(productName) {
      if (cart[productName]) {
        cart[productName].quantity--; // Decrement the quantity of the item

        if (cart[productName].quantity <= 0) {
          delete cart[productName]; // Remove the item from the cart if the quantity reaches zero
        }
      }

      updateCartDisplay();
    }

    function updateCartDisplay() {
      var cartItems = document.getElementById("cart-list");
      var totalPrice = 0;
      cartItems.innerHTML = ""; // Clear the cart items list

      for (var item in cart) {
        var listItem = document.createElement("li");
        listItem.textContent = item + " - " + cart[item].quantity;
        cartItems.appendChild(listItem);

        totalPrice += cart[item].price * cart[item].quantity;
      }

      var totalPriceDisplay = "RM" + totalPrice.toFixed(2); // Add "RM" at the front
      document.getElementById("total-price").textContent = totalPriceDisplay;
    }

    function buying()
    {
      alert("Thankyou for Purchasing with us" );
    }






