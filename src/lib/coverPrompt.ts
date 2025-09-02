export interface PostMetadata {
  title: string;
  category: string;
  tags: string[];
  date: string;
  slug: string;
}

/**
 * Construye un prompt optimizado para generar portadas de blog
 * siguiendo el estilo visual de Waynox
 */
export function buildPrompt(meta: PostMetadata): string {
  const { title, category, tags } = meta;
  
  const topTags = tags.slice(0, 3).join(', ');
  const categoryVisuals = getCategoryVisuals(category);
  
  return `Create a stylized cartoon/illustration blog cover (no text, no letters, no logos, no watermarks), horizontal composition optimized for 1200x630.

Brand palette: dark background #111111, primary accent #1E90FF (bright blue), whites #FFFFFF, light grays #F5F7FB, medium grays #444444.

Topic: ${title}
Category: ${category}
Tags: ${topTags}

Visual focus: ${categoryVisuals}
People/objects: include friendly, modern characters and/or simple props directly related to the topic (business people, robots/helpers, laptops, books, gears, dashboards, charts, lightbulb ideas, brain/AI forms). Avoid any written characters on screen.

Style: clean vector cartoon, bold shapes, soft rounded edges, subtle gradients, soft lighting, slightly 3D depth, vibrant but tasteful colors matching the palette.
Composition: balanced horizontal layout, elements grouped on the left/middle; leave a softer background area to the right for future overlays.
Lighting: soft studio lighting with gentle shadows; no harsh reflections.
Do not include: any text, letters, numbers, UI with readable text, trademarks, or watermarks.

High detail, crisp edges, modern tech-cartoon aesthetic, suitable for professional blog covers.`;
}

/**
 * Mapea categorías a elementos visuales específicos
 */
function getCategoryVisuals(category: string): string {
  const categoryMap: Record<string, string> = {
    'tecnologia': 'Circuit patterns, digital elements, tech grids, blue data streams',
    'desarrollo': 'Code symbols, binary patterns, development tools, programming concepts',
    'diseño': 'Creative elements, color theory, visual harmony, design principles',
    'marketing': 'Growth charts, target audiences, conversion funnels, business metrics',
    'emprendimiento': 'Business growth, innovation, success, upward trends',
    'productividad': 'Time management, efficiency, optimization, streamlined processes',
    'ia': 'Artificial intelligence, neural networks, machine learning, futuristic tech',
    'web': 'Web technologies, responsive design, modern interfaces, digital experiences',
    'mobile': 'Mobile devices, app development, touch interfaces, mobile-first design',
    'cloud': 'Cloud computing, scalability, infrastructure, digital transformation',
    'seguridad': 'Cybersecurity, protection, digital safety, secure systems',
    'analytics': 'Data visualization, metrics, insights, performance tracking',
    'ux': 'User experience, human-centered design, usability, user journeys',
    'seo': 'Search optimization, visibility, ranking, digital presence',
    'social': 'Social media, community, networking, digital connections',
    'ecommerce': 'Online shopping, digital commerce, customer experience, sales',
    'automation': 'Process automation, efficiency, workflow optimization, smart systems',
    'innovation': 'Cutting-edge technology, breakthrough ideas, future concepts, advancement',
    'sostenibilidad': 'Green technology, environmental impact, sustainable solutions, eco-friendly',
    'fintech': 'Financial technology, digital banking, fintech innovation, money management'
  };

  const normalizedCategory = category.toLowerCase().trim();
  
  // Buscar coincidencia exacta o parcial
  for (const [key, visuals] of Object.entries(categoryMap)) {
    if (normalizedCategory.includes(key) || key.includes(normalizedCategory)) {
      return visuals;
    }
  }

  // Fallback genérico para categorías no mapeadas
  return 'Abstract geometric patterns, modern design elements, professional aesthetics, tech-inspired visuals';
}

/**
 * Genera un prompt alternativo más específico para casos especiales
 */
export function buildDetailedPrompt(meta: PostMetadata, specificStyle?: string): string {
  const basePrompt = buildPrompt(meta);
  
  if (specificStyle) {
    return `${basePrompt}

Additional style requirements: ${specificStyle}`;
  }
  
  return basePrompt;
}
