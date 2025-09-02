import matter from 'gray-matter';
import { BlogPost, BlogPostMeta } from './blog.types';

// Función simple para calcular tiempo de lectura (sin dependencias externas)
export const calculateReadingTime = (content: string): string => {
  // Promedio de palabras por minuto en español
  const wordsPerMinute = 200;
  
  // Contar palabras (separadas por espacios)
  const words = content.trim().split(/\s+/).length;
  
  // Calcular minutos
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return `${minutes} min de lectura`;
};

// Función para procesar archivo MDX
export const processMDX = (content: string, slug: string): BlogPost => {
  const { data, content: mdxContent } = matter(content);
  
  const meta: BlogPostMeta = {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags || [],
    category: data.category,
    coverImage: data.coverImage,
    readingTime: calculateReadingTime(mdxContent),
  };

  return {
    ...meta,
    content: mdxContent,
  };
};

// Función para formatear fecha en español
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Función para obtener posts relacionados
export const getRelatedPosts = (
  currentPost: BlogPostMeta,
  allPosts: BlogPostMeta[],
  limit: number = 3
): BlogPostMeta[] => {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .sort((a, b) => {
      // Priorizar posts de la misma categoría
      if (a.category === currentPost.category && b.category !== currentPost.category) return -1;
      if (b.category === currentPost.category && a.category !== currentPost.category) return 1;
      
      // Luego por tags comunes
      const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      
      if (aCommonTags !== bCommonTags) return bCommonTags - aCommonTags;
      
      // Finalmente por fecha más reciente
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
};
