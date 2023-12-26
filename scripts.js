document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');

    
    function handleNavLinkClick(event) {
        
        event.preventDefault();

        
        pages.forEach(page => {
            page.style.display = 'none';
        });

        
        const targetId = event.target.getAttribute('href').substring(1); 
        const targetPage = document.getElementById(targetId);
        targetPage.style.display = 'block';
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
});



// Get the scroll-up button element
var scrollUpButton = document.getElementById("scrollUpButton");

// Show the button when the user scrolls down
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
