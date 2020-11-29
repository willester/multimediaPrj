window.onload = () => {



const aboutbtn = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')
//const ceva = document.querySelector('.gridmovieposters')



let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");




let c2 = document.getElementById("myCanvas2");
let ctx2 = c2.getContext("2d");
let python = document.getElementById('python')


let c3 = document.getElementById("myCanvas3");
let ctx3 = c3.getContext("2d");
let nasu = document.getElementById('nasu')


let c4 = document.getElementById("myCanvas4");
let ctx4 = c4.getContext("2d");
let sw = document.getElementById('sw')




console.log(nasu.width)

let img = new Image();


img.onload = function(){
    
   c.width = this.width
    c.height = this.height
    
    // for canvas 2 

    let diferentaX = c.width - python.width
    let diferentaY = c.height - python.height


    c2.width = python.width+diferentaX

    c2.height = python.height+diferentaY

    python.width = c2.width
    python.height = c2.height


    // for canvas 3 

    let diferentaX2 = c.width - nasu.width
    let diferentaY2 = c.height - nasu.height


    c3.width = nasu.width+diferentaX2

    c3.height = nasu.height+diferentaY2

    //debug purposes
   // console.log(c.width + "c1")
    //console.log(c2.width + " c2")
   // console.log(c3.width + " c3")

    nasu.width = c3.width
    nasu.height = c3.height

    //for canvas 4 

    let diferentaX3 = c.width - sw.width
    let diferentaY3 = c.height - sw.height


    c4.width = sw.width+diferentaX3

    c4.height = sw.height+diferentaY3

    sw.width = c4.width
    sw.height = c4.height


    // drawing the posters on the canvases
    
    
    ctx4.drawImage(sw,0,0,sw.width,sw.height)


    ctx3.drawImage(nasu,0,0,nasu.width,nasu.height)

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

