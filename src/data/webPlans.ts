export interface WebPlan {
  plan: 'Landing' | 'Pro' | 'eCommerce' | 'Deluxe'
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

export interface WebMaintenancePlan {
  name: string
  price: string
  sla: string
  features: string[]
}

export const webPlans: WebPlan[] = [
  {
    plan: 'Landing',
    price: '499–1.200 €',
    delivery: '1–2 semanas',
    scope: '1 página (landing) + secciones: hero, servicios, about, CTA, contacto',
    features: [
      'CMS opcional ligero (MD/JSON) o sin CMS',
      'SEO básico (metas, OG)',
      'Core web vitals OK',
      '1 ronda de cambios (máx. 10 puntos)',
      'Hosting estático / Vercel'
    ],
    integrations: [],
    backend: 'Sin backend (estático)',
    publication: 'Hosting estático / Vercel',
    ctaText: 'Solicitar Web Landing',
    ctaLink: '/contacto?plan=web-landing'
  },
  {
    plan: 'Pro',
    price: '1.200–2.500 €',
    delivery: '2–4 semanas',
    scope: '4–8 páginas (servicios, proyectos, blog básico)',
    features: [
      'Next.js con SSR/SSG',
      'CMS headless ligero (ej. Notion/Markdown o Sanity básico)',
      'Formularios (Brevo/FormSpark)',
      'Analítica',
      'SEO on-page',
      'Accesibilidad AA',
      'Diseño base'
    ],
    integrations: ['Brevo', 'FormSpark', 'Google Analytics'],
    backend: 'Next.js + CMS headless',
    publication: 'Vercel / Netlify',
    ctaText: 'Solicitar Web Pro',
    ctaLink: '/contacto?plan=web-pro'
  },
  {
    plan: 'eCommerce',
    price: '2.500–5.500 €',
    delivery: '4–7 semanas',
    scope: 'Catálogo + checkout (Stripe/Shopify Headless)',
    features: [
      'Gestión de productos básica',
      'Cupones simples',
      'Integraciones (Brevo, Zapier)',
      'Métricas',
      'Sitemaps',
      'Optimización CWV',
      'Imágenes responsivas'
    ],
    integrations: ['Stripe', 'Shopify Headless', 'Brevo', 'Zapier'],
    backend: 'Next.js + Stripe/Shopify + CMS',
    publication: 'Vercel / Netlify',
    ctaText: 'Solicitar Web eCommerce',
    ctaLink: '/contacto?plan=web-ecommerce',
    featured: true
  },
  {
    plan: 'Deluxe',
    price: '5.500–10.000 €',
    delivery: '6–10 semanas',
    scope: '10–20 páginas, CMS avanzado (Sanity/Strapi), multidioma',
    features: [
      'Secciones dinámicas',
      'Buscador',
      'Blog avanzado',
      'Integraciones 3–6 (CRM, Sheets, automación)',
      'Auditoría SEO + performance',
      'Despliegues por entorno (staging/prod)'
    ],
    integrations: ['Sanity', 'Strapi', 'HubSpot', 'Google Sheets', 'Zapier', 'Brevo'],
    backend: 'Next.js + CMS avanzado + APIs',
    publication: 'Vercel / Netlify + CDN',
    ctaText: 'Solicitar Web Deluxe',
    ctaLink: '/contacto?plan=web-deluxe'
  }
]

export const webMaintenancePlans: WebMaintenancePlan[] = [
  {
    name: 'Web Care Lite',
    price: '29 €/mes',
    sla: '≤72 h',
    features: [
      'Actualizaciones menores',
      'Uptime check',
      '1 h/mes de microtareas',
      'Informe básico'
    ]
  },
  {
    name: 'Web Care Pro',
    price: '69 €/mes',
    sla: '≤48 h',
    features: [
      'Todo lo de Lite +',
      '2 h/mes de microtareas',
      'Parches mensuales',
      'Backups',
      'Métricas y SEO básico'
    ]
  },
  {
    name: 'Web Care Business',
    price: '129 €/mes',
    sla: '≤24 h',
    features: [
      '4 h/mes de microtareas',
      'Optimización CWV',
      'Mejoras SEO on-page',
      'Experimentos A/B simples',
      'Informes mensuales'
    ]
  },
  {
    name: 'Web Care Deluxe',
    price: '199 €/mes',
    sla: '≤12 h',
    features: [
      '8 h/mes de microtareas',
      'Roadmap mensual (30\')',
      'Integraciones nuevas pequeñas',
      'Auditorías trimestrales'
    ]
  }
]

export const webContractNotes = [
  '50% a inicio y 50% a la entrega',
  'Alcance cerrado por paquete; extras a 45 €/h',
  'Dominios/hosting/servicios de terceros a cargo del cliente',
  'Cancelación del mantenimiento con 30 días de aviso'
]
