window.onload = () => {

console.log('test')

const aboutbtn = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')

let userName = 'anonymous'
let logged = false;


const welcomeU = document.getElementById('welcomeU')

welcomeU.innerHTML = welcomeU.innerHTML.replace('...',userName);


aboutbtn.onclick = () => {
    
    console.log('test')
    aboutCard.style.display = aboutCard.style.display === 'block' ? 'none' : 'block'
    
}








}

