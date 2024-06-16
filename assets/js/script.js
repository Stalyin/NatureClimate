'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Cerrar el modal si el usuario hace clic fuera de la ventana modal
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function openTopicModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeTopicModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Cerrar el modal si el usuario hace clic fuera de la ventana modal
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

document.getElementById('toggleButton').addEventListener('click', function(event) {
  event.preventDefault();
  var content = document.getElementById('content');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    this.querySelector('.span').textContent = 'Ocultar';
  } else {
    content.classList.add('hidden');
    this.querySelector('.span').textContent = 'Leer más';
  }
});


document.getElementById('openModalBtn').addEventListener('click', function() {
  document.getElementById('myModal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('myModal').style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
});

function openImage(imageUrl) {
  var overlay = document.querySelector(".overlay");
  var expandedImage = document.getElementById("expandedImage");

  expandedImage.src = imageUrl;
  overlay.classList.add("active");
}

function closeImage() {
  var overlay = document.querySelector(".overlay");
  overlay.classList.remove("active");
}

function enviarWhatsapp() {
  // Obtener los valores de nombre y pregunta
  var nombre = document.getElementById('nombre').value;
  var pregunta = document.getElementById('pregunta').value;

  // Número de WhatsApp al que se enviará el mensaje
  var numeroWhatsapp = '+593964130328';

  // Generar el mensaje con los datos
  var mensaje = 'Hola! Mi nombre es ' + nombre + '. Tengo la siguiente pregunta: ' + pregunta;

  // Construir la URL de WhatsApp
  var whatsappUrl = 'https://wa.me/' + numeroWhatsapp + '?text=' + encodeURIComponent(mensaje);

  // Redirigir a WhatsApp
  window.open(whatsappUrl, '_blank');
}
