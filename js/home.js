const isAdmin = localStorage.getItem("isAdmin");


// function signOut() {
//     location.replace("./index.html");
//   }

let Cart = [];

localStorage.setItem("cart", JSON.stringify(Cart));
const getProductById=(ele,id)=>{
    const filterEle=ele.filter((e)=>{
      return e.id==id
    })
    return filterEle
  }
  const CarLocal=localStorage.getItem('cart')
  const carConvert=JSON.parse(CarLocal)
function addToCart(e) {
  const productId = e.target.parentNode.parentNode.parentNode.id
  const car = getProductById(staticProducts, productId)
  car[0].quantity = Number(car[0].quantity ) + 1;
  car[0].quantity =`${car[0].quantity++}`;
  // console.log(car[0])
  // console.log(staticProducts,55555)
  const itemContainer = document.querySelector('#items-container');
  itemContainer.textContent=""
  renderStaticProducts()
  
  // const 
}
const addToLocal=(e)=>{
  const productId = e.target.parentNode.parentNode.parentNode.id

  const car = getProductById(staticProducts, productId)
  carConvert.push(car[0])
  console.log( carConvert ,58585)
  localStorage.setItem("cart",JSON.stringify(carConvert))

}

localStorage.setItem("productID", null);
let data = JSON.parse(window.localStorage.getItem("ArrayOfProducts"));
  if (data) {
    staticProducts = data 
  }

  if (isAdmin != "true") {
    btnAddProduct.children[0].setAttribute("class", "fa fa-shopping-cart");
    btnAddProduct.setAttribute("href", "./cart.html");
  }
