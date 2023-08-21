const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const content = document.getElementById('content');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

