// Handle Join Battle button click
function handleJoinBattle() {
    alert("Joining battle... Redirecting to game lobby!");
    // In a real app, you might navigate to a game page or open a modal
    console.log("Join battle button clicked");
}

// Handle View All Tournaments button click
function handleViewAllTournaments() {
    alert("Viewing all tournaments... Redirecting to tournaments page!");
    // In a real app, you might navigate to a tournaments page
    console.log("View all tournaments button clicked");
}

// Handle individual tournament action buttons
function handleTournamentAction(tournamentName, status) {
    if (status === 'Registration Open') {
        alert(`Registering for ${tournamentName}...`);
        console.log(`Registering for tournament: ${tournamentName}`);
    } else {
        alert(`Learning more about ${tournamentName}...`);
        console.log(`Learning more about tournament: ${tournamentName}`);
    }
}

// Add floating particles animation
function createParticles() {
    const particles = document.querySelector('.particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: #fb923c;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${2 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            opacity: 0.7;
        `;
        particles.appendChild(particle);
    }
}

// Add tournament stars animation
function createTournamentStars() {
    const starsContainer = document.querySelector('.tournaments-stars');
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: pulse ${1 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        starsContainer.appendChild(star);
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Newsletter subscription
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterButton = document.querySelector('.newsletter-button');
    
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                alert(`Thank you for subscribing with email: ${email}`);
                newsletterInput.value = '';
                console.log(`Newsletter subscription: ${email}`);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    if (newsletterInput) {
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterButton.click();
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .character-card, .tournament-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile menu toggle (for future implementation)
function setupMobileMenu() {
    // This would be used if you add a mobile hamburger menu
    console.log('Mobile menu setup ready');
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Free Fire website loaded successfully!');
    
    // Initialize all features
    createParticles();
    createTournamentStars();
    setupSmoothScrolling();
    setupNewsletter();
    setupScrollAnimations();
    setupMobileMenu();
    
    // Add some interactive hover effects
    const cards = document.querySelectorAll('.feature-card, .character-card, .tournament-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Add any responsive JavaScript adjustments here
    console.log('Window resized');
});

// Handle scroll events for parallax effects
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-pattern');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
    
    // Add scroll-based opacity changes
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
        heroContent.style.opacity = opacity;
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key functionality
    if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        console.log('ESC key pressed');
    }
    
    // Space bar to pause/play any animations
    if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        console.log('Space bar pressed');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    // Any expensive scroll operations go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);
