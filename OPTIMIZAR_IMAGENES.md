# Optimización de Imágenes para WAYNOX

## 🚨 Problema identificado:
- **En localhost:** Las imágenes se cargan correctamente (no se ven emojis)
- **En waynox.es:** Las imágenes no se cargan, se muestran placeholders con emojis

## 🔧 Soluciones:

### 1. **Optimizar imágenes (Recomendado):**
Las imágenes actuales son muy pesadas (2-3MB cada una). Para web, deberían ser:
- **Tamaño máximo:** 200-500KB por imagen
- **Resolución:** 375x210px (como ya configuramos)
- **Formato:** WebP o PNG optimizado

### 2. **Herramientas para optimizar:**
- **Online:** TinyPNG, Squoosh.app, ImageOptim
- **Desktop:** ImageOptim (Mac), FileOptimizer (Windows)
- **Comando:** `sips` (Mac) para redimensionar

### 3. **Comando para redimensionar en Mac:**
```bash
# Redimensionar todas las imágenes a 375x210
sips -Z 375 images/*.png --out images-optimized/

# O redimensionar una por una
sips -Z 375 images/appaseguradora.png --out images-optimized/appaseguradora.png
```

### 4. **Verificar GitHub Pages:**
Si waynox.es está conectado a GitHub:
- Verificar que el repositorio esté configurado para GitHub Pages
- Verificar que las imágenes estén en la rama correcta
- Verificar que las rutas sean correctas

### 5. **Rutas de imágenes:**
Las imágenes deben estar en:
```
/images/appaseguradora.png
/images/appmedico.png
/images/apppelu.png
/images/appmenu.png
/images/apptaller.png
```

## 📱 Estado actual:
- ✅ Imágenes funcionando en localhost
- ❌ Imágenes no cargan en waynox.es
- 🔄 Placeholders con emojis se muestran como fallback

## 🎯 Próximos pasos:
1. Optimizar las imágenes (reducir tamaño)
2. Verificar configuración de GitHub Pages
3. Probar el despliegue con imágenes optimizadas
