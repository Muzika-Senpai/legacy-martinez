let slideIndex = 1;

function showSlides() {
  const slides = document.querySelector('.slides');
  const slidesCount = document.querySelectorAll('.slide').length;

  if (slideIndex > slidesCount) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slidesCount;
  }

  slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;

  // Update active class for miniature images
  const navItems = document.querySelectorAll('.indicator');
  navItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index + 1 === slideIndex) {
      item.classList.add('active');
    }
  });
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

function goToSlide(n) {
  slideIndex = n;
  showSlides();
}

// Set interval for automatic sliding (Optional)
setInterval(() => {
  changeSlide(1);
}, 5000); // Change slide every 3 seconds

// Resize event listener for responsiveness
window.addEventListener('resize', showSlides);

// Initial presentation
showSlides();