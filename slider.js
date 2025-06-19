// Coding Profiles Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.profile-slider');
    const slides = document.querySelectorAll('.profile-slide');
    const navButtons = document.querySelectorAll('.slider-nav-btn');
    
    if (!slider || !slides.length || !navButtons.length) return;
    
    // Initialize slider
    let currentSlide = 0;
    
    // Set up click handlers for navigation buttons
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        
        // Update slider position
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active button
        navButtons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        currentSlide = index;
    }
});