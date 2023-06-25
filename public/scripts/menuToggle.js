const botonMenu = document.querySelector('.bars__menu');
const linea1 = document.querySelector('.line1__bar');
const linea2 = document.querySelector('.line2__bar');
const linea3 = document.querySelector('.line3__bar');
const navigation = document.querySelector('.navigation');
const categoriasNav = document.querySelector('.categorias-nav');
const categoriasNavBoton = document.querySelector('.boton-categorias-nav');




botonMenu.addEventListener('click', () => {
    console.log('hiciste clic');
    linea1.classList.toggle('activeline1__bar');
    linea2.classList.toggle('activeline2__bar');
    linea3.classList.toggle('activeline3__bar');
    navigation.classList.toggle('active__navigation');
});

categoriasNavBoton.addEventListener('click', () => {
    categoriasNav.classList.toggle('active-categorias');
});

