import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import SEO from '../components/SEO';
import Section from '../components/Section';
import {
  BlogCard,
  CategoryNav,
  SearchBar,
  Pagination,
  EmptyState,
  TagBadge,
} from '../components/blog';
import { blogPosts, blogCategories, getAllTags } from '../lib/blog.data';
import { BlogPostMeta, BlogFilters } from '../lib/blog.types';
import { generateBlogMeta } from '../lib/og.utils';

const POSTS_PER_PAGE = 10;

const Blog: React.FC = () => {
  const [filters, setFilters] = useState<BlogFilters>({
    search: '',
    category: 'Todos',
    tags: [],
    page: 1,
  });

  // Configuración de Fuse.js para búsqueda
  const fuse = useMemo(() => {
    return new Fuse(blogPosts, {
      keys: ['title', 'description', 'tags'],
      threshold: 0.3,
      includeScore: true,
    });
  }, []);

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filtro por categoría
    if (filters.category !== 'Todos') {
      posts = posts.filter(post => post.category === filters.category);
    }

    // Filtro por tags
    if (filters.tags.length > 0) {
      posts = posts.filter(post => 
        filters.tags.some(tag => post.tags.includes(tag))
      );
    }

    // Búsqueda por texto
    if (filters.search.trim()) {
      const searchResults = fuse.search(filters.search);
      const searchPostIds = searchResults.map(result => result.item.slug);
      posts = posts.filter(post => searchPostIds.includes(post.slug));
    }

    return posts;
  }, [filters, fuse]);

  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (filters.page - 1) * POSTS_PER_PAGE,
    filters.page * POSTS_PER_PAGE
  );

  // Handlers
  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value, page: 1 }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category, page: 1 }));
  };

  const handleTagToggle = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag],
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allTags = getAllTags();

  // Generar metadatos OG para el blog
  const blogOgMeta = generateBlogMeta();

  return (
    <>
      <SEO title="Blog" description="Artículos sobre desarrollo web y móvil" />
      
      <Section className="pt-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 style={{ color: 'var(--color-text)' }} className="text-4xl font-bold mb-4">
              Blog de Waynox Studio
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }} className="text-lg">
              Artículos sobre desarrollo, tecnología y mejores prácticas
            </p>
          </motion.div>

          {/* Filtros y búsqueda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <SearchBar
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Buscar artículos..."
            />
            
            <CategoryNav
              categories={blogCategories}
              selectedCategory={filters.category}
              onCategoryChange={handleCategoryChange}
            />
            
            {filters.tags.length > 0 && (
              <div className="mt-4">
                <p style={{ color: 'var(--color-text-muted)' }} className="text-sm mb-2">
                  Tags seleccionados:
                </p>
                <div className="flex flex-wrap gap-2">
                  {filters.tags.map(tag => (
                    <TagBadge
                      key={tag}
                      tag={tag}
                      isSelected={true}
                      onClick={() => handleTagToggle(tag)}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Posts */}
          {paginatedPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {paginatedPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <EmptyState
              searchTerm={filters.search}
              category={filters.category}
              tags={filters.tags}
            />
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Pagination
                currentPage={filters.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Blog;


