let mainMenu = document.querySelector('.header__list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('header__list--active');
    mainHamburger.classList.toggle('hamburger--active');
})

let modal = document.querySelector('.modal')
let btn = document.querySelector('.btn-primary');
let close = document.querySelector('.btn-close');
btn.addEventListener('click', () => {
    modal.style.display = 'block';
})

close.addEventListener('click', () => {
    document.querySelector('.feedback__form').reset();
    modal.style.display = 'none';
});

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.feedback__form').reset();
        modal.style.display = 'none';
    }
})

let menuLinks = document.querySelectorAll('.header__link');

for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        const scrollToElement = menuLink.getAttribute('href');
        const coords = document.querySelector(scrollToElement).offsetTop;
        window.scrollTo({top: coords - 100, behavior: "smooth"})
    })
}
let name = document.querySelector('.name__value').value;
let phone = document.querySelector('.phone__value').value;
let submit = document.querySelector('.btn-submit');


