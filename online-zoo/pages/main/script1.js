// import {Article} from "../main/js/Article"

//---------------------Burger-menu

const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const crossBurgerMenu = document.querySelector('.burger-cross');
const logoBurgerMenu = document.querySelector('.logo__burger-menu')
const signatureNone = document.querySelector('.signature-none')

const openBurgerMenu = () => {
    logoBurgerMenu.classList.add('display-flex');
    headerNavigation.classList.add('_active-menu');
    signatureNone.classList.add('display-block')
}

hamburger.addEventListener("click", openBurgerMenu);

console.log(openBurgerMenu)

function closeBurgerMenu() {
    console.log('closeBurgerMenu')
    headerNavigation.classList.remove('_active-menu');

}

crossBurgerMenu.addEventListener("click", closeBurgerMenu);

document.addEventListener('mousedown', (e) => {
    if (!headerNavigation.contains(e.target)) {
        closeBurgerMenu();
    }
});


//-------------Slider-pets

const petsSwitch1 = document.querySelector('.pets__switch1');
const petsSwitch2 = document.querySelector('.pets__switch2');
let petsContainer = document.querySelector('.pets_container');
const petsContainer0 = document.querySelector('.pets_container0');
const layout3Column = document.querySelector('.layout-3-column');
const petsContainerWrapper = document.querySelector('.pets-container__wrapper');
const petContainers = document.querySelectorAll('.pet_container');

console.log(petsContainer);

petsSwitch2.addEventListener('click', petsContainerLeft);
let step2 = 1;
let marginRight = 92 + "px";

function petsContainerLeft() {

    petsContainerWrapper.style.width = 1158 + "px";
    // petsContainer.style.marginLeft = 150 + "px";
    // petsContainer.style.marginRight = marginRight;
    petsContainer.insertAdjacentHTML('afterend', ' <div class="pets_container pets_container1"><div class="pet__container pet__container1 "><img src="./assets/images/pet2.jpg" alt="pet1" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">giant Pandas</h5><p>Native to Southwest China</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan"></div></div><div class="pet__container pet__container2 "><img src="./assets/images/pet2.jpg" alt="pet2" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Eagles</h5><p>Native to South America</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div><div class="pet__container pet__container3 "><img src="./assets/images/pet3.jpg" alt="pet3" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Gorillas</h5><p>Native to Congo</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan"></div></div><div class="pet__container pet__container4"><img src="./assets/images/pet4.jpg" alt="pet4" class="pet Two-toed"><img src="./assets/images/pet4-2.jpg" alt="pet4" class="pet alligators"><div class="pet-about"><div class="pet-description"><h5 class="pet_title Two-toed">Two-toed Sloth</h5><p class="Two-toed">Mesoamerica, South America</p><h5 class="pet_title alligators">alligators</h5><p class=" alligators">Native to Southeastern U. S.</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan Two-toed"><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish alligators"></div></div><div class="pet__container pet__container5"><img src="./assets/images/pet5.jpg" alt="pet5" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">cheetahs</h5><p>Native to Africa</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div><div class="pet__container pet__container6"><img src="./assets/images/pet6.jpg" alt="pet6" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Penguins</h5><p>Native to Antarctica</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div></div>');


    petsContainerWrapper.style.left = step2 * (-1158) + "px";
    // petsContainer0.classList.add('display-none');
    //  if (petsContainerWrapper.style.left = -1258 + "px") {
    // setTimeout(() => petsContainer[0].remove(), 1000);
    // setTimeout(() => petsContainer[0].remove(), 1000);
    // petsContainer[0].shift();
    // }
    // petsContainer = document.querySelectorAll('.pets_container');
    // console.log(petsContainer);
    // Array.from(petsContainer);
    // console.log(petsContainer);
    // setTimeout(() => petsContainer0.remove(), 2000);  
    step2++;
}



// console.log(petsContainer);
// petsContainer = document.querySelector('.pets_container');
// // console.log(petsContainer);
// marginLeft = 70 + "px"



petsSwitch1.addEventListener('click', petsContainerRight);
let step1 = 1;
// let marginLeft = 92 + "px";

function petsContainerRight() {
    console.log('ty');
    petsContainerWrapper.style.width = 1158 + "px";
    // petsContainer.style.marginLeft = 150 + "px";
    // petsContainer.style.marginLeft = marginRight;
    petsContainer.insertAdjacentHTML('beforebegin', ' <div class="pets_container pets_container1"><div class="pet__container pet__container1 "><img src="./assets/images/pet2.jpg" alt="pet1" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">giant Pandas</h5><p>Native to Southwest China</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan"></div></div><div class="pet__container pet__container2 "><img src="./assets/images/pet2.jpg" alt="pet2" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Eagles</h5><p>Native to South America</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div><div class="pet__container pet__container3 "><img src="./assets/images/pet3.jpg" alt="pet3" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Gorillas</h5><p>Native to Congo</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan"></div></div><div class="pet__container pet__container4"><img src="./assets/images/pet4.jpg" alt="pet4" class="pet Two-toed"><img src="./assets/images/pet4-2.jpg" alt="pet4" class="pet alligators"><div class="pet-about"><div class="pet-description"><h5 class="pet_title Two-toed">Two-toed Sloth</h5><p class="Two-toed">Mesoamerica, South America</p><h5 class="pet_title alligators">alligators</h5><p class=" alligators">Native to Southeastern U. S.</p></div><img src="./assets/icons/food-banan.svg" alt="food" class="food-banan Two-toed"><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish alligators"></div></div><div class="pet__container pet__container5"><img src="./assets/images/pet5.jpg" alt="pet5" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">cheetahs</h5><p>Native to Africa</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div><div class="pet__container pet__container6"><img src="./assets/images/pet6.jpg" alt="pet6" class="pet"><div class="pet-about"><div class="pet-description"><h5 class="pet_title">Penguins</h5><p>Native to Antarctica</p></div><img src="./assets/icons/food-fish-meet.svg" alt="food" class="food-fish"></div></div></div>');

    petsContainerWrapper.style.right = step1 * (-1158) + "px";
    step1++;
    console.log(step1);

}


//---------Testimonials scroll

const scrollTestimination = document.querySelector('.slider');
const layout4Column = document.querySelector('.layout-4-column');
const testimonialBlock = document.querySelectorAll('.testimonial__block');

let stepScroll = 1;

scrollTestimination.addEventListener("input", scrollNext);

console.log(scrollTestimination);

function scrollNext() {
    console.log(testimonialBlock);
    // testimonialBlock.style.width = 268 + 'px';
        let slades2 = document.querySelectorAll('.testimonial__block');console.log(stepScroll);
        console.log(slades2);
        slades2[0].remove();
    if (stepScroll%3 ===  0) {
        layout4Column.insertAdjacentHTML('beforeend', '  <div class="testimonial__block"><div class="testimonials__indentification"><img src="./assets/icons/testimonials_icon3.svg" alt="foto-person" class="foto-person"><div class="testimonials__person"><div class="name">Michael John </div><div class="from">Local Austria Today</div></div></div><div class="testimonials__text"><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p></div></div>  ');
 }
    else {
        if (stepScroll%4 ===  0) {
            layout4Column.insertAdjacentHTML('beforeend', '  <div class="testimonial__block"><div class="testimonials__indentification"><img src="./assets/icons/testimonials_icon2.svg" alt="foto-person" class="foto-person"><div class="testimonials__person"><div class="name">Michael John </div><div class="from">Local Austria Today</div></div></div><div class="testimonials__text"><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p></div></div>  ');
     } else {
        layout4Column.insertAdjacentHTML('beforeend', '  <div class="testimonial__block"><div class="testimonials__indentification"><img src="./assets/icons/testimonials_icon1.svg" alt="foto-person" class="foto-person"><div class="testimonials__person"><div class="name">Michael John </div><div class="from">Local Austria Today</div></div></div><div class="testimonials__text"><p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.</p></div></div>  ');
     }
        
    }
    stepScroll++;
}