# Página de Precios - Waynox Studio

## Descripción
Esta página muestra los precios y planes de Waynox Studio para desarrollo de apps móviles (Flutter/PWA) y desarrollo web (Next.js/SEO).

## Estructura de Archivos

### Componentes Principales
- `src/pages/Precios.tsx` - Página principal con tabs y contenido
- `src/components/pricing/ToggleTabs.tsx` - Componente para alternar entre Apps y Web
- `src/components/pricing/PriceCard.tsx` - Tarjetas de precios de los planes
- `src/components/pricing/CareCard.tsx` - Tarjetas de planes de mantenimiento
- `src/components/pricing/Notes.tsx` - Bloque de notas importantes
- `src/components/pricing/FAQ.tsx` - Preguntas frecuentes

### Datos
- `src/data/mobileAppPlans.ts` - Planes de apps móviles y mantenimiento
- `src/data/webPlans.ts` - Planes web y mantenimiento

## Cómo Editar Precios

### 1. Modificar Planes de Apps Móviles
Edita el archivo `src/data/mobileAppPlans.ts`:

```typescript
export const mobileAppPlans: MobileAppPlan[] = [
  {
    plan: 'Lite',
    price: 'desde 549,99 €', // Cambia el precio aquí
    delivery: '1–2 semanas', // Cambia el tiempo de entrega
    scope: '1 flujo...', // Modifica el alcance
    features: [
      'Característica 1', // Añade/quita características
      'Característica 2'
    ],
    // ... otros campos
  }
]
```

### 2. Modificar Planes de Mantenimiento (Apps)
En el mismo archivo, edita `maintenancePlans`:

```typescript
export const maintenancePlans: MaintenancePlan[] = [
  {
    name: 'Lite Care',
    price: '39 €/mes', // Cambia el precio
    sla: '≤72 h hábiles', // Modifica el SLA
    features: [
      'Característica 1', // Añade/quita características
      'Característica 2'
    ]
  }
]
```

### 3. Modificar Planes Web
Edita el archivo `src/data/webPlans.ts`:

```typescript
export const webPlans: WebPlan[] = [
  {
    plan: 'Landing',
    price: '499–1.200 €', // Cambia el precio
    delivery: '1–2 semanas', // Cambia el tiempo
    // ... otros campos
  }
]
```

### 4. Modificar Planes de Mantenimiento (Web)
En el mismo archivo, edita `webMaintenancePlans`:

```typescript
export const webMaintenancePlans: WebMaintenancePlan[] = [
  {
    name: 'Web Care Lite',
    price: '29 €/mes', // Cambia el precio
    sla: '≤72 h', // Modifica el SLA
    // ... otros campos
  }
]
```

### 5. Modificar Notas de Contrato
Edita las notas en ambos archivos:

```typescript
export const contractNotes = [
  '50% a inicio y 50% a la entrega', // Modifica las condiciones
  'Horas extra fuera del mantenimiento: 45 €/h', // Cambia tarifas
  // ... añade/quita notas
]
```

### 6. Modificar FAQ
Edita las preguntas frecuentes en `src/data/mobileAppPlans.ts`:

```typescript
export const faqItems: FAQItem[] = [
  {
    question: '¿Tu pregunta?', // Cambia la pregunta
    answer: 'Tu respuesta' // Modifica la respuesta
  }
]
```

## Activar/Desactivar Planes

### Ocultar un Plan
Comenta o elimina el plan del array:

```typescript
export const mobileAppPlans: MobileAppPlan[] = [
  // {
  //   plan: 'Lite',
  //   ... // Plan comentado
  // },
  {
    plan: 'Start',
    // ... // Plan activo
  }
]
```

### Marcar Plan como Destacado
Añade `featured: true` al plan:

```typescript
{
  plan: 'Pro',
  // ... otros campos
  featured: true // Mostrará badge "Más Popular"
}
```

## Personalización de UI

### Cambiar Colores
Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'brand': {
    'blue': '#00BFFF',      // Azul principal
    'black': '#000000',     // Negro puro
    'black-soft': '#111111', // Negro suave
    'white': '#FFFFFF',     // Blanco
    'gray': '#666666',      // Gris medio
  }
}
```

### Cambiar Iconos
Modifica los iconos en `PriceCard.tsx`:

```typescript
const planIcons = {
  Lite: ClockIcon,      // Cambia por otro icono de lucide-react
  Start: DatabaseIcon,  // Ej: UserIcon, HomeIcon, etc.
  // ...
}
```

## Formato de Precios

### Precios Fijos
```typescript
price: '549,99 €'
```

### Rangos de Precios
```typescript
price: '1.200–2.500 €'
price: '2.500–6.000 €'
```

### Precios con "desde"
```typescript
price: 'desde 499 €'
```

## Estructura de la Página

1. **Hero Section** - Título y CTA principal
2. **Toggle Tabs** - Alternar entre Apps y Web
3. **Planes** - Grid de tarjetas de precios
4. **Mantenimiento** - Grid de planes de mantenimiento
5. **Notas** - Condiciones importantes
6. **FAQ** - Preguntas frecuentes
7. **Bottom CTA** - Llamada a la acción final

## Responsive Design

- **Mobile**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 4 columnas

## SEO

- **Title**: "Precios y Planes 2025 | Waynox Studio"
- **Description**: Meta descripción optimizada
- **URLs**: Los CTAs incluyen parámetros de plan para tracking

## Mantenimiento

### Actualizar Año
Cambia "2025" por el año actual en:
- `src/pages/Precios.tsx` (línea del título)
- `src/data/mobileAppPlans.ts` (títulos de secciones)
- `src/data/webPlans.ts` (títulos de secciones)

### Añadir Nuevos Tipos de Plan
1. Añade el nuevo tipo a `PlanType`
2. Añade el icono correspondiente en `planIcons`
3. Crea el objeto del plan en el array correspondiente

### Validaciones
- Los precios deben incluir el símbolo €
- Los tiempos de entrega deben ser consistentes
- Las características deben ser claras y específicas
- Los SLAs deben ser realistas

## Troubleshooting

### Error de Iconos
Si hay problemas con iconos de lucide-react:
1. Verifica que el icono existe: `npm list lucide-react`
2. Usa solo iconos básicos: `CheckIcon`, `ClockIcon`, `StarIcon`
3. Añade fallback: `const IconComponent = planIcons[plan] || ClockIcon`

### Error de Tipos
Si hay problemas de TypeScript:
1. Verifica que las interfaces coincidan
2. Asegúrate de que todos los campos requeridos estén presentes
3. Usa `type` en lugar de `interface` si hay conflictos

### Error de Renderizado
Si la página no se renderiza:
1. Verifica que todos los componentes estén exportados
2. Revisa la consola del navegador para errores
3. Asegúrate de que los datos no sean `undefined`
