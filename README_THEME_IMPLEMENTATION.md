# Implementación del Sistema de Temas - Waynox Landing

## Resumen

Se ha implementado exitosamente un sistema de modo claro/oscuro completo para el proyecto Waynox Landing, utilizando `next-themes` como solución principal con un fallback personalizado.

## Características Implementadas

### ✅ Tema Principal (next-themes)
- **ThemeProvider**: Envuelve toda la aplicación con soporte para temas
- **ThemeToggle**: Componente con 3 opciones: System / Light / Dark
- **Integración completa**: Sin FOUC, transiciones suaves, persistencia en localStorage

### ✅ Fallback Personalizado
- **useTheme hook**: Hook personalizado para gestión de temas
- **ThemeProviderFallback**: Provider alternativo sin dependencias externas
- **ThemeToggleFallback**: Toggle que funciona con el hook personalizado

### ✅ Componentes Theme-Aware
- **AnimatedLogo**: Cambia colores según el tema:
  - Texto: `text-gray-900 dark:text-gray-100`
  - Caret: `text-blue-600 dark:text-blue-400`
  - Shimmer: Versiones clara y oscura
- **Navbar**: Adapta colores y estilos según el tema
- **CSS Global**: Variables CSS y clases Tailwind para ambos temas

## Estructura de Archivos

```
src/
├── components/
│   ├── ThemeProvider.tsx          # Provider principal (next-themes)
│   ├── ThemeProviderFallback.tsx  # Provider alternativo
│   ├── ThemeToggle.tsx            # Toggle principal
│   ├── ThemeToggleFallback.tsx    # Toggle alternativo
│   ├── AnimatedLogo.tsx           # Logo theme-aware
│   └── Navbar.tsx                 # Navbar con ThemeToggle
├── lib/hooks/
│   └── useTheme.ts                # Hook personalizado
├── styles/
│   └── globals.css                # CSS con variables de tema
└── components/theme/
    └── index.ts                   # Exportaciones del tema
```

## Uso

### 1. Tema Principal (Recomendado)

```tsx
// En App.tsx
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}

// En cualquier componente
import { useTheme } from 'next-themes';
import ThemeToggle from './components/ThemeToggle';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return <ThemeToggle />;
}
```

### 2. Fallback Personalizado

```tsx
// En App.tsx
import { ThemeProviderFallback } from './components/ThemeProviderFallback';

function App() {
  return (
    <ThemeProviderFallback>
      {/* Tu aplicación */}
    </ThemeProviderFallback>
  );
}

// En cualquier componente
import { useThemeContext } from './components/ThemeProviderFallback';
import ThemeToggleFallback from './components/ThemeToggleFallback';

function MyComponent() {
  const { theme, setTheme } = useThemeContext();
  
  return <ThemeToggleFallback />;
}
```

## Configuración CSS

### Variables CSS
```css
:root {
  --bg: #0B0B0B;
  --text: #F5F7FA;
  /* ... más variables */
}

:root[class~="light"] {
  --bg: #FFFFFF;
  --text: #0F172A;
  /* ... tema claro */
}

:root[class~="dark"] {
  --bg: #0B0B0B;
  --text: #F5F7FA;
  /* ... tema oscuro */
}
```

### Clases Tailwind
```css
/* Shimmer claro */
.waynox-shimmer {
  background-image: linear-gradient(
    120deg,
    rgba(37,99,235,0) 0%,
    rgba(37,99,235,.35) 50%,
    rgba(37,99,235,0) 100%
  );
}

/* Shimmer oscuro */
.dark .waynox-shimmer-dark {
  background-image: linear-gradient(
    120deg,
    rgba(96,165,250,0) 0%,
    rgba(96,165,250,.22) 50%,
    rgba(96,165,250,0) 100%
  );
}
```

## Configuración de Tailwind

```js
// tailwind.config.js
export default {
  darkMode: 'class', // Habilita modo oscuro con clase
  // ... resto de configuración
}
```

## Características Técnicas

### ✅ Sin FOUC
- `suppressHydrationWarning` en el HTML
- `disableTransitionOnChange` en ThemeProvider
- Transiciones CSS suaves

### ✅ Accesibilidad
- `aria-pressed` en botones de tema
- `aria-label` descriptivos
- Soporte para lectores de pantalla

### ✅ Performance
- Lazy loading de temas
- Transiciones optimizadas
- Sin re-renders innecesarios

### ✅ Responsive
- Toggle en navbar desktop
- Toggle en menú móvil
- Adaptación automática a preferencias del sistema

## Preferencias del Sistema

El modo "System" respeta automáticamente:
- `prefers-color-scheme: dark`
- `prefers-color-scheme: light`
- Cambios en tiempo real del sistema operativo

## Persistencia

- **next-themes**: localStorage automático
- **Fallback**: localStorage personalizado
- Clave: `theme` con valores: `'light' | 'dark' | 'system'`

## Compatibilidad

- ✅ React 18+
- ✅ TypeScript 5+
- ✅ Tailwind CSS 3+
- ✅ Vite 4+
- ✅ Navegadores modernos (ES2020+)

## Troubleshooting

### Si next-themes no funciona:
1. Usar `ThemeProviderFallback` en lugar de `ThemeProvider`
2. Usar `ThemeToggleFallback` en lugar de `ThemeToggle`
3. Verificar que `next-themes` esté instalado: `npm install next-themes`

### Si hay problemas de hidratación:
1. Verificar que `suppressHydrationWarning` esté en el HTML
2. Asegurar que el ThemeProvider envuelva toda la aplicación
3. Verificar que no haya diferencias entre servidor y cliente

## Próximos Pasos

1. **Testing**: Agregar tests unitarios para los componentes del tema
2. **Analytics**: Trackear preferencias de tema de los usuarios
3. **Más Componentes**: Hacer theme-aware otros componentes de la UI
4. **Temas Personalizados**: Permitir que los usuarios creen temas personalizados

## Contribución

Para contribuir al sistema de temas:

1. Mantener compatibilidad con ambos sistemas (next-themes y fallback)
2. Seguir las convenciones de nomenclatura establecidas
3. Agregar tests para nuevas funcionalidades
4. Documentar cambios en este README

---

**Estado**: ✅ Completado y funcional  
**Última actualización**: Diciembre 2024  
**Versión**: 1.0.0
