import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPostMeta } from '../../lib/blog.types';
import { formatDate } from '../../lib/blog.utils';
import TagBadge from './TagBadge';

interface BlogCardProps {
  post: BlogPostMeta;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Imagen destacada */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <div className="mb-3">
          <span 
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: getCategoryColor(post.category) }}
          >
            {post.category}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
          {post.title}
        </h3>

        {/* Metadatos */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Descripción */}
        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          {post.tags.length > 3 && (
            <span className="text-gray-500 text-xs">+{post.tags.length - 3} más</span>
          )}
        </div>

        {/* Botón Leer */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 group-hover:scale-105"
        >
          Leer artículo
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

export default BlogCard;
