let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("manga");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}




function filterMovies(selectedGenre) {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
      const movieGenres = movie.getAttribute('data-genre').split(',');

      if (selectedGenre === 'all' || movieGenres.includes(selectedGenre)) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  }