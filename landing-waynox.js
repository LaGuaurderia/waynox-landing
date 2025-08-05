// Funciones de scroll suave
function scrollToContact() {
    const contactSection = document.getElementById('contacto');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToServices() {
    const servicesSection = document.getElementById('servicios');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// Animaciones de scroll mejoradas
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Efecto de stagger para elementos hijos
                const children = entry.target.querySelectorAll('.stagger-in');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Elementos a animar con diferentes tipos de animación
    const elementsToAnimate = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .stagger-in'
    );

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Manejo del formulario de contacto
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const country = formData.get('country');
        const message = formData.get('message');
        
        // Validación básica
        if (!name || !email || !country || !message) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }
        
        // Simular envío
        showNotification('Enviando mensaje...', 'info');
        
        setTimeout(() => {
            showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
            form.reset();
        }, 2000);
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Navegación activa
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                // Remover clase activa de todos los enlaces
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Agregar clase activa al enlace correspondiente
                const activeLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Efectos de hover en las tarjetas
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.process-card, .service-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            // Agregar efecto de brillo
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        // Efecto de clic
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
    });
}

// Animación de contador para estadísticas (si se agregan)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Smooth scroll para enlaces internos
function addSmoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efecto parallax sutil para el hero
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            card.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Validación de formulario en tiempo real
function addFormValidation() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remover clases de error previas
    field.classList.remove('error', 'success');
    
    // Validaciones específicas
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Por favor, ingresa un email válido';
        }
    }
    
    if (field.required && !value) {
        isValid = false;
        errorMessage = 'Este campo es obligatorio';
    }
    
    if (field.type === 'textarea' && value.length < 10) {
        isValid = false;
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    // Aplicar resultado
    if (isValid) {
        field.classList.add('success');
        removeFieldError(field);
    } else {
        field.classList.add('error');
        showFieldError(field, errorMessage);
    }
}

function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        animation: fadeIn 0.3s ease;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Efectos de microinteracciones para botones
function addButtonMicrointeractions() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .project-link');
    
    buttons.forEach(button => {
        // Efecto de ripple al hacer clic
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Efecto de presión al hacer clic
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Efectos de microinteracciones para enlaces
function addLinkMicrointeractions() {
    const links = document.querySelectorAll('.nav-link, .footer-link, .social-link');
    
    links.forEach(link => {
        // Efecto de presión al hacer clic
        link.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Efectos de microinteracciones para tarjetas flotantes
function addFloatingCardMicrointeractions() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        // Efecto de presión al hacer clic
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Efectos de microinteracciones para elementos de contacto
function addContactItemMicrointeractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        // Efecto de presión al hacer clic
        item.addEventListener('mousedown', function() {
            this.style.transform = 'translateX(2px) scale(0.98)';
        });
        
        item.addEventListener('mouseup', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Funcionalidad de cambio de tema
function addThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Verificar tema guardado
    const savedTheme = localStorage.getItem('waynox-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        const isLightMode = document.body.classList.toggle('light-mode');
        
        // Cambiar icono
        themeIcon.textContent = isLightMode ? '☀️' : '🌙';
        
        // Guardar preferencia
        localStorage.setItem('waynox-theme', isLightMode ? 'light' : 'dark');
        
        // Efecto de transición
        themeIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeIcon.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// Navegación fluida mejorada
function addSmoothNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Efecto de ripple en el enlace
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    addScrollAnimations();
    handleContactForm();
    updateActiveNavigation();
    addCardHoverEffects();
    animateCounters();
    addSmoothNavigation();
    addParallaxEffect();
    addFormValidation();
    addButtonMicrointeractions();
    addLinkMicrointeractions();
    addFloatingCardMicrointeractions();
    addContactItemMicrointeractions();
    addThemeToggle();
    
    // Agregar estilos adicionales para notificaciones y microinteracciones
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #3b82f6 !important;
            font-weight: 600;
        }
        
        .form-group input.success,
        .form-group textarea.success,
        .form-group select.success {
            border-color: #10b981 !important;
        }
        
        .form-group input.error,
        .form-group textarea.error,
        .form-group select.error {
            border-color: #ef4444 !important;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Efectos de microinteracciones adicionales */
        .cta-button, .submit-button, .project-link {
            position: relative;
            overflow: hidden;
        }
        
        .cta-button:active, .submit-button:active, .project-link:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease !important;
        }
        
        .nav-link:active, .footer-link:active, .social-link:active {
            transform: scale(0.95) !important;
            transition: transform 0.1s ease !important;
        }
        
        .floating-card:active {
            transform: translateY(-5px) scale(0.98) !important;
            transition: transform 0.1s ease !important;
        }
        
        .contact-item:active {
            transform: translateX(2px) scale(0.98) !important;
            transition: transform 0.1s ease !important;
        }
        
        /* Efectos de hover mejorados */
        .process-card:hover, .service-card:hover, .project-card:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Animación de validación de formulario */
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            animation: focusPulse 0.3s ease;
        }
        
        @keyframes focusPulse {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        /* Efecto de brillo en hover */
        .cta-button:hover::after,
        .submit-button:hover::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: shine 0.8s ease;
        }
        
        @keyframes shine {
            to {
                left: 100%;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('WAYNOX Landing Page inicializada correctamente con microinteracciones');
});

// Función para abrir la página
function openLandingPage() {
    window.open('landing-waynox.html', '_blank');
} 