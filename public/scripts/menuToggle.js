const boton = document.querySelector('.bars__menu');
const linea1 = document.querySelector('.line1__bar');
const linea2 = document.querySelector('.line2__bar');
const linea3 = document.querySelector('.line3__bar');
const navigation = document.querySelector('.navigation');

boton.addEventListener('click', () => {
    console.log('hiciste clic');
    linea1.classList.toggle('activeline1__bar');
    linea2.classList.toggle('activeline2__bar');
    linea3.classList.toggle('activeline3__bar');
    navigation.classList.toggle('active__navigation');
});