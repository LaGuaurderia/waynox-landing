export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  linkedin?: string
  email?: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: string
}

export interface WhyUsPoint {
  id: string
  title: string
  description: string
  icon: string
}

export interface TechBadge {
  id: string
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

// Datos del equipo
export const teamMembers: TeamMember[] = [
  {
    id: 'ruben',
    name: 'Rubén Martín',
    role: 'Product & Apps',
    bio: 'Especialista en Flutter y Firebase. Desarrolla aplicaciones móviles nativas con enfoque en UX y rendimiento.',
    photo: '/images/team/ruben.jpg',
    linkedin: 'https://linkedin.com/in/ruben-martin',
    email: 'ruben@waynox.studio'
  },
  {
    id: 'xenia',
    name: 'Xènia',
    role: 'UX/UI & Operaciones',
    bio: 'Diseñadora de experiencias digitales centradas en el usuario. Gestiona la operativa y comunicación con clientes.',
    photo: '/images/team/xenia.jpg',
    linkedin: 'https://linkedin.com/in/xenia-waynox',
    email: 'xenia@waynox.studio'
  }
]

// Valores de la empresa
export const companyValues: Value[] = [
  {
    id: 'transparencia',
    title: 'Transparencia',
    description: 'Comunicación clara en cada etapa del proyecto, sin sorpresas.',
    icon: '🔍'
  },
  {
    id: 'eficiencia',
    title: 'Eficiencia',
    description: 'Procesos optimizados para entregar valor rápidamente.',
    icon: '⚡'
  },
  {
    id: 'calidad',
    title: 'Calidad',
    description: 'Código limpio, mantenible y escalable en cada línea.',
    icon: '✨'
  },
  {
    id: 'datos',
    title: 'Orientación a datos',
    description: 'Decisiones basadas en métricas y resultados reales.',
    icon: '📊'
  },
  {
    id: 'soporte',
    title: 'Soporte continuo',
    description: 'Acompañamiento post-lanzamiento y mantenimiento activo.',
    icon: '🔄'
  }
]

// Proceso de trabajo
export const processSteps: ProcessStep[] = [
  {
    id: 'confidencialidad',
    title: 'Contrato de Confidencialidad',
    description: 'Establecemos legalmente la protección de toda la información e ideas del proyecto.',
    icon: '🔒'
  },
  {
    id: 'estructura',
    title: 'Estructura Gratuita',
    description: 'Creamos y entregamos un esquema básico sin coste para definir el alcance técnico.',
    icon: '📋'
  },
  {
    id: 'inicio',
    title: 'Inicio del Proyecto',
    description: 'Arranque oficial: se asignan recursos, se planifica el desarrollo y se establece el roadmap.',
    icon: '🚀'
  },
  {
    id: 'lanzamiento',
    title: 'Lanzamiento',
    description: 'Publicación final, QA/pruebas y optimización, con soporte y seguimiento post-lanzamiento.',
    icon: '✨'
  }
]

// Puntos diferenciadores
export const whyUsPoints: WhyUsPoint[] = [
  {
    id: 'tiempos',
    title: 'Tiempos realistas',
    description: '4–8 semanas típicas para MVPs funcionales',
    icon: '⏱️'
  },
  {
    id: 'codigo',
    title: 'Código mantenible',
    description: 'CI/CD, métricas y documentación incluida',
    icon: '📝'
  },
  {
    id: 'integraciones',
    title: 'Integraciones',
    description: 'Brevo, Zapier, Calendly, Google Sheets',
    icon: '🔗'
  },
  {
    id: 'soporte',
    title: 'Soporte mensual',
    description: 'Mantenimiento y actualizaciones continuas',
    icon: '🛠️'
  }
]

// Hitos de la empresa
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'fundacion',
    year: '2024',
    title: 'Nace Waynox Studio',
    description: 'Fundación con enfoque en desarrollo ágil y resultados'
  },
  {
    id: 'primer-mvp',
    year: '2024',
    title: 'Primer MVP en Flutter',
    description: 'Sistema de reservas para negocio local'
  },
  {
    id: 'sistema-colas',
    year: '2025',
    title: 'Sistema de colas para radio taxi',
    description: 'Piloto exitoso con empresa de transporte'
  },
  {
    id: 'packs-accesibles',
    year: '2025',
    title: 'Lanzamos packs accesibles',
    description: 'Soluciones web y apps con precios transparentes'
  }
]

// Stack tecnológico
export const techStack: TechBadge[] = [
  {
    id: 'flutter',
    name: 'Flutter',
    icon: '📱',
    category: 'frontend'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: '🔥',
    category: 'backend'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '⚡',
    category: 'frontend'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    icon: '🔌',
    category: 'tools'
  },
  {
    id: 'brevo',
    name: 'Brevo',
    icon: '📧',
    category: 'tools'
  }
]

// Testimonios
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Carlos Méndez',
    role: 'CEO',
    company: 'Taxi Express',
    content: 'Waynox transformó nuestro negocio con una app que gestiona colas en tiempo real. Entregaron en 6 semanas exactamente como prometieron.',
    avatar: '/images/testimonials/carlos.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Ana García',
    role: 'Fundadora',
    company: 'Beauty Studio',
    content: 'La app de reservas multiplicó nuestras citas por 3. El soporte post-lanzamiento ha sido excepcional.',
    avatar: '/images/testimonials/ana.jpg'
  },
  {
    id: 'testimonial-3',
    name: 'Miguel Torres',
    role: 'Director Técnico',
    company: 'StartupTech',
    content: 'Código limpio, documentación perfecta y escalabilidad desde el día 1. Waynox entiende el negocio, no solo la tecnología.',
    avatar: '/images/testimonials/miguel.jpg'
  }
]

// Preguntas frecuentes
export const faqItems: FAQItem[] = [
  {
    id: 'plazos',
    question: '¿Cómo trabajáis plazos y entregas?',
    answer: 'Definimos cronogramas realistas desde el inicio, con entregas semanales y comunicación constante. Típicamente 4-8 semanas para MVPs, dependiendo de la complejidad.'
  },
  {
    id: 'mantenimiento',
    question: '¿Qué incluye el mantenimiento?',
    answer: 'Actualizaciones de seguridad, mejoras de rendimiento, soporte técnico, backups automáticos y monitoreo 24/7. Incluido en nuestros planes mensuales.'
  },
  {
    id: 'publicacion',
    question: '¿Publicáis en Google Play/App Store?',
    answer: 'Sí, gestionamos todo el proceso de publicación: preparación de assets, configuración de stores, envío a revisión y publicación. También mantenemos las apps actualizadas.'
  },
  {
    id: 'mvp-escalar',
    question: '¿Podéis empezar con un MVP y escalar?',
    answer: 'Absolutamente. Es nuestra metodología preferida: lanzamos rápido, validamos con usuarios reales y escalamos basándonos en datos. Cada iteración mejora el producto.'
  },
  {
    id: 'precios',
    question: '¿Cómo definís el precio de un proyecto?',
    answer: 'Basamos nuestros precios en la complejidad técnica, tiempo estimado y valor que aporta al negocio. Ofrecemos presupuestos transparentes sin costes ocultos.'
  }
]

// Textos de la página
export const pageTexts = {
  hero: {
    title: 'Somos Waynox Studio',
    subtitle: 'Desarrollamos apps y webs que venden: estrategia, diseño y código con entregas realistas.',
    ctaPrimary: 'Solicitar propuesta',
    ctaSecondary: 'Ver proyectos'
  },
  mission: {
    title: 'Nuestra Misión',
    subtitle: 'Construimos el futuro digital de las empresas',
    mission: 'Acelerar a pymes y startups con productos digitales eficaces.',
    vision: 'Tecnología accesible y sostenible, centrada en el negocio.'
  },
  team: {
    title: 'Nuestro Equipo',
    subtitle: 'Expertos apasionados por crear soluciones digitales'
  },
  process: {
    title: 'Nuestro Proceso',
    subtitle: 'Metodología probada para resultados consistentes',
    cta: 'Conocer nuestro proceso'
  },
  whyUs: {
    title: '¿Por qué elegirnos?',
    subtitle: 'Diferenciadores que marcan la diferencia'
  },
  timeline: {
    title: 'Nuestra Historia',
    subtitle: 'Hitos que definen nuestro camino'
  },
  tech: {
    title: 'Stack Tecnológico',
    subtitle: 'Trabajamos con herramientas modernas, seguras y con soporte.',
    description: 'Utilizamos tecnologías probadas en producción que garantizan estabilidad y escalabilidad.'
  },
  socialProof: {
    title: 'Lo que dicen nuestros clientes',
    subtitle: 'Testimonios de empresas que confían en nosotros'
  },
  cta: {
    title: '¿Hablamos de tu proyecto?',
    subtitle: 'Te proponemos el plan óptimo y un calendario realista.',
    button: 'Solicitar propuesta'
  }
}
