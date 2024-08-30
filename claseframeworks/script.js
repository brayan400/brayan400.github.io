// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion-button');
  const collapse = item.querySelector('.accordion-collapse');

  button.addEventListener('click', () => {
    // Toggle the collapse state
    collapse.classList.toggle('show');
  });
});

// Obtenemos los elementos del carousel
const carousel = document.getElementById('carouselExample');
const carouselInner = carousel.querySelector('.carousel-inner');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');
const slides = carouselInner.children;

// Agregamos event listeners a los botones de navegación
prevButton.addEventListener('click', () => {
  navigateToPrevSlide();
});

nextButton.addEventListener('click', () => {
  navigateToNextSlide();
});

// Función para navegar al slide anterior
function navigateToPrevSlide() {
  const currentSlide = carouselInner.querySelector('.carousel-item.active');
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
  } else {
    // Si estamos en el primer slide, vamos al último
    const lastSlide = slides[slides.length - 1];
    currentSlide.classList.remove('active');
    lastSlide.classList.add('active');
  }
}

// Función para navegar al slide siguiente
function navigateToNextSlide() {
  const currentSlide = carouselInner.querySelector('.carousel-item.active');
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  } else {
    // Si estamos en el último slide, vamos al primero
    const firstSlide = slides[0];
    currentSlide.classList.remove('active');
    firstSlide.classList.add('active');
  }
}