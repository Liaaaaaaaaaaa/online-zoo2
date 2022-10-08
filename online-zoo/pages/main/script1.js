// import {Article} from "../main/js/Article"

// window.onload = function(){
//     const navigation = document.querySelector('.navigation');
// navigation.insertAdjacentHTML('afterbegin', '<div class="logo__burger-menu"><a href="#H"><div class="logo"> <h1 class="logo__text logo-band">PetStory online<img src="./assets/icons/logo-img.svg" alt="logo"class="logo__img"></img></h1></div></a> <div class="burger-cross">&#xD7</div></div>');
// }


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
    if (!headerNavigation.contains(e.target) ) {
        closeBurgerMenu();
    }
  });
