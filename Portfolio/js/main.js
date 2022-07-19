let mainMenu = document.querySelector('.header__list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('header__list--active')
})

let modal = document.querySelector('.modal')
let btn = document.querySelector('.btn-primary');
let close = document.querySelector('.btn-close');
btn.addEventListener('click', () => {
    modal.style.display = 'block';
})
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

let menuLinks = document.querySelectorAll('.header__link');

for (let menuLink in menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElement = menuLink.getAttribute('href');
        let coords = document.querySelector(scrollToElement).offsetTop;
        window.scrollTo({top: coords - 100, behavior: "smooth"})
    })
}