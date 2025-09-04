export interface WebPlan {
  plan: 'Landing' | 'Pro' | 'eCommerce' | 'Deluxe'
  price: string
  delivery: string
  scope?: string
  features: string[]
  integrations: string[]
  backend: string
  publication?: string
  ctaText: string
  ctaLink: string
  featured?: boolean
}

export interface WebMaintenancePlan {
  name: string
  price: string
  sla: string
  features: string[]
}

export const webPlans: WebPlan[] = [
  {
    plan: 'Landing',
    price: '349 € a 749 € <span class="text-xs">+ IVA</span>',
    delivery: 'hasta 1 semana',
    features: [
      'Página web sencilla de 1 a 3 secciones (ejemplo: inicio, servicios, contacto)',
      'Opcional: gestor de contenidos ligero para que puedas cambiar textos e imágenes sin ayuda técnica',
      'SEO básico: títulos, descripciones y vista previa en Google y redes sociales',
      'Web rápida y optimizada (para que cargue bien en móviles y ordenadores)',
      '1 ronda de cambios (hasta 10 ajustes)',
      'Hosting incluido en Vercel (servidor rápido y seguro)',
      'Ideal para: negocios que necesitan una web clara, rápida y profesional para empezar a tener presencia online'
    ],
    integrations: [],
    backend: 'Sin backend (estático)',
    ctaText: 'Solicitar Web Landing',
    ctaLink: '/contacto?plan=web-landing',
    featured: true
  },
  {
    plan: 'Pro',
    price: '799 € a 1.499 € <span class="text-xs">+ IVA</span>',
    delivery: '1–2 semanas',
    features: [
      'Web de 5 a 7 páginas con navegación completa',
      'Gestor de contenidos sencillo (ejemplo: Notion o similar) para que puedas cambiar textos e imágenes fácilmente',
      'Formularios conectados (contacto, reservas o suscripción a newsletter)',
      'SEO básico optimizado en cada página para mejorar visibilidad en Google',
      'Analítica integrada para ver visitas, secciones más vistas y rendimiento',
      'Diseño adaptado a tu marca con estilo profesional',
      'Web accesible y responsive, lista para móviles y ordenadores',
      'Ideal para: negocios que necesitan una web más completa, editable y lista para posicionarse mejor en internet'
    ],
    integrations: ['Brevo', 'FormSpark', 'Google Analytics'],
    backend: 'Next.js + CMS headless',
    ctaText: 'Solicitar Web Pro',
    ctaLink: '/contacto?plan=web-pro'
  },
  {
    plan: 'eCommerce',
    price: '1.649 € a 3.999 € <span class="text-xs">+ IVA</span>',
    delivery: '3–4 semanas',
    features: [
      'Tienda online con gestión básica de productos (subir, editar y eliminar)',
      'Carrito de compra y cupones simples',
      'Integraciones externas (ejemplo: Brevo para email marketing, Zapier para automatizar tareas)',
      'Métricas de ventas y tráfico para seguir el rendimiento',
      'Sitemaps y SEO optimizado para mejorar visibilidad en buscadores',
      'Optimización de velocidad (CWV) para que cargue rápido',
      'Imágenes adaptadas para móvil y ordenador',
      'Ideal para: negocios que quieren vender online de forma sencilla y profesional, con una tienda lista para crecer'
    ],
    integrations: ['Stripe', 'Shopify Headless', 'Brevo', 'Zapier'],
    backend: 'Next.js + Stripe/Shopify + CMS',
    ctaText: 'Solicitar Web eCommerce',
    ctaLink: '/contacto?plan=web-ecommerce'
  },
  {
    plan: 'Deluxe',
    price: '4.149 € a 7.899 € <span class="text-xs">+ IVA</span>',
    delivery: '6–8 semanas',
    features: [
      'Web completa y avanzada con más de 10 páginas y funcionalidades a medida',
      'Gestor de contenidos profesional (para editar textos, imágenes, artículos o secciones enteras sin depender de técnicos)',
      'Tienda online completa con gestión avanzada de productos, cupones, envíos y métodos de pago',
      'Integraciones externas múltiples (CRM, ERP, pasarelas de pago, sistemas de reservas, email marketing, etc.)',
      'SEO avanzado y optimización total para buscadores',
      'Panel de analítica personalizado con métricas de usuarios, ventas y rendimiento',
      'Diseño premium y a medida adaptado 100% a la identidad de la marca',
      'Escalable y preparado para crecer, con actualizaciones frecuentes',
      'Ideal para: empresas que buscan una web de alto nivel, robusta y pensada para crecer, con tienda online completa e integraciones avanzadas'
    ],
    integrations: ['Sanity', 'Strapi', 'HubSpot', 'Google Sheets', 'Zapier', 'Brevo'],
    backend: 'Next.js + CMS avanzado + APIs',
    ctaText: 'Solicitar Web Deluxe',
    ctaLink: '/contacto?plan=web-deluxe'
  }
]

export const webMaintenancePlans: WebMaintenancePlan[] = [
  {
    name: 'Lite Care',
    price: '14,99 €/mes',
    sla: 'hasta 72 h hábiles',
    features: [
      'Vigilamos tu web para detectar caídas o errores',
      '1 hora de cambios al mes (por ejemplo: corregir un texto, ajustar un color, añadir una imagen o icono)',
      'Revisión técnica cada 6 meses para que todo siga funcionando bien',
      'Copia de seguridad de la información (si aplica)',
      'Soporte por email siempre que lo necesites',
      'Pensado para: negocios pequeños o webs que ya funcionan y solo necesitan estar controladas y con pequeños retoques'
    ]
  },
  {
    name: 'Start Care',
    price: '29,99 €/mes',
    sla: 'hasta 48 h hábiles',
    features: [
      'Todo lo del plan Lite Care',
      '2 horas de cambios al mes (más margen para ajustes en textos, imágenes, pequeños bugs o detalles de diseño)',
      'Una actualización al mes de tu web para mantenerla al día',
      'Informe mensual sencillo con lo que se ha hecho y el estado de tu web',
      'Estadísticas básicas (errores, uso, métricas clave)',
      'Pensado para: webs que tienen algo más de movimiento, necesitan estar actualizadas con frecuencia y hacer cambios pequeños cada mes'
    ]
  },
  {
    name: 'Pro Care',
    price: '49,99 €/mes',
    sla: 'hasta 24 h hábiles',
    features: [
      'Todo lo del plan Start Care',
      '4 horas de cambios al mes (más margen para ajustes, corrección de errores o pequeños añadidos)',
      'Revisiones técnicas mensuales de librerías/SDK (para que la web siempre esté al día con las actualizaciones)',
      'Gestión de la ficha en buscadores: textos, imágenes, recursos',
      'Correcciones urgentes prioritarias si la web se cae o hay un fallo crítico',
      'Revisión de seguridad y reglas de la base de datos (ej. CMS)',
      'Informe con métricas y KPIs (uso, estabilidad, rendimiento)',
      'Pensado para: webs en crecimiento activo, que se actualizan con frecuencia y donde la fiabilidad y seguridad son clave'
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
      'Revisión de rendimiento trimestral (detectamos qué hace más lenta la web y lo optimizamos)',
      'Pequeños experimentos de crecimiento (A/B simples, mejoras en la conversión)',
      'Llamada mensual de roadmap (30 min) para planificar próximos pasos contigo',
      'Canal directo (Slack o WhatsApp Business) para soporte más ágil',
      'Pensado para: startups y negocios que están en fase de crecimiento rápido, necesitan cambios constantes y quieren acompañamiento cercano'
    ]
  }
]

export const webContractNotes = [
  '50% a inicio y 50% a la entrega',
  'Alcance cerrado por paquete; extras a 45 €/h',
  'Dominios/hosting/servicios de terceros a cargo del cliente',
  'Cancelación del mantenimiento con 30 días de aviso'
]
