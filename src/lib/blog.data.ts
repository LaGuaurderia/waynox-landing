import { BlogPostMeta } from './blog.types';

export const blogCategories = [
  {
    id: 'IA',
    name: 'IA',
    description: 'Inteligencia Artificial y Machine Learning',
    color: '#1E90FF',
  },
  {
    id: 'Formación',
    name: 'Formación',
    description: 'Cursos, tutoriales y guías prácticas',
    color: '#FF6B6B',
  },
  {
    id: 'Herramientas',
    name: 'Herramientas',
    description: 'Software, APIs y soluciones técnicas',
    color: '#4ECDC4',
  },
  {
    id: 'Negocio',
    name: 'Negocio',
    description: 'Estrategia, ROI y casos de uso',
    color: '#45B7D1',
  },
];

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'que-es-ia-para-pymes',
    title: 'Qué es la IA para pymes (y por dónde empezar)',
    description: 'Un mapa básico para introducir IA en procesos reales sin gastar de más.',
    date: '2025-01-15',
    author: 'Waynox Studio',
    tags: ['IA', 'Estrategia', 'Pymes'],
    category: 'IA',
    coverImage: '/blog/covers/1.0.png',
    readingTime: '5 min de lectura',
  },
  {
    slug: 'guia-formaciones-ia-2025',
    title: 'Guía completa de formaciones en IA para 2025',
    description: 'Los mejores cursos, certificaciones y recursos para dominar la IA este año.',
    date: '2025-01-20',
    author: 'Waynox Studio',
    tags: ['Formación', 'Cursos', 'IA', 'Certificaciones'],
    category: 'Formación',
    coverImage: '/blog/covers/1.1.png',
    readingTime: '8 min de lectura',
  },
  {
    slug: 'herramientas-no-code-para-automatizar',
    title: 'Herramientas no-code para automatizar tu negocio',
    description: 'Descubre cómo Zapier, Make y otras plataformas pueden revolucionar tus operaciones.',
    date: '2025-01-25',
    author: 'Waynox Studio',
    tags: ['No-code', 'Zapier', 'Automatización', 'Herramientas'],
    category: 'Herramientas',
    coverImage: '/blog/covers/1.2.png',
    readingTime: '6 min de lectura',
  },
  {
    slug: 'mejores-modelos-ia-por-caso-uso',
    title: 'Los mejores modelos de IA por caso de uso en 2025',
    description: 'Comparativa práctica: cuándo usar GPT-4, Claude, Gemini y otros modelos.',
    date: '2025-01-30',
    author: 'Waynox Studio',
    tags: ['Modelos', 'Comparativa', 'IA', 'GPT-4', 'Claude'],
    category: 'IA',
    coverImage: '/blog/covers/1.3.png',
    readingTime: '7 min de lectura',
  },
  {
    slug: 'como-medir-roi-ia',
    title: 'Cómo medir el ROI de la IA en tu empresa',
    description: 'Métricas clave, KPIs y casos reales para justificar inversiones en IA.',
    date: '2025-02-05',
    author: 'Waynox Studio',
    tags: ['KPIs', 'ROI', 'Métricas', 'Negocio', 'IA'],
    category: 'Negocio',
    coverImage: '/blog/covers/1.4.png',
    readingTime: '9 min de lectura',
  },
  {
    slug: 'prompt-engineering-practico',
    title: 'Prompt Engineering práctico: técnicas que funcionan',
    description: 'Aprende a escribir prompts efectivos con ejemplos reales y mejores prácticas.',
    date: '2025-02-10',
    author: 'Waynox Studio',
    tags: ['Prompts', 'Buenas prácticas', 'IA', 'Formación'],
    category: 'Formación',
    coverImage: '/blog/covers/1.5.png',
    readingTime: '6 min de lectura',
  },
];

// Función para obtener posts por categoría
export const getPostsByCategory = (category: string) => {
  if (category === 'Todos') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Función para obtener posts por tag
export const getPostsByTag = (tag: string) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Función para obtener todos los tags únicos
export const getAllTags = () => {
  const tags = blogPosts.flatMap(post => post.tags);
  return [...new Set(tags)];
};
