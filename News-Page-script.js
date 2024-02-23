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
  let slides = document.getElementsByClassName("news");
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

const modals = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0]

btn.onclick = function(){
    modals.style.display = "block";
}

span.onclick = function(){
    modals.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modals){
        modals.style.display = "none";
    }
}

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



function openModal(modalesId) {
    document.getElementById(modalesId).style.display = 'flex';
}

function closeModal(modalesId) {
    document.getElementById(modalesId).style.display = 'none';
}