// Flotación para personaje e íconos
const elementos = document.querySelectorAll('.personaje, .icono');

elementos.forEach(el => {
  el.animate(
    [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' }
    ],
    {
      duration: 2000,
      iterations: Infinity
    }
  );
});
const workTitle = document.querySelector('.work-title');

workTitle.addEventListener('mousemove', (e) => {
  const rect = workTitle.getBoundingClientRect();
  const x = e.clientX - rect.left; // posición del mouse dentro de la imagen
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -1 * (y - centerY) / 10; // más división = menos inclinación
  const rotateY = (x - centerX) / 10;

  workTitle.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

workTitle.addEventListener('mouseleave', () => {
  workTitle.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
});
.work-section {
  background-color: black;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-title {
  width: 300px;
  margin-bottom: 40px;
  transition: transform 0.4s ease;
}

.work-title:hover {
  transform: rotateX(10deg) rotateY(10deg);
}

.work-gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 40px;
  padding-bottom: 20px;
}

.work-gallery::-webkit-scrollbar {
  height: 8px;
}

.work-gallery::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 4px;
}

.work-image {
  height: 400px;
  flex: 0 0 auto;
  scroll-snap-align: center;
  transition: transform 0.4s ease;
}

.work-image:hover {
  transform: rotateY(10deg);
}
<script>
document.querySelectorAll('.tilt-image').forEach(img => {
  img.addEventListener('mousemove', (e) => {
    const bounds = img.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});
</script>
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return; // No hacer nada si no existe

  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });
  const date = now.toLocaleDateString("en-GB", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  clock.innerHTML = ⁠ ${time}<br>${date}<br>LONDON ⁠;
}

setInterval(updateClock, 1000);
updateClock();
