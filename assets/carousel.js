let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;
const delay = 5000;
let nextNow = 0;

function cycleItems() {
  const itemToShow = Math.abs(currentIndex % itemCount);
  items.forEach((item, index) => {
    item.style.transform = `translateX(${itemToShow * -100}%)`;
  });
  updateDots();
}

function createDots() {
  const dotsContainer = document.querySelector('.carousel-dots');
  for (let i = 0; i < itemCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('data-index', i);
    dot.onclick = function() {
      currentIndex = parseInt(this.getAttribute('data-index'));
      cycleItems();
      updateDots();
      resetAutoplay();
    };
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  const itemToShow = Math.abs(currentIndex % itemCount);
  dots.forEach((dot, index) => {
    if (index === itemToShow) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function autoplay() {
  currentIndex++;
  cycleItems();
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(autoplay, delay);
}

// Initialize carousel with dots
createDots();

// Start Autoplay
let autoplayInterval = setInterval(autoplay, delay);

const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
  console.log("in");
  nextNow = Date.now();
  clearInterval(autoplayInterval);
});

carousel.addEventListener('mouseleave', () => {
  console.log("out");
  
  if((Date.now() - nextNow) >= 5000){
    currentIndex++;
    cycleItems();
    autoplayInterval = setInterval(autoplay, delay);
  } else{
    setTimeout(function(){
      currentIndex++;
      cycleItems();
      autoplayInterval = setInterval(autoplay, delay);
    }, (5000-(Date.now() - nextNow)));
  }
});