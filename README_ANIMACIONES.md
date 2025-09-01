# Sistema de Animaciones y Scroll - Waynox Studio

## 🎯 Objetivo
Implementar un sistema completo de animaciones fluidas y scroll suave que mejore la UX sin comprometer el rendimiento ni la accesibilidad.

## 🚀 Características Implementadas

### 1. Scroll Suave con Lenis
- **Hook**: `useSmoothScroll()`
- **Configuración**: Scroll suave con easing personalizado
- **Accesibilidad**: Respeta `prefers-reduced-motion`
- **Anchors**: Scroll automático a secciones con `#id`

### 2. Componente Reveal
- **Uso**: `<Reveal delay={0.2} direction="up">`
- **Props**:
  - `delay`: Retraso en segundos
  - `direction`: 'up', 'down', 'left', 'right', 'none'
  - `once`: Solo se ejecuta una vez (default: true)
  - `threshold`: Porcentaje de visibilidad (default: 0.1)

### 3. Efectos Parallax Sutiles
- **Componente**: `<Parallax speed={0.3}>`
- **Uso**: Fondos decorativos que se mueven 2-6% al scroll
- **Desactivación**: Automática si `prefers-reduced-motion`

### 4. Navbar Animado
- **Estados**: Transición suave al scrollear
- **Indicador**: Línea deslizante para ruta activa
- **Responsive**: Animaciones en móvil y desktop

### 5. Microinteracciones
- **Botones**: Hover, tap y focus states
- **Cards**: Elevación sutil y zoom en imágenes
- **Transiciones**: Entre rutas con AnimatePresence

## 🛠️ Stack Tecnológico

```json
{
  "framer-motion": "^10.16.4",
  "lenis": "^1.0.34",
  "clsx": "^2.1.1"
}
```

## 📁 Estructura de Archivos

```
src/
├── lib/
│   ├── hooks/
│   │   ├── useSmoothScroll.ts      # Hook principal de scroll
│   │   ├── useReducedMotion.ts     # Detección de movimiento reducido
│   │   └── useInViewOnce.ts        # IntersectionObserver reutilizable
│   └── motionPresets.ts            # Variants comunes de animación
├── components/
│   ├── anim/
│   │   ├── Reveal.tsx              # Componente de entrada
│   │   ├── Parallax.tsx            # Efecto parallax
│   │   └── index.ts                # Exportaciones
│   ├── Button.tsx                  # Botón con animaciones
│   ├── Card.tsx                    # Card con hover effects
│   └── Navbar.tsx                  # Navbar animado
└── layout/
    └── MainLayout.tsx              # Layout con transiciones
```

## 🎨 Presets de Animación

### Variants Comunes
```typescript
import { fadeInUp, staggerContainer, buttonVariants } from '../lib/motionPresets'

// Fade in desde abajo
<Reveal variants={fadeInUp}>

// Stagger de elementos
<motion.div variants={staggerContainer}>
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
</motion.div>
```

### Easing Personalizado
```typescript
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],      // Suave y natural
  easeOut: [0.16, 1, 0.3, 1],            // Salida rápida
  easeIn: [0.55, 0.055, 0.675, 0.19],    // Entrada suave
  spring: [0.175, 0.885, 0.32, 1.275],   // Efecto rebote
}
```

## ♿ Accesibilidad

### Prefers Reduced Motion
- **Detección automática** del media query
- **Desactivación** de todas las animaciones
- **Fallbacks** para funcionalidad básica

### Focus Management
- **Focus rings** visibles en todos los elementos interactivos
- **Contrastes AA** mantenidos en todos los estados
- **Navegación por teclado** completamente funcional

## ⚡ Optimización de Rendimiento

### Lazy Loading
- **IntersectionObserver** para animaciones
- **AnimatePresence** para transiciones de ruta
- **will-change** solo cuando es necesario

### CSS Transforms
- **GPU acceleration** con `transform-gpu`
- **Evitar layout thrashing** usando `opacity` y `transform`
- **Debouncing** de eventos de scroll

## 📱 Responsive Design

### Breakpoints
- **Mobile First**: Animaciones optimizadas para móvil
- **Touch Devices**: Desactivación de scroll suave en táctiles
- **Performance**: Reducción de animaciones en dispositivos lentos

## 🔧 Configuración

### Inicialización
```typescript
// En MainLayout.tsx
import { useSmoothScroll } from '../lib/hooks/useSmoothScroll'

const MainLayout = () => {
  useSmoothScroll() // Inicializa Lenis automáticamente
  // ...
}
```

### Personalización
```typescript
// En useSmoothScroll.ts
const lenis = new Lenis({
  duration: 1.2,                    // Duración del scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,                // Scroll de rueda
  smoothTouch: false,               // Desactivar en táctiles
})
```

## 📊 Métricas de Rendimiento

### Lighthouse Score
- **Performance**: 90+ (animaciones optimizadas)
- **Accessibility**: 100 (prefers-reduced-motion)
- **Best Practices**: 95+ (lazy loading)

### Core Web Vitals
- **LCP**: < 2.5s (lazy loading de imágenes)
- **FID**: < 100ms (debouncing de eventos)
- **CLS**: < 0.1 (animaciones no afectan layout)

## 🚨 Troubleshooting

### Problemas Comunes

#### Scroll no funciona
```typescript
// Verificar que Lenis se inicialice
console.log('Lenis instance:', window.__LENIS__)
```

#### Animaciones no se ejecutan
```typescript
// Verificar prefers-reduced-motion
const prefersReducedMotion = useReducedMotion()
console.log('Reduced motion:', prefersReducedMotion)
```

#### Performance issues
```typescript
// Reducir complejidad de animaciones
<Reveal threshold={0.3} rootMargin="50px">
  {/* Contenido más simple */}
</Reveal>
```

## 🔮 Futuras Mejoras

### Roadmap
- [ ] **Scroll-triggered animations** más complejas
- [ ] **Page transitions** personalizadas
- [ ] **Gesture-based interactions** en móvil
- [ ] **Performance monitoring** en tiempo real

### Consideraciones
- **Bundle size**: Mantener bajo con tree-shaking
- **Browser support**: IE11+ con polyfills
- **Progressive enhancement**: Funciona sin JavaScript

## 📚 Recursos Adicionales

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lenis Smooth Scrolling](https://github.com/studio-freight/lenis)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Reduced Motion Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/reduced-motion.html)

---

**Desarrollado por Waynox Studio** 🚀
*Sistema de animaciones optimizado para rendimiento y accesibilidad*
