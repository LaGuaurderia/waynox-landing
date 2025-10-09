import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import {
  PostHeader,
  TableOfContents,
  ShareBar,
  RelatedPosts,
} from '../components/blog';
import { useBlogPost } from '../lib/blog.hooks';
import { getOgImageUrl, generateOgMeta } from '../lib/og.utils';

const BlogPost: React.FC = () => {
  const { post, relatedPosts } = useBlogPost();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  if (!post) {
    return (
      <Section>
        <div className="text-center py-16">
          <FileText className="w-16 h-16 mx-auto text-gray-500 mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <p className="text-gray-400 mb-8">
            El artículo que buscas no existe o ha sido eliminado.
          </p>
          <motion.button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Volver al blog
          </motion.button>
        </div>
      </Section>
    );
  }

  // Generar metadatos OG para el post
  const ogImageUrl = getOgImageUrl(post);
  const ogMeta = generateOgMeta(post);

  return (
    <>
      <SEO
        title={`${post.title} | Blog Waynox Studio`}
        description={post.description}
        image={ogImageUrl}
        type="article"
        meta={ogMeta}
        article={{
          publishedTime: post.date,
          tags: post.tags,
          author: post.author,
        }}
      />

      <Section>
        {/* Botón volver */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0 }}
        >
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </button>
        </motion.div>

        {/* Header del post */}
        <PostHeader post={post} />

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contenido del post */}
          <motion.div
            className="lg:flex-1 lg:max-w-4xl prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0 }}
          >
            {/* Aquí iría el contenido MDX renderizado */}
            <div 
              ref={contentRef}
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.*$)/gim, (match, title) => {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h1 id="${id}" class="text-3xl font-bold mb-6">${title}</h1>`;
                  })
                  .replace(/^## (.*$)/gim, (match, title) => {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h2 id="${id}" class="text-2xl font-bold mb-4 mt-8">${title}</h2>`;
                  })
                  .replace(/^### (.*$)/gim, (match, title) => {
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h3 id="${id}" class="text-xl font-bold mb-3 mt-6">${title}</h3>`;
                  })
                  .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                  .replace(/^\- (.*$)/gim, '<li class="mb-2">$1</li>')
                  .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-64 mx-auto rounded-lg shadow-lg my-6" />')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<[h|l])/gim, '<p class="mb-4">')
                  .replace(/<li class="mb-2">/g, '<ul class="list-disc pl-6 mb-4"><li class="mb-2">')
                  .replace(/(<li class="mb-2">.*<\/li>)(?!.*<li)/g, '$1</ul>')
              }}
            />
          </motion.div>

          {/* Sidebar con índice */}
          <div className="lg:w-80 lg:flex-shrink-0 order-first lg:order-last">
            <TableOfContents contentRef={contentRef} />
          </div>
        </div>

        {/* Barra de compartir */}
        <ShareBar
          url={window.location.href}
          title={post.title}
          description={post.description}
        />

        {/* Artículos relacionados */}
        <RelatedPosts posts={relatedPosts} />
      </Section>
    </>
  );
};

export default BlogPost;
