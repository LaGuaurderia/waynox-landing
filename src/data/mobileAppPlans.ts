export interface MobileAppPlan {
  plan: 'Lite' | 'Start' | 'Pro' | 'Deluxe'
  price: string
  delivery: string
  scope: string
  features: string[]
  integrations: string[]
  backend: string
  publication: string
  ctaText: string
  ctaLink: string
  featured?: boolean
}

export interface MaintenancePlan {
  name: string
  price: string
  sla: string
  features: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export const mobileAppPlans: MobileAppPlan[] = [
  {
    plan: 'Lite',
    price: 'desde 549,99 €',
    delivery: '1–2 semanas',
    scope: '1 flujo (reservas simple o catálogo), hasta 3 pantallas',
    features: [
      '1 ronda de cambios (máx. 10 puntos)',
      'Analítica básica',
      'Diseño responsive',
      'Testing básico'
    ],
    integrations: [],
    backend: 'Sin backend complejo (o Firebase sencillo)',
    publication: 'PWA (para stores ver Pro/Deluxe)',
    ctaText: 'Solicitar App Lite',
    ctaLink: '/contacto'
  },
  {
    plan: 'Start',
    price: '1.200–2.500 €',
    delivery: '2–4 semanas',
    scope: '5–7 pantallas, login básico, Firestore',
    features: [
      '1 integración (Calendly / Sheets / Brevo)',
      'Analítica básica',
      'Diseño base personalizado',
      '2 rondas de cambios'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo'],
    backend: 'Firebase (Firestore + Auth)',
    publication: 'PWA + Android APK',
    ctaText: 'Solicitar App Start',
    ctaLink: '/contacto'
  },
  {
    plan: 'Pro',
    price: '2.500–6.000 €',
    delivery: '4–7 semanas',
    scope: '8–15 pantallas, autenticación social, base de datos con roles',
    features: [
      '2–3 integraciones',
      'Analítica por eventos',
      'Notificaciones push',
      '3 rondas de cambios'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo', 'Stripe', 'WhatsApp API'],
    backend: 'Firebase + Backend personalizado',
    publication: 'Google Play incluida; Apple Developer (99 $/año) a cargo del cliente',
    ctaText: 'Solicitar App Pro',
    ctaLink: '/contacto',
    featured: true
  },
  {
    plan: 'Deluxe',
    price: '6.000–12.000 €',
    delivery: '8–12 semanas',
    scope: '15–25 pantallas, flujos complejos (reservas + pagos + perfiles), roles avanzados, multidioma',
    features: [
      'Deep links',
      'Funciones offline (caché/cola)',
      '3–6 integraciones',
      'CI/CD y release quincenal',
      'Soporte de lanzamiento'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo', 'Stripe', 'WhatsApp API', 'Zapier', 'HubSpot'],
    backend: 'Backend escalable + Firebase',
    publication: 'Google Play + App Store (cuentas incluidas)',
    ctaText: 'Solicitar App Deluxe',
    ctaLink: '/contacto'
  }
]

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: 'Lite Care',
    price: '39 €/mes',
    sla: '≤72 h hábiles',
    features: [
      'Monitoreo básico (crashes)',
      '1 h/mes de microtareas',
      'Actualización de dependencias trimestral',
      'Backup export (si aplica)',
      'Soporte por email'
    ]
  },
  {
    name: 'Start Care',
    price: '79 €/mes',
    sla: '≤48 h hábiles',
    features: [
      'Todo lo de Lite +',
      '2 h/mes de microtareas',
      'Build mensual (PWA/Android)',
      'Actualización bimestral',
      'Crashlytics y métricas',
      'Mini-informe mensual'
    ]
  },
  {
    name: 'Pro Care',
    price: '149 €/mes',
    sla: '≤24 h hábiles',
    features: [
      'Todo lo de Start +',
      '4 h/mes de microtareas',
      'Actualización mensual de libs/SDK',
      'Gestión de fichas de store (texto/recursos)',
      'Hotfix prioritarios',
      'Revisión de seguridad/reglas de Firebase',
      'Informe con KPIs'
    ]
  },
  {
    name: 'Deluxe Care',
    price: '249 €/mes',
    sla: '≤12 h hábiles',
    features: [
      'Todo lo de Pro +',
      '8 h/mes de microtareas',
      'Release quincenal (CI/CD)',
      'Auditoría de rendimiento trimestral',
      'Experimentos de growth (A/B simple)',
      'Roadmap call mensual (30\')',
      'Canal dedicado'
    ]
  }
]

export const faqItems: FAQItem[] = [
  {
    question: '¿Qué incluye exactamente cada plan de app móvil?',
    answer: 'Cada plan incluye el desarrollo completo de la app, testing, documentación técnica y 1-3 rondas de cambios según el plan. Los planes Pro y Deluxe incluyen publicación en stores, mientras que Lite y Start se entregan como PWA.'
  },
  {
    question: '¿Puedo cambiar de plan una vez iniciado el proyecto?',
    answer: 'Sí, es posible cambiar de plan durante el desarrollo, pero esto puede afectar el tiempo de entrega y el precio. Te recomendamos elegir el plan adecuado desde el inicio para evitar retrasos.'
  },
  {
    question: '¿Qué pasa con las cuentas de desarrollador de Google Play y App Store?',
    answer: 'Las cuentas de desarrollador (Google Play: 25€/año, Apple Developer: 99$/año) son responsabilidad del cliente. En los planes Pro y Deluxe incluimos la gestión y publicación, pero las cuentas deben estar a tu nombre.'
  },
  {
    question: '¿El mantenimiento mensual es obligatorio?',
    answer: 'No, el mantenimiento es opcional pero altamente recomendado para apps en producción. Te permite tener soporte continuo, actualizaciones de seguridad y mejoras incrementales sin costos adicionales.'
  },
  {
    question: '¿Qué tecnologías usáis para desarrollar las apps?',
    answer: 'Desarrollamos exclusivamente en Flutter para apps nativas (iOS/Android) y PWA para web. Flutter nos permite crear apps de alto rendimiento con una sola base de código, reduciendo costos y tiempo de desarrollo.'
  },
  {
    question: '¿Puedo cancelar el mantenimiento en cualquier momento?',
    answer: 'Sí, puedes cancelar el mantenimiento con 30 días de aviso previo. Te recomendamos mantener al menos un mes de mantenimiento activo para asegurar la estabilidad de tu app.'
  }
]

export const contractNotes = [
  '50% a inicio y 50% a la entrega',
  'Alcance cerrado por paquete (pantallas, integraciones, rondas)',
  'Horas extra fuera del mantenimiento: 45 €/h',
  'Cuentas y tasas de tiendas (Google Play / Apple Developer) a cargo del cliente',
  'Lite/Start se entregan como PWA (publicación en stores incluida en Pro/Deluxe)',
  'Cancelación del mantenimiento con 30 días de aviso'
]
