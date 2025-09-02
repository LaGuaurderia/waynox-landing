# 🚀 Configuración Rápida - Generador de Portadas

## ⚡ Setup en 3 pasos

### 1. Configurar API Key de OpenAI
```bash
# Copiar archivo de ejemplo
cp env.example .env

# Editar .env y añadir tu API key
OPENAI_API_KEY=tu_api_key_real_aqui
```

**Obtener API key**: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

### 2. Verificar estructura
```
waynox-landing/
├── content/blog/           # ✅ Posts del blog
├── public/blog/covers/     # ✅ Directorio de salida
└── src/assets/             # ✅ Logo (opcional)
```

### 3. Probar sistema
```bash
# Modo dry-run (gratis)
npm run covers:dry

# Generar portada específica
npm run covers:one -- --slug=que-es-ia-para-pymes

# Generar todas las portadas
npm run covers:all
```

## 🔧 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run covers:dry` | Ver prompts sin generar imágenes |
| `npm run covers:one -- --slug=nombre` | Generar portada específica |
| `npm run covers:all` | Generar todas las portadas |
| `npm run covers:force` | Regenerar portadas existentes |

## 📝 Formato de posts

```yaml
---
title: "Título del Post"
category: "tecnologia"  # Ver categorías soportadas
tags: ["tag1", "tag2"]
date: "2024-01-15"
slug: "nombre-del-post"
---
```

## 🎨 Categorías soportadas

- **tecnologia**: Circuitos, elementos digitales
- **desarrollo**: Código, patrones binarios
- **marketing**: Gráficos, métricas de negocio
- **ia**: Redes neuronales, ML
- **web**: Tecnologías web, interfaces
- **mobile**: Apps, dispositivos móviles
- **cloud**: Computación en la nube
- **seo**: Optimización de búsquedas
- **ux**: Experiencia de usuario
- **fintech**: Tecnología financiera

## 💰 Costes estimados

- **DALL-E 3 Standard**: ~$0.04 por imagen
- **DALL-E 3 HD**: ~$0.08 por imagen
- **Modo dry-run**: Gratis

## 🚨 Solución de problemas

### Error: "OPENAI_API_KEY no está definida"
```bash
# Verificar archivo .env
cat .env

# Reiniciar terminal después de crear .env
```

### Error: "No se encontraron archivos MDX"
```bash
# Verificar estructura
ls content/blog/
ls src/content/blog/

# Crear directorio si no existe
mkdir -p content/blog
```

### Error: "Prompt rechazado por OpenAI"
- Revisar categoría y tags del post
- Usar `--dry` para verificar prompt
- Evitar contenido inapropiado

## 📚 Documentación completa

Ver `README_GENERADOR_PORTADAS.md` para detalles completos.

---

**¡Listo!** Tu generador de portadas está configurado y funcionando. 🎉
