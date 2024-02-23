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

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


//jujutsu kaisen
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0]

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

//demon slayer
const modal1 = document.getElementById("myModal1");
const btn1 = document.getElementById("myBtn1");
const span1 = document.getElementsByClassName("close1")[0]

btn1.onclick = function(){
    modal1.style.display = "block";
}

span1.onclick = function(){
    modal1.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = "none";
    }
}

//blue lock
const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("myBtn2");
const span2 = document.getElementsByClassName("close2")[0]

btn2.onclick = function(){
    modal2.style.display = "block";
}

span2.onclick = function(){
    modal2.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal2){
        modal2.style.display = "none";
    }
}

//one punch man
const modal3 = document.getElementById("myModal3");
const btn3 = document.getElementById("myBtn3");
const span3 = document.getElementsByClassName("close3")[0]

btn3.onclick = function(){
    modal3.style.display = "block";
}

span3.onclick = function(){
    modal3.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal3){
        modal3.style.display = "none";
    }
}

//erased
const modal4 = document.getElementById("myModal4");
const btn4 = document.getElementById("myBtn4");
const span4 = document.getElementsByClassName("close4")[0]

btn4.onclick = function(){
    modal4.style.display = "block";
}

span4.onclick = function(){
    modal4.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal4){
        modal4.style.display = "none";
    }
}

//berserk
const modal5 = document.getElementById("myModal5");
const btn5 = document.getElementById("myBtn5");
const span5 = document.getElementsByClassName("close5")[0]

btn5.onclick = function(){
    modal5.style.display = "block";
}

span5.onclick = function(){
    modal5.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal5){
        modal5.style.display = "none";
    }
}


