document.addEventListener('DOMContentLoaded', function() {
    // Get references to the navigation links and page sections
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');

    // Function to handle navigation link clicks
    function handleNavLinkClick(event) {
        // Prevent the default link behavior (navigation)
        event.preventDefault();

        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });

        // Show the selected page
        const targetId = event.target.getAttribute('href').substring(1); // Remove the '#' character
        const targetPage = document.getElementById(targetId);
        targetPage.style.display = 'block';
    }

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
});


