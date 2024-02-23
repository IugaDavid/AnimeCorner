const slidesContainer = document.querySelector('.slides');
let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slidesContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosX = e.clientX;
    prevTranslate = currentTranslate;

    slidesContainer.style.transition = 'none';
});

slidesContainer.addEventListener('mouseup', () => {
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && canMoveRight()) moveRight();
    if (movedBy > 100 && canMoveLeft()) moveLeft();

    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
});

slidesContainer.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const currentPosX = e.clientX;
        currentTranslate = prevTranslate + currentPosX - startPosX;
        setTransform(currentTranslate);
    }
});

slidesContainer.addEventListener('mouseleave', () => {
    isDragging = false;

    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    setTransform(currentTranslate);
});

function setTransform(translate) {
    slidesContainer.style.transform = `translateX(${translate}px)`;
}

function moveLeft() {
    currentTranslate += 100;
    setTransform(currentTranslate);
}

function moveRight() {
    currentTranslate -= 100;
    setTransform(currentTranslate);
}

function canMoveLeft() {
    return currentTranslate < 0;
}

function canMoveRight() {
    const lastImage = document.querySelector('.slides img:last-child');
    const containerWidth = slidesContainer.offsetWidth;
    const slidesWidth = lastImage.offsetLeft + lastImage.offsetWidth;
    return slidesWidth > containerWidth - currentTranslate;
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel .slide');
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);



