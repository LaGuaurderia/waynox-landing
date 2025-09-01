# Waynox Studio – Vite + React

Sitio corporativo en español para Waynox Studio. Stack: React + Vite, enrutado con react-router-dom, SEO con react-helmet-async.

## Scripts

- `npm run dev`: entorno desarrollo
- `npm run build`: compila a `dist/`
- `npm run preview`: sirve build en local (por defecto en http://localhost:4173)

## Variables de entorno

Crear `.env` (o `.env.local`):

```
VITE_FORMSPARK_ID=xxxxx
```

Si no se define, el formulario de contacto usará un fallback mock con `console.log` y un mensaje de éxito.

## Estructura principal

- `src/router/AppRouter.tsx`: rutas con `BrowserRouter`
- `src/layout/MainLayout.tsx`: layout con `Navbar` y `Footer`
- `src/pages/*`: páginas (Home, Servicios, Proyectos, Precios, Nosotros, Blog, Contacto)
- `src/components/*`: UI reutilizable (Button, Card, Section, forms, SEO)
- `src/styles/globals.css`: variables de color y utilidades

## Despliegue

- Servir contenido de `dist/` tras `npm run build`.
- Asegurar MIME correctos: `text/javascript` para `.js`, `text/css` para `.css`, `application/wasm` para `.wasm`.
- El `index.html` del build solo debe cargar los bundles generados; no referenciar `/src/main.tsx`.
- Añadir cabeceras de caché apropiadas para activos estáticos.

## Accesibilidad y performance

- Foco visible y navegación por teclado.
- Imágenes con `alt` y `loading="lazy"`.
- Metadatos por página con `<SEO />`.