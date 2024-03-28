

// ********************************************Display the products from local storage in the html**********************************************************************


let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

if(ProductsInCart){
    let ProductsInCartObj = JSON.parse(ProductsInCart) ;
    drawCartProducts(ProductsInCartObj);
}

function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${item.imageUrl}" class="card-img-top " alt="..." >
        <div class="card-body text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="mb-0">the new mobile from oppo company</p>
          <span class="d-block mb-3">Color: ${item.color}</span>
            <div class="d-flex">
                <button type="button" class="btn btn-info text-white rounded-10 w-75" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                <i class="far fa-heart ms-auto mt-2 fs-4" role="button"></i>
               </div>

        </div>
      </div>
        `
    })
    allProducts.innerHTML = y;
}


// ************************************************Remove item from the cart********************************************************************

function removeFromCart(id){

    let ProductsInCartObj = JSON.parse(localStorage.getItem("ProductsInCart")) ;
    let index = ProductsInCartObj.findIndex((item) => item.id === id);

    if(index >= 0){

        ProductsInCartObj.splice(index,1)
        localStorage.setItem("ProductsInCart" , JSON.stringify(ProductsInCartObj) )
        drawCartProducts(ProductsInCartObj);
    
        if(ProductsInCartObj.length == 0){
    
            window.location= "index.html"
        }

    }
    else{
        alert("The item not found")
    }



}