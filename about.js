// About section functionality
function initAboutSection() {
  // About section data
  const aboutData = {
    mission: "CareerBridge_SA is dedicated to solving South Africa's youth unemployment crisis by providing accessible virtual work experience that bridges the gap between education and employment.",
    vision: "We envision a South Africa where every young person has the opportunity to gain meaningful work experience and build a successful career, regardless of their background or connections.",
    impact: {
      completionRate: 82,
      employmentRate: 67,
      participants: 2500,
      companies: 100
    },
    partners: ['FNB', 'Nandos', 'MTN', 'Deloitte', 'Standard Bank', 'Investec']
  };

  // Function to update impact counters
  function animateCounters() {
    const completionElement = document.querySelector('[data-counter="completion"]');
    const employmentElement = document.querySelector('[data-counter="employment"]');
    const participantsElement = document.querySelector('[data-counter="participants"]');
    
    if (completionElement) {
      animateValue(completionElement, 0, aboutData.impact.completionRate, 2000);
    }
    if (employmentElement) {
      animateValue(employmentElement, 0, aboutData.impact.employmentRate, 2000);
    }
    if (participantsElement) {
      animateValue(participantsElement, 0, aboutData.impact.participants, 2000, true);
    }
  }

  // Helper function for number animation
  function animateValue(element, start, end, duration, addPlus = false) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      element.textContent = addPlus ? `+${current}` : current;
      
      if (current === end) {
        clearInterval(timer);
        if (addPlus) {
          element.textContent = `+${end}`;
        }
      }
    }, stepTime);
  }

  // Function to handle about section navigation
  function handleAboutNavigation() {
    document.addEventListener('click', function(e) {
      if (e.target.matches('[data-section="about"]')) {
        e.preventDefault();
        const targetElement = document.getElementById('about');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Start counter animation when section is in view
          setTimeout(animateCounters, 500);
        }
      }
    });
  }

  // Initialize about section
  function init() {
    handleAboutNavigation();
    
    // Set up intersection observer for counter animation
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(aboutSection);
    }
    
    return aboutData;
  }

  return {
    init,
    aboutData,
    animateCounters
  };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = initAboutSection();
  aboutSection.init();
  window.aboutSection = aboutSection; // Make available globally
});