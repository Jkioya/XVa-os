const targetDate = new Date("2025-09-20T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<div class='reloj-terminado'>¡El gran día ha llegado!</div>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = days.toString().padStart(2, "0");
  document.getElementById("horas").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = seconds.toString().padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();




const items = document.querySelectorAll('.timeline-item');
const timeline = document.querySelector('.timeline');
const timelineLine = document.querySelector('.timeline-line');

let timelineTop = 0;
let timelineHeight = 0;

function calcularDimensiones() {
  timelineTop = timeline.offsetTop;
  timelineHeight = timeline.offsetHeight;
}

function actualizarLinea() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  const porcentaje = Math.min(
    100,
    Math.max(0, ((scrollTop + windowHeight / 2 - timelineTop) / timelineHeight) * 115)
  );

  document.documentElement.style.setProperty('--scroll-line-height', porcentaje + '%');
}

function actualizarVisibilidad() {
  const triggerBottom = window.innerHeight * 0.45;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const bottom = item.getBoundingClientRect().bottom;

    if (top < triggerBottom && bottom > 0) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

function actualizarTodo() {
  actualizarLinea();
  actualizarVisibilidad();
}

// Eventos
window.addEventListener('scroll', actualizarTodo);
window.addEventListener('resize', () => {
  calcularDimensiones();
  actualizarTodo();
});
window.addEventListener('load', () => {
  calcularDimensiones();
  actualizarTodo();
});

  




