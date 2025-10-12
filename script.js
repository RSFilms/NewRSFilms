document.addEventListener('DOMContentLoaded', function() {

    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    // 2. Hero Title Typing Effect
    const titleElement = document.getElementById('hero-title');
    const textToType = "Unleash Your Creative Potential";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            titleElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Speed of typing
        }
    }
    type();


    // 3. Scroll Animation using Intersection Observer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
