# Página Nosotros - Waynox Studio

## Descripción
Página completa de "Nosotros" para Waynox Studio con todas las secciones solicitadas, siguiendo el diseño y estilo del sitio.

## Estructura de Archivos

### Componentes (`src/components/about/`)
- **HeroAbout.tsx** - Cabecera principal con título, subtítulo y CTAs
- **MissionValues.tsx** - Misión, visión y valores de la empresa
- **TeamGrid.tsx** - Tarjetas del equipo con fotos y enlaces sociales
- **ProcessInline.tsx** - Proceso de trabajo en 4 pasos
- **WhyUs.tsx** - Puntos diferenciadores con estadísticas
- **Timeline.tsx** - Línea de tiempo de hitos de la empresa
- **TechBadges.tsx** - Stack tecnológico y partners
- **SocialProof.tsx** - Testimonios y logos de clientes
- **FAQ.tsx** - Acordeón de preguntas frecuentes
- **CTAWide.tsx** - Llamada a la acción final

### Datos (`src/lib/about.data.ts`)
Archivo centralizado con todas las interfaces y datos:
- Miembros del equipo
- Valores de la empresa
- Proceso de trabajo
- Puntos diferenciadores
- Hitos del timeline
- Stack tecnológico
- Testimonios
- FAQs
- Textos de la página

## Cómo Actualizar

### 1. Equipo
Para modificar miembros del equipo, edita `src/lib/about.data.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 'nuevo-miembro',
    name: 'Nombre Apellido',
    role: 'Rol en la empresa',
    bio: 'Descripción de 2 líneas máximo',
    photo: '/images/team/nuevo-miembro.jpg',
    linkedin: 'https://linkedin.com/in/usuario',
    email: 'email@waynox.studio'
  }
]
```

### 2. Valores
Para cambiar los valores de la empresa:

```typescript
export const companyValues: Value[] = [
  {
    id: 'nuevo-valor',
    title: 'Nuevo Valor',
    description: 'Descripción del valor',
    icon: '🎯' // Emoji o icono
  }
]
```

### 3. Timeline
Para actualizar los hitos:

```typescript
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'nuevo-hito',
    year: '2025',
    title: 'Nuevo Hito',
    description: 'Descripción del hito'
  }
]
```

### 4. FAQs
Para modificar preguntas frecuentes:

```typescript
export const faqItems: FAQItem[] = [
  {
    id: 'nueva-pregunta',
    question: '¿Nueva pregunta?',
    answer: 'Respuesta detallada a la pregunta'
  }
]
```

### 5. Stack Tecnológico
Para actualizar tecnologías:

```typescript
export const techStack: TechBadge[] = [
  {
    id: 'nueva-tech',
    name: 'Nueva Tecnología',
    icon: '🔧',
    category: 'frontend' | 'backend' | 'tools'
  }
]
```

### 6. Testimonios
Para cambiar testimonios:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'nuevo-testimonio',
    name: 'Nombre Cliente',
    role: 'Cargo',
    company: 'Empresa',
    content: 'Contenido del testimonio',
    avatar: '/images/testimonials/cliente.jpg'
  }
]
```

## Personalización de Estilos

### Colores
Los colores están definidos en `src/styles/globals.css`:
- Fondo principal: `#111`
- Fondo secundario: `#1a1a1a`
- Texto: `#fff`
- Texto secundario: `#F5F7FB`
- Acento: `#1E90FF`
- Bordes: `#444`

### Animaciones
- **Reveal**: Animación de entrada con fade + movimiento
- **Hover**: Efectos sutiles en tarjetas y botones
- **Transiciones**: Duración estándar de 300ms

### Responsive
- **Móvil**: 1 columna en todas las secciones
- **Tablet**: 2 columnas en grids
- **Desktop**: 3-4 columnas según la sección
- **Breakpoints**: Tailwind CSS estándar

## Funcionalidades

### Navegación
- Enlaces internos con scroll suave
- Navegación por teclado (Tab, Enter, Escape)
- Estados activos en navbar

### Accesibilidad
- ARIA labels en botones interactivos
- Contraste AA cumplido
- Navegación por teclado
- Textos alternativos en imágenes

### SEO
- Meta title: "Nosotros | Waynox Studio"
- Meta description: ~160 caracteres
- Headings jerárquicos (h1, h2, h3, h4)
- Estructura semántica con landmarks

## Dependencias

### Requeridas
- React 18+
- Framer Motion 10+
- Tailwind CSS 3+
- Lucide React (iconos)

### Opcionales
- Lenis (scroll suave)
- React Router DOM (navegación)

## Rendimiento

### Optimizaciones
- Lazy loading de componentes
- Animaciones optimizadas con `willChange`
- Reducción de motion para usuarios con preferencias
- Imágenes optimizadas y responsive

### Lighthouse
- **Performance**: ≥90
- **Accessibility**: ≥90
- **Best Practices**: ≥90
- **SEO**: ≥90

## Troubleshooting

### Problemas Comunes

1. **Animaciones no funcionan**
   - Verificar que Framer Motion esté instalado
   - Comprobar que `useReducedMotion` funcione

2. **Estilos no se aplican**
   - Verificar que Tailwind CSS esté configurado
   - Comprobar que `globals.css` se importe

3. **Componentes no se renderizan**
   - Verificar imports en `index.ts`
   - Comprobar que las rutas estén configuradas

### Debug
- Usar React DevTools para inspeccionar componentes
- Verificar consola del navegador para errores
- Comprobar que los datos se pasen correctamente

## Mantenimiento

### Revisión Mensual
- [ ] Verificar que todos los enlaces funcionen
- [ ] Actualizar estadísticas si es necesario
- [ ] Revisar testimonios y casos de éxito
- [ ] Comprobar que las tecnologías estén actualizadas

### Revisión Trimestral
- [ ] Actualizar equipo si hay cambios
- [ ] Revisar y actualizar valores de la empresa
- [ ] Actualizar timeline con nuevos hitos
- [ ] Revisar y optimizar imágenes

### Revisión Anual
- [ ] Evaluar y actualizar stack tecnológico
- [ ] Revisar y actualizar proceso de trabajo
- [ ] Actualizar testimonios y casos de éxito
- [ ] Revisar y optimizar SEO

## Contacto
Para dudas o problemas con la página Nosotros:
- **Email**: hola@waynox.studio
- **Documentación**: Este README
- **Issues**: Crear issue en el repositorio
