// Success Stories functionality
function initSuccessStories() {
  // Success stories data
  const successStories = [
    {
      name: "Lerato M.",
      position: "Standard Bank",
      story: "The FNB simulation gave me practical experience I could talk about in interviews. Without it, I wouldn't have stood out from other graduates.",
      simulation: "FNB Digital Banking"
    },
    {
      name: "Sipho K.",
      position: "Deloitte South Africa",
      story: "I completed 3 simulations while finishing my degree. When I interviewed at Deloitte, I could show actual work samples. The hiring manager was impressed!",
      simulation: "Multiple Simulations"
    }
  ];

  // Function to load more success stories
  function loadMoreStories() {
    const container = document.querySelector('#success-stories .row');
    if (container.children.length > 2) {
      showToast('All success stories loaded!');
      return;
    }
    
    // Simulate loading more stories
    setTimeout(() => {
      const additionalStories = [
        {
          name: "Thandi N.",
          position: "Nandos",
          story: "The digital marketing simulation was exactly what I needed to transition from university to the professional world.",
          simulation: "Nandos Marketing"
        },
        {
          name: "Kagiso P.",
          position: "MTN",
          story: "CareerBridge gave me the confidence to apply for tech roles. The mobile app development simulation was my ticket to MTN.",
          simulation: "MTN Technology"
        }
      ];
      
      additionalStories.forEach(story => {
        const storyHTML = `
          <div class="col-md-6 mb-4 fade-in">
            <div class="card h-100">
              <div class="card-body text-center">
                <div class="student-image mx-auto mb-3">
                  <i class="fas fa-user fa-2x text-primary"></i>
                </div>
                <h5 class="card-title">${story.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Now at ${story.position}</h6>
                <p class="card-text">"${story.story}"</p>
                <small class="text-muted">Completed: ${story.simulation}</small>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', storyHTML);
      });
      
      showToast('More success stories loaded!');
    }, 1000);
  }

  // Add event listener for success stories navigation
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-section="success-stories"]')) {
      e.preventDefault();
      const targetElement = document.getElementById('success-stories');
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });

  return {
    loadMoreStories,
    successStories
  };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const successStories = initSuccessStories();
  window.successStories = successStories; // Make available globally if needed
});