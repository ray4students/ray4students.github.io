document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    const scrollUpButton = document.getElementById("scrollUpButton");

    function handleNavLinkClick(event) {
        event.preventDefault();

        pages.forEach(page => {
            page.style.display = 'none';
        });

        const targetId = event.target.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetId);
        targetPage.style.display = 'block';

        // Smooth scroll to the target section
        scrollToSection(targetId);
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    }

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        function animateScroll() {
            currentPosition -= 80;

            if (currentPosition > 0) {
                requestAnimationFrame(animateScroll);
            }

            document.documentElement.scrollTop = currentPosition;
            document.body.scrollTop = currentPosition;
        }

        animateScroll();
    }

    function scrollToSection(sectionId) {
        var targetSection = document.getElementById(sectionId);

        if (targetSection) {
            // Smooth scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    // Add click event listener to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Add click event listener to scroll up button
    scrollUpButton.addEventListener('click', function() {
        scrollToTop();
    });
});

