window.onload = () => {



const aboutbtn = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')
const ceva = document.querySelector('.gridmovieposters')



let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");




let c2 = document.getElementById("myCanvas2");
let ctx2 = c2.getContext("2d");
let python = document.getElementById('python')




let img = new Image();


img.onload = function(){
    
   c.width = this.width
    c.height = this.height
    
    let diferentaX = c.width - python.width
    let diferentaY = c.height - python.height


    c2.width = python.width+diferentaX

    c2.height = python.height+diferentaY

    python.width = c2.width
    python.height = c2.height


   ctx2.drawImage(python,0,0,python.width,python.height)
    
    ctx.drawImage(img, 0, 0, this.width,this.height);
}
img.src = "posters/fantasticPoster.jpg"


//470.483x664.6

// python.width = c.width
// python.height = c.height













c.onclick = () => 
{
    window.open('1.html')
}


let userName = 'anonymous'
let logged = false;


const welcomeU = document.getElementById('welcomeU')

welcomeU.innerHTML = welcomeU.innerHTML.replace('...',userName);


aboutbtn.onclick = () => {
    
   
    aboutCard.style.display = aboutCard.style.display === 'block' ? 'none' : 'block'
    
}



}

