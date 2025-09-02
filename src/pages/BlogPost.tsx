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
          transition={{ duration: 0.5 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Contenido del post */}
          <motion.div
            ref={contentRef}
            className="lg:col-span-3 prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Aquí iría el contenido MDX renderizado */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2>Contenido del artículo</h2>
              <p>
                Este es un placeholder para el contenido MDX del artículo "{post.title}".
                En una implementación real, aquí se renderizaría el contenido MDX compilado.
              </p>
              
              <h3>Características del artículo</h3>
              <ul>
                <li><strong>Categoría:</strong> {post.category}</li>
                <li><strong>Autor:</strong> {post.author}</li>
                <li><strong>Fecha:</strong> {post.date}</li>
                <li><strong>Tiempo de lectura:</strong> {post.readingTime}</li>
              </ul>

              <h3>Tags</h3>
              <p>Este artículo está etiquetado con: {post.tags.join(', ')}</p>

              <h3>Descripción</h3>
              <p>{post.description}</p>

              <h3>Contenido de ejemplo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h4>Subtítulo de ejemplo</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h3>Lista de elementos</h3>
              <ul>
                <li>Primer elemento de la lista</li>
                <li>Segundo elemento con más texto para probar el wrapping</li>
                <li>Tercer elemento</li>
              </ul>

              <h3>Código de ejemplo</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code>
{`// Ejemplo de código
function saludar(nombre) {
  return \`¡Hola \${nombre}!\`;
}

console.log(saludar('Mundo'));`}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Sidebar con índice */}
          <div className="lg:col-span-1">
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
