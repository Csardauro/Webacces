// Obtener elementos del carrusel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');

// Obtener la cantidad de elementos en el carrusel
const totalItems = carouselItems.length;

// Calcular el ancho de un elemento en el carrusel
const itemWidth = carouselItems[0].offsetWidth;

// Inicializar el índice actual y el desplazamiento
let currentIndex = 0;
let translateX = 0;

// Función para actualizar el estado del carrusel
const updateCarousel = () => {
  // Calcular el desplazamiento en función del índice actual
  translateX = -currentIndex * itemWidth;

  // Aplicar el desplazamiento al carrusel
  carousel.style.transform = `translateX(${translateX}px)`;

  // Marcar el indicador activo
  carouselIndicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
};

// Función para avanzar al siguiente elemento
const nextItem = () => {
  if (window.innerWidth < 768 && currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
};

// Función para retroceder al elemento anterior
const prevItem = () => {
  if (window.innerWidth < 768 && currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
};

// Agregar eventos click a los indicadores
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      currentIndex = index;
      updateCarousel();
    }
  });
});

// Agregar eventos swipe para dispositivos móviles
let touchStartX = 0;
carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;

  if (touchDiff > 0 && currentIndex > 0 && window.innerWidth < 768) {
    prevItem();
  } else if (touchDiff < 0 && currentIndex < totalItems - 1 && window.innerWidth < 768) {
    nextItem();
  }
});

// Agregar eventos de teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && currentIndex > 0 && window.innerWidth < 768) {
    prevItem();
  } else if (e.key === 'ArrowRight' && currentIndex < totalItems - 1 && window.innerWidth < 768) {
    nextItem();
  }
});

// Actualizar el carrusel inicialmente
updateCarousel();

// Actualizar el carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    currentIndex = 0;
    updateCarousel();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar el mensaje a la base de datos (simulado)
    // Aquí puedes agregar la lógica para enviar a tu base de datos
    // y a tu dirección de correo electrónico

    // Mostrar un mensaje de agradecimiento
    alert('Gracias por registrarse');

    // Limpiar el formulario
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function() {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active");
  });
});
