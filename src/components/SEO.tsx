import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  meta?: Record<string, string>
  article?: {
    publishedTime?: string
    tags?: string[]
    author?: string
  }
}

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
)

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  meta = {},
  article 
}) => {
  const fullTitle = title || 'Waynox Studio'
  const desc = description ?? 'Desarrollo de apps Flutter y webs Next.js para pymes y startups.'
  const img = image ?? '/favicon.ico'
  const pageUrl = url ?? 'https://waynox.studio'
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      
      {/* Open Graph básicos */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={img} />
      
      {/* Twitter Card básicos */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      
      {/* Metadatos del artículo si es un post del blog */}
      {type === 'article' && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:author" content={article.author} />
        </>
      )}
      
      {/* Metadatos personalizados */}
      {Object.entries(meta).map(([key, value]) => (
        <meta key={key} property={key} content={value} />
      ))}
    </Helmet>
  )
}

export default SEO


