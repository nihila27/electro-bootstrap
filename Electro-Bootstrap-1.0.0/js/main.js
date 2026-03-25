let cart = 0;
let total = 0;

let products = [
{name:"LED TV", price:50, img:"img/tv.jpg"},
{name:"Smart Watch", price:80, img:"img/watch.jpg"},
{name:"Digital Camera", price:120, img:"img/camera.webp"},
{name:"Bluetooth Speaker", price:70, img:"img/bluetooth.jpg"},
{name:"Ceiling Fan", price:65, img:"img/fan.jpg"},
{name:"Electric Iron", price:30, img:"img/iron box.jpg"},
{name:"Laptop", price:750, img:"img/laptop.jpg"},
{name:"iPad Tablet", price:520, img:"img/ipad.webp"},
{name:"Smart Mobile", price:420, img:"img/mobile.avif"}
];

function loadProducts(){

let container = document.getElementById("productList");

products.forEach((p,index)=>{

let animation = index % 2 === 0 ? "fade-right" : "fade-left";

container.innerHTML += `
<div class="col-6 col-md-4" data-aos="${animation}">
<div class="product">
<img src="${p.img}">
<h5>${p.name}</h5>
<p>$${p.price}</p>
<button onclick="addCart('${p.name}',${p.price})" class="btn btn-primary">Add to Cart</button>
<button onclick="buyNow('${p.name}')" class="btn btn-success">Buy Now</button>
</div>
</div>
`;

});

}

function addCart(product,price){

cart++;
total+=price;

document.getElementById("cartCount").innerText = cart;
document.getElementById("totalPrice").innerText = total;

let item=document.createElement("li");

item.className="list-group-item d-flex justify-content-between align-items-center";

item.innerHTML=product+" ($"+price+") <button class='btn btn-sm btn-danger'>❌</button>";

item.querySelector("button").onclick=function(){

item.remove();

cart--;
total-=price;

document.getElementById("cartCount").innerText = cart;
document.getElementById("totalPrice").innerText = total;

};

document.getElementById("cartList").appendChild(item);

}

function buyNow(product){
alert(product+" order placed successfully!");
}

function toggleCart(){

let cartBox=document.querySelector(".corner-box");

if(cartBox.style.display==="none" || cartBox.style.display===""){
cartBox.style.display="block";
}else{
cartBox.style.display="none";
}

}

function searchProduct(){

let input=document.querySelector(".search-box").value.toLowerCase();

document.querySelectorAll("#productList > div").forEach(col=>{

let text=col.innerText.toLowerCase();

col.style.display=text.includes(input)?"":"none";

});

}

loadProducts();