document.addEventListener('DOMContentLoaded', function() {
    // Animation for story cards on scroll
    const storyCards = document.querySelectorAll('.story-card');
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation for multiple cards
                const delay = Array.from(storyCards).indexOf(entry.target) * 100;
                entry.target.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
            }
        });
    }, observerOptions);
    
    // Initialize cards with transition properties
    storyCards.forEach(card => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add hover effect for CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    // Add click event for CTA button
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! The Success Stories feature will be available soon.');
    });

    // Add logo animation on page load
    const logoWords = document.querySelectorAll('.logo-word');
    logoWords.forEach((word, index) => {
        word.style.opacity = '0';
        word.style.transform = 'translateY(10px)';
        word.style.transition = `opacity 0.5s ease ${index * 200}ms, transform 0.5s ease ${index * 200}ms`;
        
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, 100 + (index * 200));
    });

    // Add loading animation for story images
    const storyImages = document.querySelectorAll('.story-image');
    storyImages.forEach(image => {
        const span = image.querySelector('span');
        if (span) {
            span.style.opacity = '0';
            setTimeout(() => {
                span.style.transition = 'opacity 0.5s ease';
                span.style.opacity = '1';
            }, 500);
        }
    });
});
