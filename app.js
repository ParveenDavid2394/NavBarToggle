// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // if .show-link not in classList, then add else remove
    // links.classList.contains('show-links') ? 
    // links.classList.remove('show-links') : links.classList.add('show-links');

    // can do the same thing in one line
    links.classList.toggle('show-links');
})