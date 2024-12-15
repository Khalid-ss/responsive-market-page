// show and hide cart items
function openNav() {
    document.getElementById("mySidenav").style.width = "360px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
/*/////////////////////////////////////////////////////////////////*/
// cart increment 
function incrementText() {
    // Get the paragraph element
    const paragraph = document.getElementById('count');
    
    // Get the current text content and increment it
    let currentNumber = parseInt(paragraph.textContent);
    paragraph.textContent = currentNumber + 1; // Increment by 1
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const paragraph = document.getElementById('count');
    const cart_num = paragraph.textContent;

    // If cart_num is not "0", update the cart display
    if (cart_num != "0") {
        document.getElementById('cartItem').innerHTML = `<h4>You have ${cart_num} in your cart</h4>`;
    }
}