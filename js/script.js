document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Tracker Widget Animation
    const trackerWidget = document.querySelector('.tracker-widget');
    
    setTimeout(() => {
        trackerWidget.classList.add('visible');
    }, 2000);
    
    // Testimonial Ratings
    document.querySelectorAll('.rating').forEach(rating => {
        const score = parseInt(rating.getAttribute('data-rating'));
        const stars = rating.querySelector('.stars');
        
        // Calculate percentage for star rating (10-point scale to 5-star)
        const percentage = (score / 10) * 100;
        stars.style.width = `${percentage}%`;
        stars.style.overflow = 'hidden';
        stars.style.whiteSpace = 'nowrap';
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .comparison-item, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.service-card, .comparison-item, .testimonial').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Rating Circle Animation
    const ratingCircle = document.querySelector('.rating-circle');
    if (ratingCircle) {
        const rating = parseFloat(ratingCircle.getAttribute('data-rating'));
        const maxRating = 10;
        const circumference = 2 * Math.PI * 35; // Assuming radius of 35
        
        // Animate the border to represent the rating
        const offset = circumference - (rating / maxRating) * circumference;
        ratingCircle.style.strokeDasharray = circumference;
        ratingCircle.style.strokeDashoffset = offset;
    }
});