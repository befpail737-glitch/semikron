/* 
 * Semikron Distributor Website JavaScript
 * Interactive elements and functionality
 */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formProps = Object.fromEntries(formData);
            
            // Simple validation
            if (!formProps.name || !formProps.email || !formProps.subject || !formProps.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real implementation, you would send the data to a server
            // For now, just show a success message
            alert('Thank you for your message! Our team will contact you shortly.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Thermal calculation functions
function calculateJunctionTemp() {
    const power = parseFloat(document.getElementById('power-dissipation').value);
    const ambient = parseFloat(document.getElementById('ambient-temp').value);
    const resistance = parseFloat(document.getElementById('thermal-resistance').value);
    
    if (!isNaN(power) && !isNaN(ambient) && !isNaN(resistance)) {
        const junctionTemp = ambient + (power * resistance);
        document.getElementById('junction-temp-value').textContent = junctionTemp.toFixed(2);
    } else {
        document.getElementById('junction-temp-value').textContent = '--';
    }
}

function calculateHeatsinkSize() {
    const maxJunction = parseFloat(document.getElementById('max-junction-temp').value);
    const maxPower = parseFloat(document.getElementById('max-power').value);
    const ambient = parseFloat(document.getElementById('ambient-temp2').value);
    const jcResistance = parseFloat(document.getElementById('jc-resistance').value);
    
    if (!isNaN(maxJunction) && !isNaN(maxPower) && !isNaN(ambient) && !isNaN(jcResistance)) {
        const heatsinkResistance = (maxJunction - ambient - (maxPower * jcResistance)) / maxPower;
        document.getElementById('heatsink-value').textContent = heatsinkResistance.toFixed(3);
    } else {
        document.getElementById('heatsink-value').textContent = '--';
    }
}

// Add event listeners to thermal calculation inputs
document.addEventListener('DOMContentLoaded', function() {
    const powerInput = document.getElementById('power-dissipation');
    const ambientInput = document.getElementById('ambient-temp');
    const resistanceInput = document.getElementById('thermal-resistance');
    
    if (powerInput && ambientInput && resistanceInput) {
        powerInput.addEventListener('input', calculateJunctionTemp);
        ambientInput.addEventListener('input', calculateJunctionTemp);
        resistanceInput.addEventListener('input', calculateJunctionTemp);
    }
    
    const maxJunctionInput = document.getElementById('max-junction-temp');
    const maxPowerInput = document.getElementById('max-power');
    const ambientInput2 = document.getElementById('ambient-temp2');
    const jcResistanceInput = document.getElementById('jc-resistance');
    
    if (maxJunctionInput && maxPowerInput && ambientInput2 && jcResistanceInput) {
        maxJunctionInput.addEventListener('input', calculateHeatsinkSize);
        maxPowerInput.addEventListener('input', calculateHeatsinkSize);
        ambientInput2.addEventListener('input', calculateHeatsinkSize);
        jcResistanceInput.addEventListener('input', calculateHeatsinkSize);
    }
});

// FAQ/Expandable sections
document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('expanded');
    });
});

// Image gallery/lightbox functionality (if needed)
function initImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-full-image');
            const altText = this.querySelector('img').alt;
            
            // Create lightbox overlay
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${imgSrc}" alt="${altText}">
                </div>
            `;
            
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            overlay.querySelector('.lightbox-close').addEventListener('click', function() {
                document.body.removeChild(overlay);
                document.body.style.overflow = 'auto';
            });
            
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });
}

// Initialize gallery if gallery items exist
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('.gallery-item').length > 0) {
        initImageGallery();
    }
});

// Tab navigation functionality
function initTabs() {
    const tabHeaders = document.querySelectorAll('.tab-header');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.tab-container');
            
            // Remove active class from all headers and panels
            tabContainer.querySelectorAll('.tab-header').forEach(h => {
                h.classList.remove('active');
            });
            
            tabContainer.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.remove('active');
            });
            
            // Add active class to clicked header and corresponding panel
            this.classList.add('active');
            tabContainer.querySelector(`.tab-panel[data-tab="${tabId}"]`).classList.add('active');
        });
    });
}

// Initialize tabs if tab containers exist
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('.tab-container').length > 0) {
        initTabs();
    }
});