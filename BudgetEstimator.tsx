import React, { useState, useEffect, useRef } from 'react';

// Tipos TypeScript
interface BudgetEstimatorProps {
  formsparkEndpoint: string;
  calendlyUrl: string;
  whatsappUrl: string;
  brandAccent?: string;
  rgpdPrivacyUrl?: string;
}

interface FormData {
  projectType: string;
  goal: string;
  features: string[];
  design: string;
  publish: string;
  deadline: string;
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    budgetBand: string;
    notes: string;
  };
  consentRGPD: boolean;
}

interface PriceRange {
  rangeLow: number;
  rangeHigh: number;
}

// Constantes
const STEPS = [
  {
    id: 1,
    title: "¿Qué quieres construir?",
    options: [
      { value: "app", label: "App móvil (iOS/Android)" },
      { value: "web", label: "Web (corporativa / reservas / catálogo)" },
      { value: "unknown", label: "No lo sé / Aconséjame" }
    ]
  },
  {
    id: 2,
    title: "¿Cuál es el objetivo principal?",
    options: [
      { value: "reservas", label: "Reservas / citas" },
      { value: "captacion", label: "Captación de clientes" },
      { value: "catalogo", label: "Catálogo / información" },
      { value: "social", label: "Comunidad / chat / social" },
      { value: "unknown", label: "No lo sé" }
    ]
  },
  {
    id: 3,
    title: "Elige funcionalidades (si lo tienes claro)",
    options: [
      { value: "auth_email", label: "Autenticación por email" },
      { value: "auth_oauth", label: "Login con Google/Facebook" },
      { value: "payments_basic", label: "Pagos básicos" },
      { value: "payments_ecom", label: "E-commerce completo" },
      { value: "chat", label: "Chat en tiempo real" },
      { value: "calendar", label: "Calendario y reservas" },
      { value: "push", label: "Notificaciones push" },
      { value: "maps", label: "Mapas y geolocalización" },
      { value: "admin", label: "Panel de administración" },
      { value: "none", label: "Ninguna funcionalidad especial" },
      { value: "unknown", label: "No lo sé" }
    ],
    multiple: true
  },
  {
    id: 4,
    title: "¿Cómo imaginas el diseño?",
    options: [
      { value: "template", label: "Plantilla limpia con tu marca (rápido)" },
      { value: "custom", label: "UI personalizada (más diferencial)" },
      { value: "unknown", label: "No lo sé" }
    ]
  },
  {
    id: 5,
    title: "¿Dónde lo publicamos?",
    options: [
      { value: "android", label: "Android" },
      { value: "ios", label: "iOS" },
      { value: "both", label: "Ambas" },
      { value: "na", label: "No aplica / No lo sé" }
    ]
  },
  {
    id: 6,
    title: "¿Para cuándo lo necesitas?",
    options: [
      { value: "urgent", label: "1–2 semanas (urgente)" },
      { value: "3-4w", label: "3–4 semanas" },
      { value: "5-8w", label: "5–8 semanas" },
      { value: "flex", label: "Flexible" }
    ]
  },
  {
    id: 7,
    title: "Tus datos para enviarte la estimación",
    isContact: true
  }
];

const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({
  formsparkEndpoint,
  calendlyUrl,
  whatsappUrl,
  brandAccent = "#0EA5E9",
  rgpdPrivacyUrl = "https://waynox.es/privacidad"
}) => {
  // Estados
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    goal: "",
    features: [],
    design: "",
    publish: "",
    deadline: "",
    contact: {
      name: "",
      company: "",
      email: "",
      phone: "",
      budgetBand: "",
      notes: ""
    },
    consentRGPD: false
  });
  const [priceRange, setPriceRange] = useState<PriceRange>({ rangeLow: 0, rangeHigh: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeToComplete, setTimeToComplete] = useState<number>(0);

  // Refs
  const modalRef = useRef<HTMLDivElement>(null);

  // Efectos
  useEffect(() => {
    if (isOpen) {
      setStartTime(Date.now());
      // Evento GA4: quiz_start
      if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_start', {
          page_url: window.location.href,
          utm_source: getUrlParameter('utm_source'),
          utm_medium: getUrlParameter('utm_medium'),
          utm_campaign: getUrlParameter('utm_campaign'),
          gclid: getUrlParameter('gclid'),
          fbclid: getUrlParameter('fbclid')
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentStep > 1 && currentStep <= 7) {
      // Evento GA4: quiz_step
      if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_step', {
          step_index: currentStep,
          selection_count: getSelectionCount()
        });
      }
    }
  }, [currentStep]);

  // Funciones utilitarias
  const getUrlParameter = (name: string): string => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || '';
  };

  const getSelectionCount = (): number => {
    let count = 0;
    if (formData.projectType) count++;
    if (formData.goal) count++;
    if (formData.features.length > 0) count++;
    if (formData.design) count++;
    if (formData.publish) count++;
    if (formData.deadline) count++;
    return count;
  };

  const getDeviceInfo = (): string => {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) return 'android';
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
    if (/Windows/i.test(userAgent)) return 'windows';
    if (/Mac/i.test(userAgent)) return 'mac';
    if (/Linux/i.test(userAgent)) return 'linux';
    return 'other';
  };

  // Cálculo de precios
  const calculatePriceRange = (): PriceRange => {
    let base = formData.projectType === "app" ? 549.99 : 499.99;
    let increment = 0;

    // Funcionalidades
    if (formData.features.includes("auth_email")) increment += 80;
    if (formData.features.includes("auth_oauth")) increment += 150;
    if (formData.features.includes("payments_basic")) increment += 200;
    if (formData.features.includes("payments_ecom")) increment += 350;
    if (formData.features.includes("chat")) increment += 200;
    if (formData.features.includes("calendar")) increment += 200;
    if (formData.features.includes("push")) increment += 150;
    if (formData.features.includes("maps")) increment += 150;
    if (formData.features.includes("admin")) increment += 250;

    // Publicación
    if (formData.publish === "android") increment += 100;
    if (formData.publish === "ios") increment += 150;
    if (formData.publish === "both") increment += 250;

    // Diseño
    if (formData.design === "custom") increment += 120;

    // Precio base
    let price = base + increment;

    // Urgencia
    if (formData.deadline === "urgent") {
      price *= 1.2;
    }

    const rangeLow = Math.round(price * 0.9);
    const rangeHigh = Math.round(price * 1.2);

    return { rangeLow, rangeHigh };
  };

  // Navegación entre pasos
  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 6) {
        // Calcular precio al llegar al paso 7
        setPriceRange(calculatePriceRange());
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Manejo de selecciones
  const handleSelection = (value: string, step: number) => {
    switch (step) {
      case 1:
        setFormData({ ...formData, projectType: value });
        break;
      case 2:
        setFormData({ ...formData, goal: value });
        break;
      case 3:
        if (formData.features.includes(value)) {
          setFormData({
            ...formData,
            features: formData.features.filter(f => f !== value)
          });
        } else {
          setFormData({
            ...formData,
            features: [...formData.features, value]
          });
        }
        return; // No avanzar automáticamente en selección múltiple
      case 4:
        setFormData({ ...formData, design: value });
        break;
      case 5:
        setFormData({ ...formData, publish: value });
        break;
      case 6:
        setFormData({ ...formData, deadline: value });
        break;
    }
    nextStep();
  };

  // Validación del formulario
  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.projectType;
      case 2:
        return !!formData.goal;
      case 3:
        return formData.features.length > 0;
      case 4:
        return !!formData.design;
      case 5:
        return !!formData.publish;
      case 6:
        return !!formData.deadline;
      case 7:
        return !!formData.contact.name && !!formData.contact.email && formData.consentRGPD;
      default:
        return false;
    }
  };

  // Envío del formulario
  const handleSubmit = async () => {
    if (!isStepValid(7)) return;

    setIsLoading(true);
    const finalTimeToComplete = Math.round((Date.now() - startTime) / 1000);

    const payload = {
      source: "budget_estimator",
      projectType: formData.projectType,
      goal: formData.goal,
      features: formData.features,
      design: formData.design,
      publish: formData.publish,
      deadline: formData.deadline,
      contact: formData.contact,
      budgetBand: formData.contact.budgetBand,
      notes: formData.contact.notes,
      rangeLow: priceRange.rangeLow,
      rangeHigh: priceRange.rangeHigh,
      consentRGPD: formData.consentRGPD,
      utm_source: getUrlParameter('utm_source'),
      utm_medium: getUrlParameter('utm_medium'),
      utm_campaign: getUrlParameter('utm_campaign'),
      gclid: getUrlParameter('gclid'),
      fbclid: getUrlParameter('fbclid'),
      page_url: window.location.href,
      referrer: document.referrer,
      device: getDeviceInfo(),
      time_to_complete: finalTimeToComplete
    };

    try {
      const response = await fetch(formsparkEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeToComplete(finalTimeToComplete);
        
        // Evento GA4: quiz_submit
        if (typeof gtag !== 'undefined') {
          gtag('event', 'quiz_submit', {
            projectType: formData.projectType,
            features_count: formData.features.length,
            deadline: formData.deadline,
            price_low: priceRange.rangeLow,
            price_high: priceRange.rangeHigh
          });
        }
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  // Eventos GA4 para CTAs
  const handleCalendlyClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'quiz_book_call');
    }
    window.open(calendlyUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'quiz_whatsapp_click');
    }
    window.open(whatsappUrl, '_blank');
  };

  // Cerrar modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      projectType: "",
      goal: "",
      features: [],
      design: "",
      publish: "",
      deadline: "",
      contact: {
        name: "",
        company: "",
        email: "",
        phone: "",
        budgetBand: "",
        notes: ""
      },
      consentRGPD: false
    });
    setIsSubmitted(false);
    setPriceRange({ rangeLow: 0, rangeHigh: 0 });
  };

  // Manejo de teclas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'Enter' && isStepValid(currentStep)) {
        if (currentStep < 7) {
          nextStep();
        } else if (currentStep === 7 && !isSubmitted) {
          handleSubmit();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, currentStep, isStepValid, isSubmitted]);

  // Renderizado del paso actual
  const renderStep = () => {
    const step = STEPS.find(s => s.id === currentStep);
    if (!step) return null;

    if (step.isContact) {
      return (
        <div className="step-content">
          <h3 className="step-title">{step.title}</h3>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                value={formData.contact.name}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, name: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                value={formData.contact.company}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, company: e.target.value }
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.contact.email}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, email: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                value={formData.contact.phone}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, phone: e.target.value }
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="budgetBand">Presupuesto aproximado</label>
              <select
                id="budgetBand"
                value={formData.contact.budgetBand}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, budgetBand: e.target.value }
                })}
              >
                <option value="">Selecciona...</option>
                <option value="<1k">Menos de 1.000€</option>
                <option value="1-3k">1.000€ - 3.000€</option>
                <option value="3-6k">3.000€ - 6.000€</option>
                <option value=">6k">Más de 6.000€</option>
                <option value="unknown">No lo sé</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notas adicionales</label>
              <textarea
                id="notes"
                value={formData.contact.notes}
                onChange={(e) => setFormData({
                  ...formData,
                  contact: { ...formData.contact, notes: e.target.value }
                })}
                rows={3}
                placeholder="Cuéntanos más sobre tu proyecto..."
              />
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.consentRGPD}
                  onChange={(e) => setFormData({
                    ...formData,
                    consentRGPD: e.target.checked
                  })}
                />
                <span className="checkmark"></span>
                He leído y acepto la{' '}
                <a href={rgpdPrivacyUrl} target="_blank" rel="noopener noreferrer">
                  Política de Privacidad
                </a>
              </label>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="step-content">
        <h3 className="step-title">{step.title}</h3>
        <div className="step-options">
          {step.options?.map((option) => (
            <button
              key={option.value}
              className={`option-button ${step.multiple ? 'multiple' : ''} ${
                step.multiple && formData.features.includes(option.value) ? 'selected' : 
                !step.multiple && getStepValue(step.id) === option.value ? 'selected' : ''
              }`}
              onClick={() => handleSelection(option.value, step.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const getStepValue = (stepId: number): string => {
    switch (stepId) {
      case 1: return formData.projectType;
      case 2: return formData.goal;
      case 4: return formData.design;
      case 5: return formData.publish;
      case 6: return formData.deadline;
      default: return '';
    }
  };

  // Renderizado del resultado
  const renderResult = () => (
    <div className="result-content">
      <h3 className="result-title">Tu estimación orientativa</h3>
      <p className="result-description">
        Te mostramos un rango de precio según tus selecciones. Esto no es vinculante; 
        en una llamada gratuita lo afinamos.
      </p>
      
      <div className="price-range">
        <span className="price-amount">
          {priceRange.rangeLow.toLocaleString()}€ - {priceRange.rangeHigh.toLocaleString()}€
        </span>
      </div>

      <div className="result-actions">
        <button 
          className="result-button primary"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Recibir por email'}
        </button>
        
        <button 
          className="result-button secondary"
          onClick={handleCalendlyClick}
        >
          Agendar llamada de 15 min
        </button>
        
        <button 
          className="result-button secondary"
          onClick={handleWhatsAppClick}
        >
          Hablar por WhatsApp
        </button>
      </div>

      <p className="legal-note">
        Estimación orientativa. No incluye impuestos. Sujeta a revisión de alcance.
      </p>
    </div>
  );

  // Renderizado del modal
  if (!isOpen) return null;

  return (
    <div className="budget-estimator-overlay" onClick={closeModal}>
      <div 
        className="budget-estimator-modal" 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>

        {!isSubmitted ? (
          <>
            {/* Barra de progreso */}
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentStep / 7) * 100}%` }}
              ></div>
            </div>

            {/* Contenido del paso */}
            {renderStep()}

            {/* Navegación */}
            <div className="step-navigation">
              {currentStep > 1 && (
                <button className="nav-button secondary" onClick={prevStep}>
                  Atrás
                </button>
              )}
              
              {currentStep === 7 && (
                <button 
                  className="nav-button primary"
                  onClick={handleSubmit}
                  disabled={!isStepValid(7) || isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar estimación'}
                </button>
              )}
            </div>
          </>
        ) : (
          renderResult()
        )}
      </div>
    </div>
  );
};

export default BudgetEstimator;
