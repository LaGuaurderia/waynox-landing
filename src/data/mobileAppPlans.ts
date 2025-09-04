export interface MobileAppPlan {
  plan: 'Lite' | 'Start' | 'Pro' | 'Deluxe'
  price: string
  delivery: string
  scope?: string
  features: string[]
  integrations: string[]
  backend: string
  publication?: string
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
    price: 'desde 549,99 € <span class="text-xs">+ IVA</span>',
    delivery: 'hasta 1 semana',
    features: [
      'App sencilla con navegación básica y hasta 3 pantallas (ejemplo: catálogo o reservas simples)',
      'Sin base de datos compleja (o Firebase muy básico)',
      'Publicación como App Web (PWA)',
      '1 ronda de cambios (máx. 10 ajustes)',
      'Analítica básica (saber cuántos usan tu app)',
      'No incluye el coste de las cuentas de Google Play ni Apple Developer (a cargo del cliente)',
      'Ideal para: pequeños negocios que buscan una app rápida, simple y funcional para empezar'
    ],
    integrations: [],
    backend: 'Sin backend complejo (o Firebase muy básico)'
  },
  {
    plan: 'Start',
    price: '1.200–2.500 € <span class="text-xs">+ IVA</span>',
    delivery: '1–2 semanas',
    features: [
      'App con hasta 7 pantallas y login básico',
      'Navegación completa entre secciones',
      'Base de datos en Firebase (para guardar usuarios y datos)',
      'Publicación en App Web (PWA) + Android APK',
      '1 integración externa (ejemplo: Calendly para reservas, Google Sheets o Brevo)',
      'Analítica básica (seguimiento del uso)',
      'Diseño base (interfaz clara y funcional)',
      'No incluye el coste de las cuentas de Google Play ni Apple Developer (a cargo del cliente)'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo'],
    backend: 'Firebase (Firestore + Auth)'
  },
  {
    plan: 'Pro',
    price: '2.500–6.000 € <span class="text-xs">+ IVA</span>',
    delivery: '3–4 semanas',
    features: [
      'App con hasta 15 pantallas',
      'Login avanzado (Google, Facebook, Apple, etc.) y roles de usuario',
      'Base de datos en Firebase + API personalizada (más potencia y flexibilidad)',
      'Publicación incluida en Google Play y configuración de la cuenta de desarrollador',
      '2–3 integraciones externas (ejemplo: Stripe para pagos, CRM, Zapier, etc.)',
      'Analítica avanzada por eventos (qué hace cada usuario dentro de la app)',
      'Diseño personalizado con mayor nivel de detalle',
      'Ideal para: startups y empresas que buscan una app completa, escalable y con más control sobre usuarios y datos'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo', 'Stripe', 'WhatsApp API'],
    backend: 'Firebase + Backend personalizado',
    featured: true
  },
  {
    plan: 'Deluxe',
    price: '6.000–12.000 € <span class="text-xs">+ IVA</span>',
    delivery: '8–12 semanas',
    features: [
      'App completa con hasta 25 pantallas y funcionalidades avanzadas (ejemplo: reservas con pagos, perfiles de usuario, roles, multidioma)',
      'Backend escalable + Firebase para soportar más usuarios y datos',
      'Publicación incluida en Google Play y Apple Store, con configuración de las cuentas de desarrollador',
      'Deep links (abrir partes concretas de la app desde enlaces)',
      'Uso offline (sin conexión, con sincronización posterior)',
      'Notificaciones avanzadas y segmentadas',
      '3–6 integraciones externas (ejemplo: pasarelas de pago, CRM, sistemas de reservas)',
      'Publicaciones frecuentes (cada 2 semanas) con CI/CD configurado',
      'Diseño premium y a medida para diferenciar tu producto',
      'Ideal para: empresas y startups en plena fase de crecimiento, que necesitan una app sólida, escalable, con muchas funciones y actualizaciones constantes'
    ],
    integrations: ['Calendly', 'Google Sheets', 'Brevo', 'Stripe', 'WhatsApp API', 'Zapier', 'HubSpot'],
    backend: 'Backend escalable + Firebase'
  }
]

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: 'Lite Care',
    price: '14,99 €/mes',
    sla: 'hasta 72 h hábiles',
    features: [
      'Vigilamos tu app para detectar caídas o errores',
      '1 hora de cambios al mes (por ejemplo: corregir un texto, ajustar un color, añadir una imagen o icono)',
      'Revisión técnica cada 6 meses para que todo siga funcionando bien',
      'Copia de seguridad de la información (si aplica)',
      'Soporte por email siempre que lo necesites',
      'Pensado para: negocios pequeños o apps que ya funcionan y solo necesitan estar controladas y con pequeños retoques'
    ]
  },
  {
    name: 'Start Care',
    price: '29,99 €/mes',
    sla: 'hasta 48 h hábiles',
    features: [
      'Todo lo del plan Lite Care',
      '2 horas de cambios al mes (más margen para ajustes en textos, imágenes, pequeños bugs o detalles de diseño)',
      'Una actualización al mes de tu app (Android/PWA) para mantenerla al día',
      'Informe mensual sencillo con lo que se ha hecho y el estado de tu app',
      'Estadísticas básicas (errores, uso, métricas clave)',
      'Pensado para: apps que tienen algo más de movimiento, necesitan estar actualizadas con frecuencia y hacer cambios pequeños cada mes'
    ]
  },
  {
    name: 'Pro Care',
    price: '49,99 €/mes',
    sla: 'hasta 24 h hábiles',
    features: [
      'Todo lo del plan Start Care',
      '4 horas de cambios al mes (más margen para ajustes, corrección de errores o pequeños añadidos)',
      'Revisiones técnicas mensuales de librerías/SDK (para que la app siempre esté al día con las actualizaciones)',
      'Gestión de la ficha en la tienda (Google Play/App Store): textos, imágenes, recursos',
      'Correcciones urgentes prioritarias si la app se cae o hay un fallo crítico',
      'Revisión de seguridad y reglas de la base de datos (ej. Firebase)',
      'Informe con métricas y KPIs (uso, estabilidad, rendimiento)',
      'Pensado para: apps en crecimiento activo, que se actualizan con frecuencia y donde la fiabilidad y seguridad son clave'
    ]
  },
  {
    name: 'Deluxe Care',
    price: '119,99 €/mes',
    sla: 'hasta 12 h hábiles',
    features: [
      'Todo lo del plan Pro Care',
      '8 horas de cambios al mes (más flexibilidad para mejoras, correcciones o pequeños añadidos)',
      'Publicaciones cada 2 semanas de nuevas versiones (con CI/CD para no depender de fechas sueltas)',
      'Revisión de rendimiento trimestral (detectamos qué hace más lenta la app y lo optimizamos)',
      'Pequeños experimentos de crecimiento (A/B simples, mejoras en la conversión)',
      'Llamada mensual de roadmap (30 min) para planificar próximos pasos contigo',
      'Canal directo (Slack o WhatsApp Business) para soporte más ágil',
      'Pensado para: startups y negocios que están en fase de crecimiento rápido, necesitan cambios constantes y quieren acompañamiento cercano'
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
