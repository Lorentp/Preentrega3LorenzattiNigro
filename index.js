//Funcion y botones para cargar todos los productos o elegir por categoria

function addProducts(chosenProducts) {
  productContainer.innerHTML = "";

  chosenProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("div-card");
    div.innerHTML = `
      <img  src="${product.img}" alt="${product.name}">
      <div class="game-title">
        <h5>${product.name}</h5>
        <p>$${product.price}</p>
      </div>
      <button class="button-add button-index" id="${product.id}">Agregar</button>
      
    `;

    productContainer.append(div);
  });

  newAddButtons();
}

buttonsCategories.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttonsCategories.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.id != "all") {
      const buttonsCategories = products.filter(
        (product) => product.categoria.id === e.target.id
      );
      addProducts(buttonsCategories);
    } else {
      addProducts(products);
    }
  });
});

// Funcion para botones de agregar al carrito

function newAddButtons() {
  let buttonAdd = document.querySelectorAll(".button-add");
  buttonAdd.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
}

function addToCart(e) {
  const idBtn = parseInt(e.target.id);
  const productPushToCart = products.find((product) => product.id === idBtn);
  const productName = products.find((product) => product.id === idBtn);
  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "El producto ha sido agregado al carrito!",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1500,
  });
  if (shoppingCart.some((product) => product.id === idBtn)) {
    const index = shoppingCart.findIndex((product) => product.id === idBtn);
    shoppingCart[index].quantity++;
  } else {
    productPushToCart.quantity = 1;
    shoppingCart.push(productPushToCart);
  }
  cartQuantity();

  localStorage.setItem("cart", JSON.stringify(shoppingCart));
}

// Actualizar numero de carrito
const shoppingCartLSNumber = JSON.parse(localStorage.getItem("cart"));

if (shoppingCartLSNumber) {
  cartQuantity();
}

function cartQuantity() {
  let cartQuantity = shoppingCart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  cartNumber.innerHTML = cartQuantity;
}

// Funcion para el buscador

inputSearch.addEventListener("search", () => {
  const result = products.filter((product) =>
    product.name.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  addProducts(result);
});
