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
var playVideo=document.getElementById("play-video")
var range=document.getElementById("range");
var videoTime=document.getElementById("videoTime")
var videoDuration=document.getElementById("videoDuration")
var video=document.getElementById("video-trailer")

playVideo.addEventListener('click', function(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
});

function updateProgressValueVideo() {
  range.max = video.duration;
  range.value = video.currentTime;
  document.getElementById('currentTimeVideo').innerHTML = (formatTime(Math.round(video.currentTime)));
  if (document.getElementById('durationTimeVideo').innerHTML === "NaN:NaN") {
      document.getElementById('durationTimeVideo').innerHTML = "0:00";
  } else {
      document.getElementById('durationTimeVideo').innerHTML = (formatTime(Math.round(video.duration)));
  }
};
function formatTimeVideo(seconds) {
  let min = Math.floor(seconds/60);
  let sec = seconds % 60;

  if(min < 10){
      min = "0" + min;
  }

  sec = sec < 10 ? "0" + sec : sec;

  return min + ":" + sec
};
setInterval(updateProgressValueVideo, 500);
function changeProgressBarVideo() {
  video.currentTime = range.value;
};
//JS code for filtering video
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

//JS for comment section
const cName=document.querySelector("#name")
const cComment=document.querySelector('#comment')
const btn_save=document.querySelector("#comment-save")
var aName=document.getElementById("comment-name")
var aComment=document.getElementById("comment-message")

// utility functions for localstorage
function setObject(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
function getObject(key) {
  var storage = window.localStorage,
      value = storage.getItem(key);
  return value && JSON.parse(value);
}

function saveComment(){
  var cText = document.querySelector("#txt1");
  var dText = cText.value;
  console.log(dText)
  var cName = document.querySelector("#namebox")
  var dName= cName.value;
  console.log(dName)
  cmtList = getObject('cmtlist');

  if (cmtList){
    cmtList.push({name: dName, text: dText});
    setObject('cmtlist', cmtList);
    console.log(cmtList);
  }else{ //Add a comment
    setObject('cmtlist', [{name: dName, text: dText}]);
  }
  for(let i of cmtList){
    document.getElementById('cmtlist').innerHTML+=i.name;
    document.getElementById('cmtlist').innerHTML+=i.text;
  }
}
window.onload=()=>{
  function setObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  function getObject(key) {
    var storage = window.localStorage,
        value = storage.getItem(key);
    return value && JSON.parse(value);
  }
  let x = getObject('cmtlist');
  console.log(x)
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('serviceworkerMovies.js')
    .then((registration)=>{
        console.log('Service worker registered!');
        return registration;
    })
    .catch((err)=>{
        console.error('Unable to register the service worker!', err);
    })
  }
  for(let i=1;i<=x.length-1;i++){
    let y=x[i]
    document.getElementById('cmtlist').innerHTML+=y.name;
    document.getElementById('cmtlist').innerHTML+=": \n";
    document.getElementById('cmtlist').innerHTML+=y.text;
    document.getElementById('cmtlist').innerHTML+="\n";
    console.log(y.name)
  }
}