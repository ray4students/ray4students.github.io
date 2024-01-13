document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    const scrollUpButton = document.getElementById("scrollUpButton");

    function handleNavLinkClick(event) {
        event.preventDefault();

        const targetId = event.target.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetId);

        if (targetPage) {
            // Smooth scroll to the target section
            targetPage.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    }

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
});

