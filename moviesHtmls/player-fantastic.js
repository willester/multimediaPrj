//JS code for playlist
const cover=document.querySelector("#cover");
const song=document.querySelector("#song");
const title=document.querySelector(".title");
const progressBar=document.querySelector("#progress-bar");
let pPause=document.querySelector("#play-pause");

songIndex=0;
songs=["../moviesMedia/fantastic-planet/ost1.mp3","../moviesMedia/fantastic-planet/ost2.mp3", "../moviesMedia/fantastic-planet/ost3.mp3"];
covers=["../moviesMedia/fantastic-planet/cover1.jpg", "../moviesMedia/fantastic-planet/cover2.jpg", "../moviesMedia/fantastic-planet/cover3.jpg"];
titles=["OST1","OST2","OST3"];

let playing=true;
function playPause(){
  if (playing) {
    const song = document.querySelector("#song"),
    cover = document.querySelector("#cover");
    
    song.play();
    playing = false;
} else {
    song.pause();
    playing = true;
  }
}
song.addEventListener('ended', function(){
  nextSong();
});
function nextSong() {
  songIndex++;
  if (songIndex > 2) {
      songIndex = 0;
  };
  song.src = songs[songIndex];
  cover.src = covers[songIndex];
  title.innerHTML = titles[songIndex];
  playing = true;
  playPause();
}
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
      songIndex = 2;
  };
  song.src = songs[songIndex];
  cover.src = covers[songIndex];
  title.innerHTML = titles[songIndex];
  playing = true;
  playPause();
}
function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
  if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
      document.querySelector('.durationTime').innerHTML = "0:00";
  } else {
      document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
  }
};
function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = seconds % 60;
  if (sec < 10){ 
      sec  = "0"+min;
  }
  sec= sec < 10 ? "0" + sec : sec;
  return min + ":" + sec;
};
setInterval(updateProgressValue, 500);
function changeProgressBar() {
  song.currentTime = progressBar.value;
};