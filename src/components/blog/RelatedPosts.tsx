import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPostMeta } from '../../lib/blog.types';
import { formatDate } from '../../lib/blog.utils';
import TagBadge from './TagBadge';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-700">
      <motion.h2
        className="text-2xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        Artículos relacionados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Imagen */}
            <div className="aspect-video overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Contenido */}
            <div className="p-4">
              {/* Categoría */}
              <div className="mb-2">
                <span 
                  className="inline-block px-2 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: getCategoryColor(post.category) }}
                >
                  {post.category}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Metadatos */}
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
                {post.tags.length > 2 && (
                  <span className="text-gray-500 text-xs">+{post.tags.length - 2} más</span>
                )}
              </div>

              {/* Botón Leer */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              >
                Leer más
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

// Función para obtener el color de la categoría
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'IA': '#1E90FF',
    'Formación': '#FF6B6B',
    'Herramientas': '#4ECDC4',
    'Negocio': '#45B7D1',
  };
  return colors[category] || '#6B7280';
};

export default RelatedPosts;
