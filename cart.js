// Función y ejecución para crear elemntos que haya cargados en el carrito

function cartProducts() {
  if (productsCart && productsCart.length > 0) {
    emptyCart.classList.add("disable");
    cartContainer.classList.remove("disable");
    endCart.classList.remove("disable");

    cartContainer.innerHTML = "";
    productsCart.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("cart-product");
      div.innerHTML = `
            <img class="cart-img" src="${product.img}" alt="${product.name}">
            <div>
            <h4>Producto</h4>
            <h2>${product.name}</h2>
            </div>
            
            <div>
            <h4>Cantidad</h4>
            <h2>${product.quantity}</h2>
            </div>
            
            <div>
            <h4>Precio</h4>
            <h2>${product.price}</h2>
            </div>
            
            <div>
            <h4>Eliminar</h4>
            <button class="trash-can" id="${product.id}">
            <i class="bi bi-trash-fill"></i>
            </button>
            </div>
            
            <div>
            <h4>Subtotal</h4>
            <h2>${product.price * product.quantity}</h2>
            </div>
            `;

      cartContainer.append(div);
    });
  } else {
    emptyCart.classList.remove("disable");
    cartContainer.classList.add("disable");
    endCart.classList.add("disable");
  }
  newAddButtonsTrash();
  newTotal();
}

cartProducts();

// Función y ejecución para crear botones apra eliminar botones del carrito

function newAddButtonsTrash() {
  trashButton = document.querySelectorAll(".trash-can");
  trashButton.forEach((btn) => {
    btn.addEventListener("click", removeFromCart);
  });
}

function removeFromCart(e) {
  let buttonId = parseInt(e.target.id);
  const index = productsCart.findIndex((product) => product.id === buttonId);
  productsCart.splice(index, 1);
  Swal.fire({
    position: "center",
    icon: "error",
    title: "El producto ha sido eliminado del carrito",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1000,
  });
  cartProducts();

  localStorage.setItem("cart", JSON.stringify(productsCart));
}

// Función para el boton para eliminar todos los elemntos del carrito

empty.addEventListener("click", () => {
  emptyCartButton();
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Se ha vacio por completo el carrito",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1500,
  });
});

function emptyCartButton() {
  productsCart.length = 0;
  localStorage.setItem("cart", JSON.stringify(productsCart));
  cartProducts();
}

// Funcion que suma el total del precio de todos los elementos del carrito

function newTotal() {
  const totalCart = productsCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  totalP.innerText = `$${totalCart}`;
}

// Funcion para el boton de "Comprar ahora"

buyButton.addEventListener("click", buyFinished);

function buyFinished() {
  Swal.fire({
    title: "¿Quieres confirmar la compra?",
    icon: "question",
    showDenyButton: true,
    confirmButtonText: "CONFIRMAR",
    denyButtonText: "CANCELAR",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("cart");
      shoppingCart.length = 0;
      Swal.fire("Muchas gracias por su compra!", "", "success");
      emptyCartButton();
    }
  });
}
