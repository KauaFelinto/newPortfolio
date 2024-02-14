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





function verMais(){
  var ocultBtn = document.getElementById('ocultar');
  var moreBtn = document.getElementById('more');
  var more = document.querySelector('.ocult-responsive');

  more.style.display = "flex";
  moreBtn.style.display = 'none';
  ocultBtn.style.display = 'block'
}

function ocultar(){
  var ocultBtn = document.getElementById('ocultar');
  var moreBtn = document.getElementById('more');
  var more = document.querySelector('.ocult-responsive');

  more.style.display = "none";
  moreBtn.style.display = 'block';
  ocultBtn.style.display = 'none';
}