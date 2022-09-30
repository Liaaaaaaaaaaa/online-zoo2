const buttonDonate = document.querySelectorAll(".donate");


function pageDonate () {
    document.querySelector(".promo__content").classList.add("remove");
    document.querySelector(".backstage").classList.add("remove");
    document.querySelector(".pets").classList.add("remove");
    document.querySelector(".pick-friend").classList.add("remove");
    document.querySelector(".testimonials").classList.add("remove"); 

}

for (let n = 0; n < (buttonDonate.length); n++) {
    buttonDonate[n].addEventListener("click", pageDonate);
}


// console.log(buttonDonate[n])