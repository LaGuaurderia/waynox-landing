# Nueva Paleta de Colores - Marca Waynox

## Resumen de Cambios

Se ha actualizado completamente la paleta de colores de la web para usar los colores de marca oficiales:
- **Azul eléctrico** (#00BFFF) - Color principal de marca
- **Negro** (#000000) - Fondo principal
- **Blanco** (#FFFFFF) - Texto principal y elementos claros

## Archivos Modificados

### 1. Configuración de Tailwind (`tailwind.config.js`)
- Se reemplazó la paleta `tech` por `brand`
- Nuevos colores definidos:
  - `brand-blue`: #00BFFF (azul eléctrico)
  - `brand-blue-dark`: #0099CC (azul más oscuro para hover)
  - `brand-black`: #000000 (negro puro)
  - `brand-black-soft`: #111111 (negro suave)
  - `brand-white`: #FFFFFF (blanco puro)
  - `brand-gray`: #666666 (gris medio)
  - `brand-gray-light`: #CCCCCC (gris claro)

### 2. Estilos Globales (`src/styles/globals.css`)
- Variables CSS actualizadas para usar la nueva paleta
- Fondo principal cambiado a negro
- Bordes y elementos secundarios en gris
- Sombras con azul eléctrico

### 3. Design System (`src/design-system.css`)
- Variables CSS del design system actualizadas
- Botones primarios en azul eléctrico
- Gradientes hero con azul eléctrico

### 4. Componentes Actualizados

#### Button (`src/components/Button.tsx`)
- Colores hardcodeados reemplazados por clases de marca
- Variantes primary, ghost y link actualizadas

#### Navbar (`src/components/Navbar.tsx`)
- Indicador de navegación activa en azul eléctrico
- Menú móvil con colores de marca
- Iconos usando `currentColor`

#### Badge (`src/components/Badge.tsx`)
- Fondo en azul eléctrico
- Animaciones añadidas

#### MainLayout (`src/layout/MainLayout.tsx`)
- Fondo principal en negro
- Animaciones de entrada

#### Página Servicios (`src/pages/Servicios.tsx`)
- Hero section con fondo negro
- Botones en azul eléctrico
- Bordes y fondos secundarios en gris
- Secciones con colores de marca

#### Componentes de Pricing
- **FAQ**: Colores de bordes y hover actualizados
- **CareCard**: Fondos y bordes en colores de marca
- **AnchorNav**: Navegación con azul eléctrico

## Uso de la Nueva Paleta

### Clases de Tailwind Disponibles
```css
/* Fondos */
bg-brand-black          /* Negro principal */
bg-brand-black-soft     /* Negro suave */
bg-brand-white          /* Blanco */
bg-brand-blue           /* Azul eléctrico */
bg-brand-blue-dark      /* Azul oscuro */

/* Texto */
text-brand-white        /* Blanco */
text-brand-black        /* Negro */
text-brand-blue         /* Azul eléctrico */
text-brand-gray         /* Gris medio */

/* Bordes */
border-brand-gray       /* Gris medio */
border-brand-blue       /* Azul eléctrico */
border-brand-gray-light /* Gris claro */

/* Sombras */
shadow-accent           /* Sombra azul eléctrico */
shadow-accent-lg        /* Sombra azul eléctrico grande */
```

### Variables CSS Disponibles
```css
:root {
  --color-bg: #000000;
  --color-bg-soft: #111111;
  --color-text: #FFFFFF;
  --color-text-muted: #CCCCCC;
  --color-accent: #00BFFF;
  --color-border: #666666;
  --color-border-hover: #00BFFF;
}
```

## Beneficios de la Nueva Paleta

1. **Consistencia de Marca**: Todos los elementos usan los colores oficiales
2. **Mejor Contraste**: Negro y blanco proporcionan excelente legibilidad
3. **Azul Eléctrico Destacado**: Color de acento que llama la atención
4. **Profesionalismo**: Paleta moderna y tecnológica
5. **Accesibilidad**: Alto contraste para mejor usabilidad

## Próximos Pasos

1. **Revisar Componentes Restantes**: Identificar y actualizar cualquier color hardcodeado restante
2. **Testing Visual**: Verificar que todos los cambios se vean correctamente
3. **Documentación**: Actualizar guías de diseño para desarrolladores
4. **Consistencia**: Asegurar que todos los nuevos componentes usen la paleta de marca

## Notas Importantes

- Los cambios mantienen la funcionalidad existente
- Se han añadido animaciones y transiciones suaves
- La paleta es completamente responsive
- Compatible con modo oscuro/claro (si se implementa en el futuro)
