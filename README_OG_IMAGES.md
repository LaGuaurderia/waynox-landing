# Sistema de Imágenes OG para el Blog

Este documento describe cómo funciona el sistema de generación automática de imágenes Open Graph (OG) para el blog de Waynox Studio.

## 🎯 Objetivo

Generar automáticamente imágenes OG de 1200x630 píxeles para cada post del blog, optimizadas para redes sociales (Facebook, Twitter, LinkedIn) y SEO.

## 🏗️ Arquitectura

### Componentes principales

- **`src/og/OgCard.tsx`**: Plantilla React para las imágenes OG
- **`scripts/generate-og.ts`**: Script de generación automática
- **`src/lib/og.utils.ts`**: Utilidades para manejo de metadatos OG
- **`public/og/`**: Directorio de salida para las imágenes PNG

### Tecnologías utilizadas

- **satori**: Renderiza componentes React a SVG
- **@resvg/resvg-js**: Convierte SVG a PNG de alta calidad
- **Inter**: Fuente tipográfica principal (descargada automáticamente)

## 🚀 Uso

### Generación automática

```bash
# Generar todas las imágenes OG
npm run og:gen

# Generar OG y luego hacer build
npm run og:gen:build
```

### Generación manual

```bash
# Usar ts-node directamente
npx ts-node scripts/generate-og.ts
```

## 📁 Estructura de archivos

```
src/
├── og/
│   ├── OgCard.tsx          # Plantilla React para OG
│   └── fonts/              # Fuentes tipográficas
├── lib/
│   └── og.utils.ts         # Utilidades OG
scripts/
├── generate-og.ts          # Script de generación
└── tsconfig.json           # Configuración TS para scripts
public/
└── og/                     # Imágenes PNG generadas
    ├── que-es-ia-para-pymes.png
    ├── guia-formaciones-ia-2025.png
    └── ...
```

## 🎨 Personalización de la plantilla

### Editar `src/og/OgCard.tsx`

La plantilla es un componente React estándar que puedes modificar:

```tsx
// Cambiar colores de fondo
background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)'

// Modificar tipografía
fontSize: '64px'  // Tamaño del título
fontFamily: 'Inter, system-ui, sans-serif'

// Ajustar layout
padding: '60px'   // Márgenes internos
width: '1200px'   // Ancho de la imagen
height: '630px'   # Alto de la imagen
```

### Colores de categorías

```tsx
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'IA': '#1E90FF',           // Azul
    'Formación': '#FF6B6B',     // Rojo
    'Herramientas': '#4ECDC4',  // Verde azulado
    'Negocio': '#45B7D1',       // Azul claro
  };
  return colors[category] || '#1E90FF';
};
```

## 🔧 Configuración

### Fuentes tipográficas

El sistema intenta cargar la fuente Inter desde:
1. `src/og/fonts/Inter-Regular.ttf` (local)
2. Google Fonts (fallback automático)

Para usar una fuente personalizada:

1. Coloca el archivo TTF en `src/og/fonts/`
2. Actualiza `FONT_PATH` en `scripts/generate-og.ts`
3. Modifica `fontFamily` en `OgCard.tsx`

### Dimensiones de imagen

Las imágenes se generan en **1200x630 píxeles** (formato estándar OG).

Para cambiar las dimensiones:

1. Actualiza `width` y `height` en `OgCard.tsx`
2. Modifica los valores en `scripts/generate-og.ts`
3. Ajusta `og:image:width` y `og:image:height` en `og.utils.ts`

## 📱 Integración con SEO

### Metadatos automáticos

El sistema genera automáticamente:

```html
<meta property="og:title" content="Título del post" />
<meta property="og:description" content="Descripción del post" />
<meta property="og:image" content="/og/slug-del-post.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2025-01-15" />
<meta property="article:tag" content="IA, Formación" />
```

### Uso en componentes

```tsx
import { getOgImageUrl, generateOgMeta } from '../lib/og.utils';

const BlogPost = ({ post }) => {
  const ogImageUrl = getOgImageUrl(post);
  const ogMeta = generateOgMeta(post);

  return (
    <SEO
      title={post.title}
      image={ogImageUrl}
      meta={ogMeta}
      type="article"
    />
  );
};
```

## 🚀 Despliegue

### Build automático

Para incluir la generación de OG en el build:

```json
{
  "scripts": {
    "build": "npm run og:gen && vite build"
  }
}
```

### Verificación

Después del build, verifica que las imágenes estén en `dist/og/`:

```bash
ls -la dist/og/
# Deberías ver: que-es-ia-para-pymes.png, guia-formaciones-ia-2025.png, etc.
```

## 🐛 Solución de problemas

### Error de fuente

```
❌ Error cargando fuente: fetch is not defined
```

**Solución**: El script se ejecuta en Node.js, no en el navegador. Usa fuentes locales o actualiza el script.

### Imágenes no se generan

```
❌ Error generando OG para [slug]: ...
```

**Solución**:
1. Verifica que `blogPosts` esté correctamente importado
2. Asegúrate de que `public/og/` sea escribible
3. Revisa los logs de error completos

### Calidad de imagen baja

**Solución**: 
1. Verifica que `@resvg/resvg-js` esté instalado
2. Asegúrate de que las dimensiones sean correctas
3. Considera ajustar la configuración de resvg

## 📚 Recursos adicionales

- [Documentación de satori](https://github.com/vercel/satori)
- [Documentación de resvg](https://github.com/yisibl/resvg-js)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🤝 Contribución

Para mejorar el sistema de OG:

1. Modifica `OgCard.tsx` para cambios visuales
2. Actualiza `generate-og.ts` para cambios en la generación
3. Añade nuevas utilidades en `og.utils.ts`
4. Documenta los cambios en este README

## 📄 Licencia

Este sistema de imágenes OG es parte de Waynox Studio y está bajo la misma licencia que el proyecto principal.
