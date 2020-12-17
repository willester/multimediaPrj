//JS code for filtering poster
const poster=document.getElementById("poster");
const filterBtn=document.getElementById("img_filter");
function changeFilter(obj){
  //filtering to black and white
  if(obj.innerHTML=="Filter image"){
    poster.style.filter="grayscale(75%)";
    obj.innerHTML="Black and white";
    return;
  }
  //filtering to sepia
  if(obj.innerHTML=="Black and white"){
    obj.innerHTML="Sepia";
    poster.style.filter="sepia(75%)";
    return;
  }
  //filtering to high contrast
  if(obj.innerHTML=="Sepia"){
    obj.innerHTML="High contrast";
    poster.style.filter="contrast(75%)";
    return;
  }
  //coming back to no filter
  if(obj.innerHTML=="High contrast"){
    obj.innerHTML="No filter";
    poster.style.filter="none";
    return;
  }
}


//JS for audio player -> player-fantastic.js, player-python.js, player-godfather.js, player-empire.js

//JS for video controls 

//JS code for filtering video
let video=document.querySelector("video");
function blackwhite(){
  video.style.filter = "grayscale(100%)"
}

function sepia(){
  video.style.filter = "sepia(100%)"
}

function invert(){
  video.style.filter = "invert(100%)"
}

function nofilter(){
  video.style.filter = "none"
}
// let filterBtn=document.getElementById("video_filter");
// function filterVideo(obj){
//   //filtering to black and white
//   if(obj.innerHTML=="Filter video"){
//     video.style.filter="grayscale(75%)";
//     obj.innerHTML="Black and white";
//     return;
//   }
//   //filtering to sepia
//   if(obj.innerHTML=="Black and white"){
//     obj.innerHTML="Sepia";
//     video.style.filter="sepia(75%)";
//     return;
//   }
//   //filtering to high contrast
//   if(obj.innerHTML=="Sepia"){
//     obj.innerHTML="High contrast";
//     video.style.filter="contrast(75%)";
//     return;
//   }
//   //coming back to no filter
//   if(obj.innerHTML=="High contrast"){
//     obj.innerHTML="No filter";
//     video.style.filter="none";
//     return;
//   }
// }
//JS code for Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}