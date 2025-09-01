// ===== WAYNOX STUDIO - MAIN SCRIPT =====

// Configuración global
const CONFIG = {
    calendlyUrl: 'https://calendly.com/waynox-studio', // Prop para conectar
    whatsappUrl: 'https://wa.me/34621033528',
    rgpdPrivacyUrl: '/privacidad.html',
    formsparkEndpoint: 'https://formspark.io/your-form-id' // Prop para conectar
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== INITIALIZATION =====
function initializeApp() {
    setupMobileNavigation();
    setupFAQ();
    setupContactForm();
    setupScrollAnimations();
    setupCalendlyButtons();
    checkCookieConsent();
    setupFormValidation();
}

// ===== MOBILE NAVIGATION =====
function setupMobileNavigation() {
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileToggle && navbarNav) {
        mobileToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            const isActive = navbarNav.classList.contains('active');
            mobileToggle.querySelector('span').textContent = isActive ? '✕' : '☰';
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarNav.classList.remove('active');
                mobileToggle.querySelector('span').textContent = '☰';
            });
        });
    }
}

// ===== FAQ FUNCTIONALITY =====
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
}

function toggleFAQ(questionElement) {
    const answer = questionElement.nextElementSibling;
    const toggle = questionElement.querySelector('.faq-toggle');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        toggle.textContent = '+';
    } else {
        // Cerrar todas las otras respuestas
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        document.querySelectorAll('.faq-toggle').forEach(tog => {
            tog.textContent = '+';
        });
        
        // Abrir la respuesta actual
        answer.classList.add('active');
        toggle.textContent = '−';
    }
}

// ===== CONTACT FORM =====
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Validar formulario
    if (!validateForm(form)) {
        return;
    }
    
    // Mostrar estado de carga
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Recopilar datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simular envío (aquí se conectaría con Formspark o similar)
    setTimeout(() => {
        showFormMessage('success', '¡Mensaje enviado con éxito! Te responderemos en menos de 24 horas.');
        
        // Resetear formulario
        form.reset();
        
        // Restaurar botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Scroll suave a la sección de contacto
        document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
        
    }, 1500);
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo es obligatorio');
            isValid = false;
        } else {
            clearFieldError(field);
        }
        
        // Validación específica por tipo
        if (field.type === 'email' && field.value) {
            if (!isValidEmail(field.value)) {
                showFieldError(field, 'Email no válido');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function showFormMessage(type, message) {
    // Remover mensajes existentes
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    const form = document.getElementById('contact-form');
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <span class="message-icon">${type === 'success' ? '✅' : '❌'}</span>
            <span>${message}</span>
        </div>
    `;
    
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-up-delayed, .fade-in-up-delayed-2');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== CALENDLY INTEGRATION =====
function setupCalendlyButtons() {
    const calendlyButtons = document.querySelectorAll('#calendly-btn, #calendly-contact-btn');
    
    calendlyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openCalendly();
        });
    });
}

function openCalendly() {
    if (CONFIG.calendlyUrl && CONFIG.calendlyUrl !== 'https://calendly.com/waynox-studio') {
        window.open(CONFIG.calendlyUrl, '_blank');
    } else {
        // Fallback: mostrar mensaje o redirigir a contacto
        alert('Próximamente: sistema de reservas de citas. Por favor, usa el formulario de contacto o WhatsApp.');
    }
}

// ===== COOKIE CONSENT =====
function checkCookieConsent() {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
        hideCookieBanner();
    }
}

function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    hideCookieBanner();
    
    // Aquí se podrían cargar analytics o cookies de terceros
    console.log('Cookies aceptadas');
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

// ===== FORM VALIDATION ENHANCEMENT =====
function setupFormValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    inputs.forEach(input => {
        // Validación en tiempo real
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearFieldError(this);
            }
        });
    });
}

function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && field.value) {
        if (!isValidEmail(field.value)) {
            showFieldError(field, 'Email no válido');
            return false;
        }
    }
    
    if (field.type === 'tel' && field.value) {
        if (!isValidPhone(field.value)) {
            showFieldError(field, 'Teléfono no válido');
            return false;
        }
    }
    
    clearFieldError(field);
    return true;
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajustar por navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATION =====
const optimizedScrollHandler = throttle(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ACCESSIBILITY ENHANCEMENTS =====
function setupAccessibility() {
    // Navegación por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Cerrar menús móviles
            const navbarNav = document.querySelector('.navbar-nav');
            if (navbarNav && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                document.querySelector('.navbar-mobile-toggle span').textContent = '☰';
            }
        }
    });
    
    // Skip links para navegación por teclado
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
    // Aquí se podría enviar a un servicio de monitoreo de errores
});

// ===== ANALYTICS READY (para futuras integraciones) =====
function trackEvent(category, action, label) {
    // Preparado para Google Analytics, Mixpanel, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    console.log(`Evento: ${category} - ${action} - ${label}`);
}

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.WaynoxStudio = {
    openCalendly,
    acceptCookies,
    trackEvent,
    toggleFAQ
};

// ===== INITIALIZE ACCESSIBILITY =====
setupAccessibility();
setupSmoothScrolling(); 