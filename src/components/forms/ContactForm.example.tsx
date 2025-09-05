import React from 'react'
import ContactForm from './ContactForm'

/**
 * Ejemplo de uso del componente ContactForm
 * 
 * Este componente está listo para usar en cualquier página.
 * Incluye todas las funcionalidades solicitadas:
 * 
 * ✅ Campos: name (obligatorio), email (obligatorio), phone (opcional), message (obligatorio)
 * ✅ Envío POST a Google Apps Script usando URLSearchParams (sin problemas CORS)
 * ✅ Estados de UI: loading, éxito, error
 * ✅ Validaciones HTML5 + cliente
 * ✅ Anti-spam con campo honeypot "company"
 * ✅ Accesibilidad completa (labels, aria-live, etc.)
 * ✅ Estilos con clases CSS existentes del proyecto
 */

const ContactFormExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Formulario de Contacto
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ponte en contacto con nosotros. Te responderemos lo antes posible.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactFormExample
