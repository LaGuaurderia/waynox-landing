// Actualizar año en el footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Animación de entrada del título
    setTimeout(function() {
        const titleText = document.getElementById('titleText');
        if (titleText) {
            titleText.textContent = 'WA';
        }
    }, 800);
    
    setTimeout(function() {
        const titleText = document.getElementById('titleText');
        if (titleText) {
            titleText.textContent = 'WAY';
        }
    }, 1200);
    
    setTimeout(function() {
        const titleText = document.getElementById('titleText');
        if (titleText) {
            titleText.textContent = 'WAYN';
        }
    }, 1600);
    
    setTimeout(function() {
        const titleText = document.getElementById('titleText');
        if (titleText) {
            titleText.textContent = 'WAYNO';
        }
    }, 2000);
    
    // Agregar clases fade-in a elementos para animaciones
    addFadeInAnimations();
    
    // Configurar el formulario de contacto
    setupContactForm();
});

// Función para hacer scroll suave a la sección de contacto
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para hacer scroll suave a la sección de servicios
function scrollToServices() {
    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Configurar animaciones de scroll modernas
function addFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Agregar observer a todos los elementos con clases de animación
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .stagger-in, .zoom-in, .slide-up-rotate, .bounce-in, .flip-in, .slide-diagonal, .fade-scale');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Configurar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validar que todos los campos estén completos
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            
            // Simular envío (aquí puedes agregar la lógica real de envío)
            console.log('Datos del formulario:', {
                name: name,
                email: email,
                message: message
            });
            
            // Mostrar mensaje de éxito
            if (successMessage) {
                successMessage.classList.add('show');
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
}

// Efecto de parallax sutil para el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animación adicional para la X al hacer hover - REMOVIDA
// document.addEventListener('DOMContentLoaded', function() {
//     const animatedXElements = document.querySelectorAll('.animated-x');
//     
//     animatedXElements.forEach(element => {
//         element.addEventListener('mouseenter', function() {
//             const rotatingBar = this.querySelector('.rotating');
//             if (rotatingBar) {
//                 rotatingBar.style.animationDuration = '1s';
//             }
//         });
//         
//         element.addEventListener('mouseleave', function() {
//             const rotatingBar = this.querySelector('.rotating');
//             if (rotatingBar) {
//                 rotatingBar.style.animationDuration = '3s';
//             }
//         });
//     });
// });

// Smooth scroll para enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 