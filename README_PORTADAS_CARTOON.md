# Sistema de Portadas Cartoon para el Blog

Este documento describe el sistema de generación automática de imágenes de portada con estilo cartoon para el blog de Waynox Studio.

## 🎨 Características

- **Estilo cartoon**: Portadas atractivas y amigables con elementos dibujados a mano
- **Elementos temáticos**: Cada portada incluye personas y objetos relacionados con el contenido
- **Generación automática**: Script que crea todas las portadas de una vez
- **Personalización**: Colores y elementos específicos para cada categoría

## 🚀 Uso

### Generación automática

```bash
# Generar todas las portadas cartoon
npm run covers:generate

# O usar tsx directamente
npx tsx scripts/generate-covers.ts
```

### Scripts disponibles

```json
{
  "covers:generate": "tsx scripts/generate-covers.ts"
}
```

## 🎭 Elementos Temáticos por Post

### 1. Qué es la IA para pymes
- **Tema**: Business + IA
- **Elementos**: 
  - 👔 Persona empresario (con corbatín)
  - 🤖 Robot ayudante (con antena y ojos verdes)
  - 📊 Gráficos de IA

### 2. Guía completa de formaciones en IA para 2025
- **Tema**: Educación + Aprendizaje
- **Elementos**:
  - 🎓 Estudiante (con gorra de graduación)
  - 📚 Libros de IA (pila colorida)
  - 🏆 Certificados
  - 💻 Laptop

### 3. Herramientas no-code para automatizar tu negocio
- **Tema**: Automatización + Herramientas
- **Elementos**:
  - 👷 Persona trabajando
  - ⚙️ Engranajes mecánicos
  - 🔌 Conectores
  - 📊 Dashboard

### 4. Los mejores modelos de IA por caso de uso en 2025
- **Tema**: Modelos de IA
- **Elementos**:
  - 🧠 Cerebro de IA (con lóbulos)
  - 🤔 Persona pensando
  - 🔄 Modelos diferentes
  - 📋 Casos de uso

### 5. Cómo medir el ROI de la IA en tu empresa
- **Tema**: Análisis de Negocios
- **Elementos**:
  - 🔍 Analista de negocios (con lupa)
  - 📈 Gráficos creciendo
  - 🧮 Calculadora
  - 💰 Dinero

### 6. Prompt Engineering práctico: técnicas que funcionan
- **Tema**: Escritura de Prompts
- **Elementos**:
  - ✍️ Escritor
  - ⌨️ Teclado mágico (con letras IA)
  - ✨ Palabras flotando
  - 💡 Luz de idea

## 🎨 Paleta de Colores

- **IA**: `#1E90FF` (Azul)
- **Formación**: `#FF6B6B` (Rojo)
- **Herramientas**: `#4ECDC4` (Verde azulado)
- **Negocio**: `#45B7D1` (Azul claro)

## 🖼️ Especificaciones Técnicas

- **Dimensiones**: 800x400 píxeles
- **Formato**: JPEG con calidad 0.9
- **Estilo**: Cartoon con elementos vectoriales
- **Fondo**: Degradado oscuro con patrón de puntos

## 🔧 Personalización

### Añadir nuevos elementos cartoon

1. **Definir el elemento** en el array `elements` del post
2. **Implementar la función** en `drawCartoonElement()`
3. **Usar el contexto Canvas** para dibujar

```typescript
case 'nuevo-elemento':
  // Dibujar el elemento
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size * 0.2, 0, 2 * Math.PI);
  ctx.fill();
  break;
```

### Modificar colores

```typescript
const blogPosts = [
  {
    slug: 'mi-post',
    title: 'Mi Título',
    category: 'Mi Categoría',
    color: '#NUEVO_COLOR', // Cambiar aquí
    // ...
  }
];
```

### Ajustar posiciones

```typescript
const positions = [
  { x: 120, y: 120 },  // Elemento 1
  { x: 280, y: 100 },  // Elemento 2
  { x: 450, y: 130 },  // Elemento 3
  { x: 600, y: 90 }    // Elemento 4
];
```

## 📁 Estructura de Archivos

```
scripts/
├── generate-covers.ts          # Script principal
└── tsconfig.json              # Configuración TS

public/
└── blog/
    └── covers/                # Imágenes generadas
        ├── que-es-ia-para-pymes.jpg
        ├── guia-formaciones-ia-2025.jpg
        └── ...
```

## 🚀 Flujo de Trabajo

1. **Desarrollo**: Modificar `generate-covers.ts`
2. **Generación**: Ejecutar `npm run covers:generate`
3. **Verificación**: Revisar imágenes en `public/blog/covers/`
4. **Despliegue**: Las imágenes se incluyen automáticamente en el build

## 🎯 Mejoras Futuras

- [ ] Animaciones SVG
- [ ] Más estilos de cartoon
- [ ] Integración con IA para generación de contenido
- [ ] Sistema de plantillas personalizables
- [ ] Exportación a múltiples formatos

## 🐛 Solución de Problemas

### Error de canvas

```bash
❌ Error: Cannot find module 'canvas'
```

**Solución**: Instalar la dependencia
```bash
npm install canvas
```

### Imágenes no se generan

```bash
❌ Error procesando [slug]: ...
```

**Solución**:
1. Verificar que el directorio `public/blog/covers/` sea escribible
2. Revisar los logs de error completos
3. Verificar que `tsx` esté instalado

### Calidad de imagen baja

**Solución**: 
1. Ajustar `quality: 0.9` en `toBuffer()`
2. Verificar que las dimensiones sean correctas
3. Optimizar el algoritmo de dibujo

## 📚 Recursos Adicionales

- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [HTML5 Canvas Tutorial](https://www.w3schools.com/html/html5_canvas.asp)
- [Cartoon Design Principles](https://design.tutsplus.com/articles/cartoon-character-design-principles--cms-31902)

## 🤝 Contribución

Para mejorar el sistema de portadas cartoon:

1. **Modifica** `generate-covers.ts` para cambios en la generación
2. **Añade** nuevos elementos en `drawCartoonElement()`
3. **Personaliza** colores y posiciones
4. **Documenta** los cambios en este README

## 📄 Licencia

Este sistema de portadas cartoon es parte de Waynox Studio y está bajo la misma licencia que el proyecto principal.

---

**¡Disfruta creando portadas atractivas y temáticas para tu blog! 🎨✨**
