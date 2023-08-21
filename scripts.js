const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const content = document.getElementById('content');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
