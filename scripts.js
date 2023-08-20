// scripts.js
// scripts.js

// Show or hide the "Scroll to Top" button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

// Scroll to top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
// Load content into the tab content section

document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        const tabContent = document.getElementById('tabContent');

        // Clear existing content
        tabContent.innerHTML = '';

        // Load content based on the clicked tab
        if (tabId === 'tab1') {
            tabContent.innerHTML = '<h2>Tab 1 Content</h2><p>This is the content for Tab 1.</p>';
        } else if (tabId === 'tab2') {
            tabContent.innerHTML = '<h2>Tab 2 Content</h2><p>This is the content for Tab 2.</p>';
        } else if (tabId === 'tab3') {
            tabContent.innerHTML = '<h2>Tab 3 Content</h2><p>This is the content for Tab 3.</p>';
        }
    });
});

