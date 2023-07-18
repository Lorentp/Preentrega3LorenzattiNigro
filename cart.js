let productsCart = localStorage.getItem("cart")
productsCart = JSON.parse(productsCart)
const cartContainer = document.querySelector(".container-cart")
const emptyCart = document.querySelector(".cart-empty")
const endCart = document.querySelector(".cart-end")
let trashButton = document.querySelectorAll(".trash-can")
const empty = document.querySelector("#cart-end-empty")
const totalP = document.querySelector("#total")
const buyButton = document.querySelector("#cart-end-buy")


function cartProducts () {
if (productsCart && productsCart.length > 0) {
    
    

    emptyCart.classList.add("disable")
    cartContainer.classList.remove("disable");
    endCart.classList.remove("disable")
    
    
        
        cartContainer.innerHTML = "";
        productsCart.forEach((product) => {
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = 
            
            `
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
            
            cartContainer.append(div)        
            
            
        })
    }
    
    else {
        emptyCart.classList.remove("disable")
        cartContainer.classList.add("disable");
        endCart.classList.add("disable")
    }
    newAddButtonsTrash();
    newTotal ()
} 


cartProducts();



function newAddButtonsTrash() {
    trashButton = document.querySelectorAll(".trash-can");
    trashButton.forEach((btn) => {
      btn.addEventListener("click", removeFromCart);
    });
}

function removeFromCart (e) {
    let buttonId = parseInt(e.target.id) 
    const index = productsCart.findIndex(product => product.id === buttonId) 
    productsCart.splice(index,1)
    cartProducts();

    localStorage.setItem ("cart", JSON.stringify(productsCart))
}

empty.addEventListener("click", emptyCartButton)

function emptyCartButton () {
    productsCart.length = 0;
    localStorage.setItem("cart", JSON.stringify(productsCart));
    cartProducts ();
}


function newTotal (){ 
    const totalCart = productsCart.reduce ((acc, product) => acc + (product.price * product.quantity), 0)    
    totalP.innerText = `$${totalCart}`
}

buyButton.addEventListener("click", buyFinished)

function buyFinished (){
    alert ("Muchas gracias por su compra, esperamos verlo nuevamente !")
}