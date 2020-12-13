//JS code for filtering poster
let poster=document.getElementById("poster");
let filterBtn=document.getElementById("img_filter");
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


//JS code for playlist
// let current_time = document.querySelector("#current_time")
// let total_time = document.querySelector("#total_time")

// let prev_icon = document.querySelector("#prev_icon")
// let next_icon = document.querySelector("#next_icon")
// let play_icon = document.querySelector("#play_icon")

// let song = document.querySelector("#song")
// let img=document.querySelector("#play-pause")

// let audio = new Audio()
// let current_song = 0;


// img.onclick=playPause()

// function playPause(){
//   if(audio.paused){
//     if(audio.src=="#song"){
//       audio.src=audios[current_song]
//     }
//     audio.play()
//     preventDefault()
//   }else{
//     audio.pause();
//   }
// }
//JS for video controls 

//JS code for filtering video
// let video=document.querySelector("video");
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