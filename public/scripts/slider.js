const slidesContainer = document.querySelector('.slides-container');
const slides = Array.from(document.querySelectorAll('.slide'));

const marquesina = document.querySelector('.marquesina');
const textoMarquesina = document.querySelector('.texto-marquesina');

let currentSlide = 0;
const slideWidth = slidesContainer.offsetWidth;
const slideInterval = 3000;
let slideTimer;

function showSlide(index) {
  const slideOffset = index * -slideWidth;
  slidesContainer.style.transform = `translateX(${slideOffset}px)`;
}

function startSlideTimer() {
  slideTimer = setInterval(() => {
    nextSlide();
  }, slideInterval);
}

function stopSlideTimer() {
  clearInterval(slideTimer);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

startSlideTimer();

slidesContainer.addEventListener('mouseenter', stopSlideTimer);

slidesContainer.addEventListener('mouseleave', startSlideTimer);

// AHORA LA MARQUESINA



let posicion = 0;
let velocidad = 3; 

function moverMarquesina() {
  posicion -= velocidad;
  textoMarquesina.style.transform = `translateX(${posicion}px)`;

  if (posicion < -textoMarquesina.offsetWidth) {
    posicion = marquesina.offsetWidth;
  }

  requestAnimationFrame(moverMarquesina);
}

moverMarquesina();