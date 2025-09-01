# README - Servicios y Tarifas

## 📋 Configuración de Tailwind CSS

### Verificación de Configuración

Para asegurar que Tailwind CSS funciona correctamente:

1. **Importación en main.tsx**
   ```tsx
   import './styles/globals.css'
   ```

2. **Directivas en globals.css**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Configuración en tailwind.config.js**
   ```js
   content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}']
   ```

4. **PostCSS Configuration**
   ```js
   // postcss.config.js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

### Build y Verificación

```bash
# Verificar que Tailwind funciona
npm run build
npm run dev
```

## 🔧 Edición de Planes y Mantenimiento

### Estructura de Datos

Los datos de planes se encuentran en `src/data/mobileAppPlans.ts`:

#### Planes de App Móvil

```tsx
export interface MobileAppPlan {
  plan: 'Lite' | 'Start' | 'Pro' | 'Deluxe'
  price: string
  delivery: string
  scope: string
  features: string[]
  integrations: string[]
  backend: string
  publication: string
  ctaText: string
  ctaLink: string
  featured?: boolean
}
```

#### Planes de Mantenimiento

```tsx
export interface MaintenancePlan {
  name: string
  price: string
  sla: string
  features: string[]
}
```

### Cómo Editar Planes

1. **Abrir archivo de datos**
   ```bash
   src/data/mobileAppPlans.ts
   ```

2. **Modificar plan existente**
   ```tsx
   {
     plan: 'Pro',
     price: '2.500–6.000 €',
     delivery: '4–7 semanas',
     scope: '8–15 pantallas, autenticación social',
     features: [
       '2–3 integraciones',
       'Analítica por eventos',
       'Notificaciones push',
       '3 rondas de cambios'
     ],
     integrations: ['Calendly', 'Stripe', 'WhatsApp API'],
     backend: 'Firebase + Backend personalizado',
     publication: 'Google Play incluida',
     ctaText: 'Solicitar App Pro',
     ctaLink: '/contacto',
     featured: true
   }
   ```

3. **Añadir nuevo plan**
   ```tsx
   // Añadir al array mobileAppPlans
   {
     plan: 'Enterprise',
     price: '12.000–25.000 €',
     delivery: '12–16 semanas',
     // ... resto de propiedades
   }
   ```

### Cómo Editar Mantenimiento

1. **Modificar plan de mantenimiento**
   ```tsx
   {
     name: 'Pro Care',
     price: '149 €/mes',
     sla: '≤24 h hábiles',
     features: [
       'Todo lo de Start +',
       '4 h/mes de microtareas',
       'Actualización mensual de libs/SDK',
       'Gestión de fichas de store',
       'Hotfix prioritarios',
       'Revisión de seguridad/reglas de Firebase',
       'Informe con KPIs'
     ]
   }
   ```

## 🎨 Customización de Componentes

### PriceCard

Ubicación: `src/components/pricing/PriceCard.tsx`

- **Colores**: Modificar clases `bg-[#color]`, `text-[#color]`, `border-[#color]`
- **Iconos**: Cambiar iconos en `planIcons` object
- **Layout**: Ajustar spacing con clases `space-y-*`, `mb-*`, `p-*`

### CareCard

Ubicación: `src/components/pricing/CareCard.tsx`

- **SLA Badge**: Modificar en el componente con `bg-[#1E90FF]`
- **Features**: Lista en `features` array del plan

### Grid Layout

#### TierGrid & MaintenanceGrid

```tsx
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
```

- **Móvil**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 4 columnas

## 🚀 Componentes y Funcionalidades

### Índice Lateral (StickyTOC)

```tsx
const tocItems = [
  { id: 'planes-apps', label: 'Planes de app móvil', icon: <SmartphoneIcon /> },
  { id: 'mantenimiento', label: 'Mantenimiento mensual', icon: <ShieldIcon /> },
  { id: 'notas', label: 'Notas', icon: <FileTextIcon /> },
  { id: 'faq', label: 'FAQ', icon: <HelpCircleIcon /> }
]
```

### FAQ Acordeón

```tsx
export const faqItems: FAQItem[] = [
  {
    question: '¿Qué incluye exactamente cada plan?',
    answer: 'Cada plan incluye desarrollo completo...'
  }
]
```

### Notas Contractuales

```tsx
export const contractNotes = [
  '50% a inicio y 50% a la entrega',
  'Alcance cerrado por paquete',
  'Horas extra fuera del mantenimiento: 45 €/h'
]
```

## 🎯 Animaciones

### Framer Motion

- **Fade in**: `initial={{ opacity: 0, y: 20 }}`
- **Hover**: `whileHover={{ scale: 1.02 }}`
- **Tap**: `whileTap={{ scale: 0.98 }}`

### Stagger Animations

```tsx
transition={{ duration: 0.6, delay: index * 0.1 }}
```

## 📱 Responsive Design

### Breakpoints

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

### Mobile-first

```tsx
className="text-sm lg:text-base px-4 lg:px-6"
```

## 🔍 Accesibilidad

### ARIA Labels

```tsx
aria-expanded={isOpen}
aria-controls="faq-answer-1"
role="region"
```

### Focus Management

```tsx
focus:outline-none focus:ring-2 focus:ring-[#1E90FF]
```

### Keyboard Navigation

- **Tab**: Navegar entre elementos
- **Enter/Space**: Activar acordeón
- **Escape**: Cerrar elementos

## 🛠️ Troubleshooting

### Tailwind no funciona

1. Verificar importación en `main.tsx`
2. Verificar directivas en `globals.css`
3. Verificar paths en `tailwind.config.js`
4. Reiniciar dev server

### Componentes no se ven

1. Verificar imports en `src/components/pricing/index.ts`
2. Verificar datos en `src/data/mobileAppPlans.ts`
3. Verificar clases CSS aplicadas

### Animaciones no funcionan

1. Verificar importación de `framer-motion`
2. Verificar `useReducedMotion` hook
3. Verificar viewport configuration

## 📝 Lighthouse Optimization

### Performance

- Lazy loading de imágenes
- Code splitting
- Minimizar bundle size

### Accessibility

- ARIA labels completos
- Keyboard navigation
- Focus management
- Color contrast ratio

### Best Practices

- HTTPS
- No console errors
- Semantic HTML
- Progressive enhancement

## 🚀 Deployment

```bash
# Build para producción
npm run build

# Verificar dist folder
ls dist/

# Deploy a hosting
# (Vercel, Netlify, etc.)
```
