const slidesData = [
  {
    src: './assets/pexels-pixabay-326900.jpg',
    alt: 'Bird soaring in the sky',
    caption: 'Bird soaring in the sky',
  },
  {
    src: './assets/pexels-pixabay-60013.jpg',
    alt: 'Vast and beautiful desert',
    caption: 'Vast and beautiful desert',
  },
  {
    src: './assets/pexels-pixabay-158063.jpg',
    alt: 'Lush and vibrant nature',
    caption: 'Lush and vibrant nature',
  },
];

let currentSlide = 0;

function showSlide(index) {
  const slideImg = document.getElementById('slide-img');
  const slideCaption = document.getElementById('slide-caption');

  slideImg.src = slidesData[index].src;
  slideImg.alt = slidesData[index].alt;
  slideCaption.textContent = slidesData[index].caption;

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slidesData.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
  showSlide(currentSlide);
}

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
