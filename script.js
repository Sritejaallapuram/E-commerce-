let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

if(cartCount){
    cartCount.innerText = cart.length;
}

// ADD TO CART

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName =
        card.querySelector("h3").innerText;

        const productPrice =
        card.querySelector("p").innerText;

        const productImage =
        card.querySelector("img").src;

        const product = {

            name: productName,
            price: productPrice,
            image: productImage

        };

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        if(cartCount){
            cartCount.innerText = cart.length;
        }

        alert(productName + " added to cart!");
    });

});


// SEARCH FUNCTION

const searchInput =
document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup", () => {

const filter =
searchInput.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach((card) => {

const productName =
card.querySelector("h3")
.innerText
.toLowerCase();

if(productName.includes(filter)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}


// NEWSLETTER BUTTON

const subscribeBtn =
document.querySelector(".newsletter-box button");

if(subscribeBtn){

subscribeBtn.addEventListener("click", () => {

const email =
document.querySelector(".newsletter-box input").value;

if(email === ""){

alert("Please enter your email");

}else{

alert("Subscribed Successfully!");

document.querySelector(".newsletter-box input").value = "";

}

});

}


// CATEGORY CARDS CLICK EFFECT

const categories =
document.querySelectorAll(".category-card");

categories.forEach((category) => {

category.addEventListener("click", () => {

alert(
"You selected " +
category.querySelector("h3").innerText
);

});

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});