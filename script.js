// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Typing animation for welcome message
    const text = "Hello, Good Day😁. I am Keshav!!";
    const typingText = document.getElementById('typing-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation
    typeWriter();
    
    // Initialize the 3D network animation
    VANTA.NET({
        el: "#animation-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x64ffda,
        backgroundColor: 0x0a192f,
        points: 7.00,
        maxDistance: 22.00,
        spacing: 20.00
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.addEventListener('mouseover', () => {
            profileImage.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        profileImage.addEventListener('mouseout', () => {
            profileImage.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Certificate slider functionality
    const slider = document.querySelector('.cert-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const certificates = document.querySelectorAll('.certificate');
    
    if (slider && prevBtn && nextBtn) {
        let currentIndex = 0;
        const maxIndex = Math.max(0, certificates.length - 3); // Show 3 certificates at a time
        
        // Set initial position
        updateSliderPosition();
        
        // Add event listeners to buttons
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateSliderPosition();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(maxIndex, currentIndex + 1);
            updateSliderPosition();
        });
        
        function updateSliderPosition() {
            const slideWidth = certificates[0].offsetWidth + 32; // Width + gap
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === maxIndex;
            
            // Update button opacity based on state
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        }
        
        // Update on window resize
        window.addEventListener('resize', updateSliderPosition);
    }
    
    // Badge orbit hover effect
    const badgeItems = document.querySelectorAll('.badge-orbit-item');
    const orbit = document.querySelector('.orbit');

    badgeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            orbit.style.animationPlayState = 'paused';
            badgeItems.forEach(badge => {
                badge.style.animationPlayState = 'paused';
            });
        });
        
        item.addEventListener('mouseleave', () => {
            orbit.style.animationPlayState = 'running';
            badgeItems.forEach(badge => {
                badge.style.animationPlayState = 'running';
            });
        });
    });
});
// Tab functionality for coding profiles
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
});