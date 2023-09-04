document.addEventListener('DOMContentLoaded', function() {
    // Get references to the navigation links and the "Back to Main Page" button
    const homeLink = document.querySelector('a[href="/"]');
    const backButton = document.getElementById('back-to-home');

    // Function to handle the navigation link clicks
    function handleNavLinkClick(event) {
        // Prevent the default link behavior (navigation)
        event.preventDefault();

        // Show the "Back to Main Page" button
        backButton.style.display = 'block';
    }

    // Add click event listeners to the navigation links
    homeLink.addEventListener('click', handleNavLinkClick);
    
    // Function to handle the "Back to Main Page" button click
    function handleBackButtonClick() {
        // Navigate back to the main page (Home)
        window.location.href = '/';
    }

    // Add a click event listener to the "Back to Main Page" button
    backButton.addEventListener('click', handleBackButtonClick);
});
