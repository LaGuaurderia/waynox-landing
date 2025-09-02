import { BlogPostMeta } from './blog.types';

// Función para verificar si existe una imagen OG para un post
export const getOgImagePath = (slug: string): string => {
  return `/og/${slug}.png`;
};

// Función para verificar si existe una imagen OG
export const hasOgImage = async (slug: string): Promise<boolean> => {
  try {
    const response = await fetch(getOgImagePath(slug), { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Función para obtener la URL de la imagen OG (con fallback)
export const getOgImageUrl = (post: BlogPostMeta, baseUrl: string = ''): string => {
  const ogPath = getOgImagePath(post.slug);
  return `${baseUrl}${ogPath}`;
};

// Función para generar metadatos OG completos para un post
export const generateOgMeta = (post: BlogPostMeta, baseUrl: string = '') => {
  const ogImageUrl = getOgImageUrl(post, baseUrl);
  
  return {
    // Open Graph
    'og:title': post.title,
    'og:description': post.description,
    'og:image': ogImageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': `${post.title} - ${post.category}`,
    'og:type': 'article',
    'og:url': `${baseUrl}/blog/${post.slug}`,
    
    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': post.title,
    'twitter:description': post.description,
    'twitter:image': ogImageUrl,
    'twitter:image:alt': `${post.title} - ${post.category}`,
    
    // Article specific
    'article:published_time': post.date,
    'article:author': post.author,
    'article:section': post.category,
    'article:tag': post.tags.join(', '),
    
    // Schema.org
    'schema:name': post.title,
    'schema:description': post.description,
    'schema:image': ogImageUrl,
    'schema:datePublished': post.date,
    'schema:author': post.author,
  };
};

// Función para generar metadatos básicos del blog
export const generateBlogMeta = (baseUrl: string = '') => {
  return {
    'og:title': 'Blog | Waynox Studio',
    'og:description': 'Artículos sobre IA, formación y herramientas para impulsar tu negocio',
    'og:image': `${baseUrl}/og/blog-default.png`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': 'website',
    'og:url': `${baseUrl}/blog`,
    
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Blog | Waynox Studio',
    'twitter:description': 'Artículos sobre IA, formación y herramientas para impulsar tu negocio',
    'twitter:image': `${baseUrl}/og/blog-default.png`,
  };
};
