/////////////////
// MENU MOBILE //
/////////////////

const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const checkbox = document.querySelector('.checkbox-toggler');

console.log(navLinks);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    })
})

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////
// ANIMATION TITRE //
/////////////////////
const mainTitle = Array.from(document.querySelectorAll('.loading-text'));

document.addEventListener("DOMContentLoaded", function() {
    for(let i=0; i < mainTitle.length; i++){
        setTimeout(() =>{
            mainTitle[i].classList.add('visible');
        }, 1000*(i+1));
    }
})

/////////////////////////////////////////////////////////////////////////////////////