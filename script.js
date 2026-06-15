// ================================================
// PARALLAX SCROLLING EFFECT
// ================================================

// This script creates a parallax effect where the background
// and foreground move at different speeds when scrolling

// Wait for the page to fully load before running the script
window.addEventListener('load', function() {
    
    // Get references to the parallax layers
    const backgroundLayer = document.getElementById('background-layer');
    const foregroundLayer = document.getElementById('foreground-layer');
    const scrollIndicator = document.querySelector('.parallax-scroll');
    
    // Listen for scroll events on the window
    window.addEventListener('scroll', function() {
        
        // Get the current scroll position from the top of the page
        let scrollPosition = window.pageYOffset;
        
        // Calculate how much to move the background layer
        // The background moves slower (50% of scroll speed)
        // This creates the depth effect
        let backgroundMove = scrollPosition * 0.5;
        
        // Apply the transform to move only the background layer
        // The glider (foreground) stays fixed in position
        backgroundLayer.style.transform = 'translateY(' + backgroundMove + 'px)';
        
        // Keep the glider fixed - no movement
        // foregroundLayer.style.transform = 'translateY(0px)';
        
        // Fade out the scroll indicator when scrolling
        // Calculate opacity based on scroll position (fades out in first 300px)
        let opacity = 1 - (scrollPosition / 300);
        // Make sure opacity stays between 0 and 1
        opacity = Math.max(0, Math.min(1, opacity));
        scrollIndicator.style.opacity = opacity;
    });
});


// ================================================
// SMOOTH SCROLL FOR ANCHOR LINKS (Optional)
// ================================================

// This section adds smooth scrolling to anchor links
// if you add navigation links to your page later

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ================================================
// FADE-IN ANIMATION FOR CONTENT (Optional Enhancement)
// ================================================

// This adds a fade-in effect when elements come into view
// Makes the page feel more dynamic and professional

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add fade-in effect to documentation categories
window.addEventListener('scroll', function() {
    const docCategories = document.querySelectorAll('.doc-category');
    
    docCategories.forEach(function(category) {
        if (isInViewport(category)) {
            category.style.opacity = '1';
            category.style.transition = 'opacity 1s ease-in';
        }
    });
});

// Set initial opacity for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const docCategories = document.querySelectorAll('.doc-category');
    docCategories.forEach(function(category) {
        category.style.opacity = '0';
    });
});
