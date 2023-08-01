const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const checkbox = document.querySelector('.checkbox-toggler');

console.log(navLinks);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    })
})