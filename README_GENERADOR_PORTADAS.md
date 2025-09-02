# 🎨 Generador de Portadas de Blog - Waynox

Sistema automatizado para generar portadas de blog usando OpenAI DALL-E 3, optimizadas para redes sociales (1200x630) con el estilo visual de Waynox.

## ✨ Características

- **Generación automática** de portadas usando IA
- **Estilo consistente** con la marca Waynox
- **Optimización para redes sociales** (1200x630)
- **Overlay automático** del logo de Waynox
- **Sistema de prompts inteligentes** basado en categorías
- **Modo dry-run** para verificar prompts sin costes
- **Idempotencia** - no regenera portadas existentes
- **Manejo de errores** y reintentos automáticos

## 🚀 Instalación

### 1. Dependencias

```bash
npm install openai sharp dotenv p-retry tsx
npm install --save-dev @types/node
```

### 2. Configuración de OpenAI

1. Crea un archivo `.env` basado en `env.example`:
```bash
cp env.example .env
```

2. Obtén tu API key en [OpenAI Platform](https://platform.openai.com/api-keys)

3. Añade tu API key al archivo `.env`:
```env
OPENAI_API_KEY=tu_api_key_aqui
```

### 3. Logo de Waynox (Opcional)

Para aplicar el logo automáticamente, coloca `logo-waynox.png` en:
```
src/assets/logo-waynox.png
```

Si no tienes el logo, las portadas se generarán sin él.

## 📖 Uso

### Comandos disponibles

```bash
# Generar portada para un post específico
npm run covers:one -- --slug=nombre-del-post

# Generar portadas para todos los posts
npm run covers:all

# Regenerar todas las portadas (forzar)
npm run covers:force

# Modo dry-run (solo mostrar prompts)
npm run covers:dry
```

### Ejemplos prácticos

```bash
# Generar portada para un post específico
npm run covers:one -- --slug=que-es-ia-para-pymes

# Ver prompts sin generar imágenes (modo económico)
npm run covers:all --dry

# Regenerar todas las portadas existentes
npm run covers:force
```

### Opciones CLI

- `--slug <nombre>`: Generar portada solo para un post específico
- `--all`: Generar portadas para todos los posts
- `--force`: Regenerar portadas existentes
- `--dry`: Solo mostrar prompts sin llamar a la API
- `--help, -h`: Mostrar ayuda

## 📁 Estructura de archivos

```
waynox-landing/
├── content/blog/           # Posts del blog (MDX/MD)
├── public/blog/covers/     # Portadas generadas
├── src/
│   ├── lib/
│   │   ├── env.ts         # Validación de variables de entorno
│   │   ├── openai-images.ts # Cliente OpenAI
│   │   ├── coverPrompt.ts  # Templates de prompts
│   │   └── image.ts        # Procesamiento de imágenes
│   └── assets/
│       └── logo-waynox.png # Logo para overlay (opcional)
├── scripts/
│   └── gen-covers.ts      # Script principal CLI
└── .env                    # Variables de entorno (crear)
```

## 🎯 Formato de posts

Los posts deben estar en formato MDX/MD con frontmatter que incluya:

```yaml
---
title: "Título del Post"
category: "tecnologia"
tags: ["tag1", "tag2", "tag3"]
date: "2024-01-15"
slug: "nombre-del-post"
---
```

### Categorías soportadas

El sistema mapea automáticamente categorías a elementos visuales:

- **tecnologia**: Circuitos, elementos digitales, grids tecnológicos
- **desarrollo**: Símbolos de código, patrones binarios, herramientas
- **diseño**: Elementos creativos, teoría del color, armonía visual
- **marketing**: Gráficos de crecimiento, métricas de negocio
- **emprendimiento**: Crecimiento empresarial, innovación, éxito
- **ia**: Inteligencia artificial, redes neuronales, ML
- **web**: Tecnologías web, diseño responsive, interfaces
- **mobile**: Dispositivos móviles, desarrollo de apps
- **cloud**: Computación en la nube, escalabilidad
- **seguridad**: Ciberseguridad, protección, sistemas seguros
- **analytics**: Visualización de datos, métricas, insights
- **ux**: Experiencia de usuario, diseño centrado en humanos
- **seo**: Optimización de búsquedas, visibilidad
- **social**: Redes sociales, comunidad, networking
- **ecommerce**: Comercio online, experiencia del cliente
- **automation**: Automatización de procesos, eficiencia
- **innovation**: Tecnología de vanguardia, ideas innovadoras
- **sostenibilidad**: Tecnología verde, impacto ambiental
- **fintech**: Tecnología financiera, banca digital

## 🎨 Estilo visual

### Paleta de colores Waynox
- **Fondo**: #111111 (negro profundo)
- **Acento principal**: #1E90FF (azul brillante)
- **Blancos**: #FFFFFF
- **Grises claros**: #F5F7FB
- **Grises medios**: #444444

### Características del diseño
- **Estilo**: Minimalista, tecnológico, profesional
- **Elementos**: Formas geométricas abstractas, gradientes sutiles
- **Iluminación**: Suave, profesional, con sombras para profundidad
- **Composición**: Horizontal, balanceada, líneas limpias
- **Sin texto**: Solo elementos visuales (no letras, números o logos)

## 💰 Costes y límites

### OpenAI DALL-E 3
- **Precio por imagen**: ~$0.04 (standard) / ~$0.08 (HD)
- **Límite de rate**: 50 imágenes por minuto
- **Tamaños soportados**: 1024x1024, 1792x1024
- **Calidad**: Standard (recomendado) o HD

### Recomendaciones de costes
- **Modo dry-run**: Gratis, para verificar prompts
- **Generación inicial**: ~$0.04 por post
- **Regeneración**: Solo cuando sea necesario
- **Monitoreo**: Revisar facturación mensual en OpenAI

## 🔧 Personalización

### Modificar prompts

Edita `src/lib/coverPrompt.ts` para:
- Cambiar el estilo visual
- Añadir nuevas categorías
- Modificar la paleta de colores
- Ajustar elementos visuales

### Ajustar procesamiento de imágenes

Modifica `src/lib/image.ts` para:
- Cambiar dimensiones de salida
- Ajustar posición y tamaño del logo
- Modificar calidad de compresión
- Añadir efectos adicionales

### Configuración de OpenAI

Ajusta en `.env`:
```env
OPENAI_MODEL=dall-e-3
OPENAI_QUALITY=standard
OPENAI_STYLE=vivid
```

## 🚨 Solución de problemas

### Error: "OPENAI_API_KEY no está definida"
- Verifica que existe el archivo `.env`
- Confirma que la variable está correctamente escrita
- Reinicia el terminal después de crear `.env`

### Error: "No se encontraron archivos MDX"
- Verifica la estructura de directorios
- Confirma que los archivos tienen extensión `.mdx` o `.md`
- Asegúrate de que el frontmatter es válido

### Error: "Prompt rechazado por OpenAI"
- El prompt puede contener contenido inapropiado
- Revisa la categoría y tags del post
- Usa `--dry` para verificar el prompt generado

### Error: "Rate limit alcanzado"
- Espera unos minutos antes de reintentar
- Reduce el número de imágenes generadas por sesión
- Considera usar el plan de pago de OpenAI

## 📝 Logs y debugging

### Modo verbose
El script muestra información detallada:
- Posts encontrados
- Prompts generados
- Progreso de generación
- Errores y advertencias

### Modo dry-run
```bash
npm run covers:all --dry
```
Muestra todos los prompts sin generar imágenes (gratis).

## 🔄 Flujo de trabajo recomendado

1. **Configuración inicial**
   - Instalar dependencias
   - Configurar API key de OpenAI
   - Verificar estructura de directorios

2. **Primera ejecución**
   - Usar `--dry` para verificar prompts
   - Generar portadas con `--all`
   - Revisar resultados

3. **Mantenimiento**
   - Generar portadas para nuevos posts
   - Regenerar portadas específicas si es necesario
   - Monitorear costes de API

## 📚 Recursos adicionales

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Sharp Image Processing](https://sharp.pixelplumbing.com/)
- [DALL-E 3 Guide](https://platform.openai.com/docs/guides/images)
- [Waynox Brand Guidelines](link-a-guias-de-marca)

## 🤝 Contribución

Para contribuir al generador de portadas:

1. Fork del repositorio
2. Crear rama para tu feature
3. Implementar cambios
4. Añadir tests si es necesario
5. Crear Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

---

**Nota legal**: Este sistema utiliza la API de OpenAI. Los usuarios son responsables de cumplir con los términos de servicio de OpenAI y de gestionar sus propios costes de API.
