
// ****************************************Define the products and display in the html***********************************************************

let allProducts = document.querySelector(".products")

let products = [
    {
        id:1,
        title: "Samsung Galaxy Note10",
        color: "blue",
        imageUrl : "images/p1.png"
    },
    {
        id:2,
        title: "Galaxy S21 Ultra 5G",
        color: "black",
        imageUrl : "images/p2.webp"
    },
    {
        id:3,
        title: "Samsung Galaxy A04e",
        color: "orange",
        imageUrl : "images/p7.png"
    },
    {
        id:4,
        title: "Samsung Galaxy A60",
        color: "blue",
        imageUrl : "images/p4.webp"
    },
    {
        id:5,
        title: "Samsung Galaxy Z Fold5",
        color: "selver",
        imageUrl : "images/p5.png"
    },
    {
        id:6,
        title: "Samsung Galaxy S24 Ultra",
        color: "grey",
        imageUrl : "images/p6.webp",
    },
    {
        id:7,
        title: "Samsung Galaxy Z Flip4",
        color: "black",
        imageUrl : "images/p7.png",
    },
    {
        id:8,
        title: "Samsung Galaxy Z Fold3",
        color: "black",
        imageUrl : "images/p8.webp",
    },
]


function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${item.imageUrl}" class="card-img-top " alt="..." >
        <div class="card-body text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="mb-0">the new mobile from oppo company</p>
          <span class="d-block mb-3">Color: ${item.color}</span>
            <div class="d-flex">
                <button type="button" class="btn btn-info text-white rounded-10 w-50" onClick="addToCart(${item.id})">Add To Cart</button>
                <i class="far fa-heart ms-auto mt-2 fs-4" role="button"></i>
               </div>

        </div>
      </div>
        `
    })
    allProducts.innerHTML = y;
}

drawItems ()

// ************************************************************Add to Cart from local storage where refrech the page***************************************************************************************

let cartProductDiv = document.querySelector(".carts_products div")

let badge = document.querySelector(".badge")


let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}


// ****************************************************************Add to Cart on click***********************************************************

function addToCart(id){

        if(localStorage.getItem("username"))
        {

            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
        
            badge.style.display = "block"
            badge.innerHTML = cartProductsLength.length

    }
    else {
        window.location ="login.html"
    }
 }


// **********************************************************hide and show the list porducts in the cart on click***************************************************************************************

let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){

     if(cartProductDiv.innerHTML !=""){

         if(cartsProducts.style.display=="block"){

            cartsProducts.style.display="none"

         }
         else {

            cartsProducts.style.display="block";
         }
     } 
}
