document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuIcon = document.getElementById('menu');
    const closeIcon = document.getElementById('close');
    const navbar = document.querySelector('.navbar');

    // Change header style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && e.target !== menuIcon) {
            navbar.classList.remove('active');
        }
    });
});


