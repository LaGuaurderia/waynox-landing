import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
)

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const fullTitle = title || 'Waynox Studio'
  const desc = description ?? 'Desarrollo de apps Flutter y webs Next.js para pymes y startups.'
  const img = image ?? '/favicon.ico'
  const pageUrl = url ?? 'https://waynox.studio'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}

export default SEO


