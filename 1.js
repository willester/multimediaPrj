window.onload = () => {

console.log('test')

const aboutbtn = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')
const ceva = document.querySelector('.gridmovieposters')



let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let img = new Image();



img.onload = function(){
    
   c.width = this.width
    c.height = this.height

    ctx.drawImage(img, 0, 0, this.width,this.height);
}
img.src = "posters/fantasticPoster.jpg"

c.onclick = () => 
{
    window.open('1.html')
}


let userName = 'anonymous'
let logged = false;


const welcomeU = document.getElementById('welcomeU')

welcomeU.innerHTML = welcomeU.innerHTML.replace('...',userName);


aboutbtn.onclick = () => {
    
    console.log('test')
    aboutCard.style.display = aboutCard.style.display === 'block' ? 'none' : 'block'
    
}








}

