import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts, getArticleContent } from './blog.data';
import { getRelatedPosts } from './blog.utils';
import { BlogPostMeta, BlogPost } from './blog.types';

export const useBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo((): BlogPost | undefined => {
    const meta = blogPosts.find(p => p.slug === slug);
    if (!meta) return undefined;
    
    const content = getArticleContent(slug || '');
    return {
      ...meta,
      content
    };
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return getRelatedPosts(post, blogPosts, 3);
  }, [post]);

  return { post, relatedPosts, slug };
};

export const useBlogFilters = () => {
  // Aquí podrías implementar lógica para persistir filtros en localStorage
  // o sincronizar con la URL
  return {};
};
