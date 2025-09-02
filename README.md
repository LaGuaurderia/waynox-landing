# Waynox Studio – Vite + React

Sitio corporativo en español para Waynox Studio. Stack: React + Vite, enrutado con react-router-dom, SEO con react-helmet-async.

## 🆕 Página de Servicios Renovada (2025)

**Nueva página especializada en apps móviles** con diseño oscuro y profesional:
- ✅ **4 planes de desarrollo**: Lite, Start, Pro, Deluxe (549€ - 12.000€)
- ✅ **4 planes de mantenimiento**: Con SLA garantizado (39€ - 249€/mes)
- ✅ **Navegación por anclas**: Barra lateral + scroll suave
- ✅ **Responsive**: 1/2/4 columnas según dispositivo
- ✅ **FAQ específica**: Preguntas sobre apps móviles
- ✅ **CTA flotante**: Botón fijo en móvil

📖 **Documentación**: Ver `README_SERVICIOS_TARIFAS.md` para editar tarifas.

## Scripts

- `npm run dev`: entorno desarrollo
- `npm run build`: compila a `dist/`
- `npm run preview`: sirve build en local (por defecto en http://localhost:4173)
- `npm run lint`: análisis de código
- `npm run type-check`: verificación de tipos TypeScript

### 🎨 Generador de Portadas de Blog

- `npm run covers:one -- --slug=nombre-post`: Generar portada para un post específico
- `npm run covers:all`: Generar portadas para todos los posts
- `npm run covers:force`: Regenerar todas las portadas existentes
- `npm run covers:dry`: Modo dry-run (solo mostrar prompts)

📖 **Documentación completa**: Ver `README_GENERADOR_PORTADAS.md`

## Variables de entorno

Crear `.env` (o `.env.local`):

```
VITE_FORMSPARK_ID=xxxxx
OPENAI_API_KEY=tu_api_key_aqui
```

Si no se define, el formulario de contacto usará un fallback mock con `console.log` y un mensaje de éxito.

**Nota**: Para el generador de portadas, es obligatorio configurar `OPENAI_API_KEY`. Ver `README_GENERADOR_PORTADAS.md` para más detalles.

## Estructura principal

- `src/router/AppRouter.tsx`: rutas con `BrowserRouter`
- `src/layout/MainLayout.tsx`: layout con `Navbar` y `Footer`
- `src/pages/*`: páginas (Home, **Servicios**, Proyectos, Precios, Nosotros, Blog, Contacto)
- `src/components/*`: UI reutilizable (Button, Card, Section, forms, SEO)
- `src/components/pricing/*`: **Componentes específicos de servicios**
- `src/data/mobileAppPlans.ts`: **Datos de planes y tarifas**
- `src/styles/globals.css`: variables de color y utilidades

## Nuevos componentes (Servicios)

- **PriceCard**: Tarjeta individual de plan con iconos y características
- **PlanGrid**: Grid responsive para organizar planes
- **MaintenanceGrid**: Grid para planes de mantenimiento mensual
- **InfoNote**: Bloques informativos con iconos de estado
- **FAQ**: Acordeón de preguntas frecuentes
- **AnchorNav**: Navegación lateral por anclas (desktop)
- **FloatingCTA**: Botón flotante para móvil

## Despliegue

- Servir contenido de `dist/` tras `npm run build`.
- Asegurar MIME correctos: `text/javascript` para `.js`, `text/css` para `.css`, `application/wasm` para `.wasm`.
- El `index.html` del build solo debe cargar los bundles generados; no referenciar `/src/main.tsx`.
- Añadir cabeceras de caché apropiadas para activos estáticos.

## Accesibilidad y performance

- Foco visible y navegación por teclado.
- Imágenes con `alt` y `loading="lazy"`.
- Metadatos por página con `<SEO />`.
- Animaciones respetan `prefers-reduced-motion`.
- Contraste adecuado en tema oscuro.