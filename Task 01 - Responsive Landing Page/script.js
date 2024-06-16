document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0056b3';
    } else {
        navbar.style.backgroundColor = 'linear-gradient(to right, #0066ff, #00ccff)';
    }
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
}