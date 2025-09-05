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
    slug: 'mejores-practicas-seo-2024',
    title: 'Mejores Prácticas de SEO para 2024',
    description: 'Claves de SEO 2024: Core Web Vitals, contenido de calidad y E-A-T.',
    date: '2024-01-20',
    author: 'Waynox Studio',
    tags: ['seo', 'marketing-digital', 'posicionamiento', 'web'],
    category: 'marketing',
    coverImage: '/blog/covers/1.0.png',
    readingTime: '6 min de lectura',
  },
  {
    slug: 'que-es-ia-para-pymes',
    title: '¿Qué es la Inteligencia Artificial para PYMES?',
    description: 'Cómo la IA puede ayudar a PYMES: automatización, datos y eficiencia.',
    date: '2024-01-15',
    author: 'Waynox Studio',
    tags: ['ia', 'pymes', 'automatizacion', 'productividad'],
    category: 'tecnologia',
    coverImage: '/blog/covers/1.1.png',
    readingTime: '5 min de lectura',
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
