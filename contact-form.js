// Contact Form Handler with Firebase
import { db, collection, addDoc, serverTimestamp } from './firebase-config.js';

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitButton = this.form.querySelector('.submit-button');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupFormValidation();
    }

    setupFormValidation() {
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        this.clearFieldError(field);

        // Validation rules
        switch (field.type) {
            case 'email':
                if (!value) {
                    errorMessage = 'El email es requerido';
                    isValid = false;
                } else if (!this.isValidEmail(value)) {
                    errorMessage = 'Por favor, introduce un email válido';
                    isValid = false;
                }
                break;
            case 'text':
                if (!value) {
                    errorMessage = 'Este campo es requerido';
                    isValid = false;
                }
                break;
            case 'select-one':
                if (!value) {
                    errorMessage = 'Por favor, selecciona una opción';
                    isValid = false;
                }
                break;
            default:
                if (field.tagName === 'TEXTAREA' && !value) {
                    errorMessage = 'Por favor, cuéntanos sobre tu proyecto';
                    isValid = false;
                }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        // Create or update error message
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    validateForm() {
        const fields = this.form.querySelectorAll('input, textarea, select');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Collect form data
            const formData = {
                name: this.form.name.value.trim(),
                email: this.form.email.value.trim(),
                country: this.form.country.value,
                message: this.form.message.value.trim(),
                timestamp: serverTimestamp(),
                source: 'waynox-landing'
            };

            // Send to Firebase
            const docRef = await addDoc(collection(db, 'contactos'), formData);
            
            // Success
            this.showSuccessMessage();
            this.form.reset();
            
            console.log('Contact form submitted successfully:', docRef.id);

        } catch (error) {
            console.error('Error submitting form:', error);
            this.showErrorMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(loading) {
        if (loading) {
            this.submitButton.textContent = 'Enviando...';
            this.submitButton.disabled = true;
            this.submitButton.classList.add('loading');
        } else {
            this.submitButton.textContent = 'Enviar mensaje';
            this.submitButton.disabled = false;
            this.submitButton.classList.remove('loading');
        }
    }

    showSuccessMessage() {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="success-content">
                <span class="success-icon">✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
        `;

        // Insert after form
        this.form.parentNode.appendChild(successDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    showErrorMessage(message) {
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message-global';
        errorDiv.innerHTML = `
            <div class="error-content">
                <span class="error-icon">❌</span>
                <p>${message}</p>
            </div>
        `;

        // Insert after form
        this.form.parentNode.appendChild(errorDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});

export default ContactForm;
