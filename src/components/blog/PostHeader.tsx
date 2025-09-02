import React from 'react';
import { motion } from 'framer-motion';
import { BlogPostMeta } from '../../lib/blog.types';
import { formatDate } from '../../lib/blog.utils';
import TagBadge from './TagBadge';

interface PostHeaderProps {
  post: BlogPostMeta;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <motion.header
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Imagen destacada */}
      <div className="relative mb-8 overflow-hidden rounded-2xl aspect-video">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Contenido del header */}
      <div className="max-w-4xl mx-auto">
        {/* Categoría */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: getCategoryColor(post.category) }}
          >
            {post.category}
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {post.title}
        </motion.h1>

        {/* Descripción */}
        <motion.p
          className="text-xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {post.description}
        </motion.p>

        {/* Metadatos */}
        <motion.div
          className="flex flex-wrap items-center gap-6 text-gray-400 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(post.date)}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.readingTime}</span>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </motion.div>
      </div>
    </motion.header>
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

export default PostHeader;
