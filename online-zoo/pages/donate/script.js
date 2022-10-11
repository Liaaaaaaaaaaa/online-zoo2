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