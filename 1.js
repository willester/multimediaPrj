window.onload = () => {

console.log('test')

const about = document.getElementById('about')
const aboutCard = document.getElementById('aboutCard')
about.onclick = () => {
    console.log('test')
    aboutCard.style.display = aboutCard.style.display === 'block' ? 'none' : 'block'
    
}



}