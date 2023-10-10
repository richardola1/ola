// script.js
const starsSection = document.querySelector('.stars');
const surpriseButton = document.getElementById('surprise-button');

// Toggle animation class on button click
surpriseButton.addEventListener('click', () => {
    starsSection.classList.toggle('animate-stars');
});
