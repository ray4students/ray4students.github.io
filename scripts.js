document.addEventListener('DOMContentLoaded', function() {
    // Get references to the navigation links and page sections
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    
    // Get a reference to the "Welcome to Educational Resources" title
    const welcomeTitle = document.getElementById('welcome-title');
    
    // Function to hide all subpages
    function hideSubpages() {
        pages.forEach(page => {
            page.style.display = 'none';
        });
    }
    
    // Function to handle title click (hide subpages)
    welcomeTitle.addEventListener('click', function() {
        hideSubpages();
    });
    
    // Function to handle navigation link clicks (show corresponding subpage)
    function handleNavLinkClick(event) {
        // Prevent the default link behavior (navigation)
        event.preventDefault();

        // Hide all subpages
        hideSubpages();

        // Show the selected subpage
        const targetId = event.target.getAttribute('href').substring(1); // Remove the '#' character
        const targetPage = document.getElementById(targetId);
        targetPage.style.display = 'block';
    }

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
});

