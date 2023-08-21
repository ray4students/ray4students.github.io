// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Get all the navigation link elements
const navLinks = document.querySelectorAll('.nav-link');

// Define the content for each page
const pageContents = {
    index: `<div class="main-content">
                <h1>Welcome to Your Multi-Page Website</h1>
                <p>Explore the various sections using the navigation above.</p>
            </div>`,
    about: `<div class="section-content">
                <h1>About Us</h1>
                <p>This is where you can introduce yourself and your team.</p>
            </div>`,
    // ... Repeat for other pages
};

// Function to update the content based on the selected page
function updateContent(page) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = pageContents[page];
}

// Add click event listeners to the navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const page = this.dataset.page;
        updateContent(page);
    });
});
