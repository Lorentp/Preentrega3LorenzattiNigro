/*Conexion para interactuar con el HTML*/

const buttonsCategories = document.querySelectorAll(".products-category");
const buyButton = document.querySelector("#cart-end-buy");
const cartContainer = document.querySelector(".container-cart");
const cartNumber = document.querySelector("#number");
const endCart = document.querySelector(".cart-end");
const empty = document.querySelector("#cart-end-empty");
const emptyCart = document.querySelector(".cart-empty");
const inputSearch = document.querySelector("#inputSearch");
const productContainer = document.querySelector(".container#container");
const totalP = document.querySelector("#total");
const USPrice = document.querySelector("#dolar");
let buttonAdd = document.querySelectorAll(".button-add");
let productsCart = localStorage.getItem("cart");
let trashButton = document.querySelectorAll(".trash-can");

productsCart = JSON.parse(productsCart);

let products = [];
let usd = [];
let shoppingCart;
let shoppingCartLS = localStorage.getItem("cart");

// Recupero carrito cargado en LS en caso de ser necesario
if (shoppingCartLS) {
  shoppingCart = JSON.parse(shoppingCartLS);
} else {
  shoppingCart = [];
}

/*aplicamos metodo fetch para conectar con el archivo .json donde esta el array de productos*/

fetch("./json/products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addProducts(data);
  });

/*aplicamos metodo fetch a una api para recuperar el precio del dolar actualizado*/

let usdUpdate;

const USDPrice =
  "https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIOR_D_0_0_26&limit=5000&format=json";

async function dolar() {
  try {
    const response = await fetch(USDPrice);
    const data = await response.json();
    usd = data;
    usdUpdate = usd.data.slice(-1)[0];
    usdUpdateLast = usdUpdate.pop();
    updateUSDPrice();
  } catch (error) {
    console.error("Se ha producido un error:", error);
  }
}

dolar();

function updateUSDPrice() {
  USPrice.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("div-usd");
  div.innerHTML = `<h2>${usdUpdateLast}</h2>`;
  USPrice.append(div);
}
