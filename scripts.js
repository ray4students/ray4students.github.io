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


