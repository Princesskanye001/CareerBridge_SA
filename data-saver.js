class DataSaver {
  constructor() {
    this.isActive = false;
    this.init();
  }

  init() {
    // Check if data saver was previously enabled
    const savedState = localStorage.getItem('careerBridgeDataSaver');
    if (savedState === 'true') {
      this.enable();
    }
   
    // Add event listener for data saver toggle
    document.addEventListener('click', (e) => {
      if (e.target.closest('.data-save-toggle')) {
        this.toggle();
      }
    });
  }

  enable() {
    document.body.classList.add('data-save-mode');
    const toggle = document.querySelector('.data-save-toggle');
    if (toggle) {
      toggle.innerHTML = '<i class="fas fa-network-wired"></i> Data Saver ON';
      toggle.classList.add('active');
    }
    this.isActive = true;
    localStorage.setItem('careerBridgeDataSaver', 'true');
   
    // Show notification
    this.showNotification('Data saver mode activated - animations reduced');
   
    // Optimize images for data saving
    this.optimizeImages();
  }

  disable() {
    document.body.classList.remove('data-save-mode');
    const toggle = document.querySelector('.data-save-toggle');
    if (toggle) {
      toggle.innerHTML = '<i class="fas fa-network-wired"></i> Data Saver';
      toggle.classList.remove('active');
    }
    this.isActive = false;
    localStorage.setItem('careerBridgeDataSaver', 'false');
   
    // Show notification
    this.showNotification('Data saver mode deactivated');
   
    // Restore images
    this.restoreImages();
  }

  toggle() {
    if (this.isActive) {
      this.disable();
    } else {
      this.enable();
    }
  }

  optimizeImages() {
    // Reduce image quality for data saving
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const originalSrc = img.getAttribute('data-original-src') || img.src;
      img.setAttribute('data-original-src', originalSrc);
     
      // If it's a data URL SVG, we can't optimize further
      if (!originalSrc.startsWith('data:')) {
        // In a real implementation, you would serve optimized images
        // For now, we'll just add a data-saver attribute
        img.setAttribute('data-saver-optimized', 'true');
      }
    });
  }

  restoreImages() {
    // Restore original images
    const images = document.querySelectorAll('img[data-original-src]');
    images.forEach(img => {
      const originalSrc = img.getAttribute('data-original-src');
      img.src = originalSrc;
      img.removeAttribute('data-saver-optimized');
    });
  }

  showNotification(message) {
    // Use existing toast function or create simple notification
    if (typeof showToast === 'function') {
      showToast(message);
    } else {
      console.log('Data Saver:', message);
    }
  }

  // Method to check current state
  getStatus() {
    return this.isActive;
  }

  // Method to estimate data savings
  estimateSavings() {
    if (!this.isActive) return '0%';
   
    let savings = 0;
   
    // Animation savings
    savings += 15;
   
    // Image optimization savings (estimated)
    savings += 25;
   
    // Background animation savings
    savings += 10;
   
    return `${savings}% estimated data savings`;
  }
}

// Initialize Data Saver
let dataSaver;

function initDataSaver() {
  dataSaver = new DataSaver();
  return dataSaver;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDataSaver);
} else {
  initDataSaver();
}
