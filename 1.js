window.onload = () => {

console.log('test')

const aboutbtn = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')

aboutbtn.onclick = () => {
    
    console.log('test')
    aboutCard.style.display = aboutCard.style.display === 'block' ? 'none' : 'block'
    
}

}