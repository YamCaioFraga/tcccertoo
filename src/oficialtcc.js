

const totalSlides = 4; // Número total de slides
let currentSlide = 1;

function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById(`slide${currentSlide}`).checked = true;
}

// Inicia o autoplay
setInterval(nextSlide, 5000);

// Função para navegar pelos slides manualmente
document.querySelectorAll('.controls label').forEach((label, index) => {
  label.addEventListener('click', () => {
      currentSlide = index + 1;
      document.getElementById(`slide${currentSlide}`).checked = true;
  });
});

// Função para arrastar e trocar slides
let isMouseDown = false;
let startX;

document.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX;
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const xDiff = e.pageX - startX;
  if (xDiff > 50) { // Arrastou para a direita
      isMouseDown = false; // Para evitar múltiplas trocas
      currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1; // Volta um slide
      document.getElementById(`slide${currentSlide}`).checked = true;
  } else if (xDiff < -50) { // Arrastou para a esquerda
      isMouseDown = false; // Para evitar múltiplas trocas
      currentSlide = currentSlide % totalSlides + 1; // Avança um slide
      document.getElementById(`slide${currentSlide}`).checked = true;
  }
});

document.addEventListener('');

