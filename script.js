let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (index + totalItems) % totalItems;

  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 5000);




function menu(){
  
  var menu = document.getElementById('menu');

  menu.classList.toggle('active');
  
}
