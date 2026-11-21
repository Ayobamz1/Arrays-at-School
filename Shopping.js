// alert("I am Working")

let cart = [];

function displayCart() {
  document.getElementById("display").innerHTML = "";
  for (let index = 0; index < cart.length; index++) {
    document.getElementById("display").innerHTML +=
      `<p>${index + 1}. ${cart[index]}</p>`;
  }
}

function addItem() {
  let input = document.getElementById("input").value;

  if (input.trim() == "") {
    alert("Kindly enter an item(s)");
  } else {
    cart.push(input);
    // console.log(cart);
    document.getElementById("input").value = "";
    document.getElementById("display").innerHTML = "";
    displayCart();
  }
  //    for (let index = 0; index < cart.length; index++) {
  //        document.getElementById("display").innerHTML += `<p>${index + 1}. ${cart[index]}</p>`
  //    }
}

function deleteLast() {
  // cart.pop();
  // cart = [];
  // cart.splice(-1, 1);

  // cart = cart.slice(0, -1);

  cart = cart.slice(0, 0);
  // cart.splice(0);
  displayCart();
}

// if (input.value.trim() == "") {
//     alert("KIndly, input the item")
// } else {
//     cart.push(input.value)
//     console.log(cart);
// input.value = ""
// }

// const addItem = () => {

// }
