const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('show');
    hamburger.classList.toggle('close');
}

function closeMenu() {
    const navVisible = document.querySelector('.nav--visible');
    const navLinks = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.remove('show');
    hamburger.classList.remove('close');
    navVisible.classList.remove('nav--visible');
}


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.links');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            if (href && href.startsWith('#')) {
                // Handle scrolling for internal anchor links
                event.preventDefault();
                const target = document.querySelector(href);
                const headerOffset = 30;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;
                // Scroll to the target element with custom scroll behavior
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-animate');

    function checkInView() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkInView);
});
document.addEventListener('DOMContentLoaded', function() {
    // Overlay open/close logic
    const openBtn = document.getElementById('openCaseStudyBtn');
    const overlay = document.getElementById('imageOverlay');
    const closeBtn = document.getElementById('closeOverlay');

    if (openBtn && overlay && closeBtn) {
        openBtn.addEventListener('click', function() {
            overlay.style.display = 'flex';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(20, 17, 26, 0.95)';
            overlay.style.overflowY = 'auto';
            overlay.style.zIndex = '1000';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Overlay open/close logic
    const openDesBtn = document.getElementById('openDesignBtn');
    const overlayTwo = document.getElementById('imageOverlayTwo');
    const closeBtnTwo = document.getElementById('closeOverlayTwo');

    if (openDesBtn && overlayTwo && closeBtnTwo) {
        openDesBtn.addEventListener('click', function() {
            overlayTwo.style.display = 'flex';
            overlayTwo.style.position = 'fixed';
            overlayTwo.style.top = '0';
            overlayTwo.style.left = '0';
            overlayTwo.style.width = '100vw';
            overlayTwo.style.height = '100vh';
            overlayTwo.style.background = 'rgba(20, 17, 26, 0.95)';
            overlayTwo.style.overflowY = 'auto';
            overlayTwo.style.zIndex = '1000';
            document.body.style.overflow = 'hidden';
        });

        closeBtnTwo.addEventListener('click', function() {
            overlayTwo.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
});