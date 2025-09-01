# 🎯 BudgetEstimator - Componente de Presupuesto para Waynox Studio

## 📋 Descripción

El **BudgetEstimator** es un componente React/TypeScript completo que implementa un formulario interactivo de 7 pasos para calcular estimaciones de presupuesto de proyectos de desarrollo web y móvil. Diseñado específicamente para integrarse en la landing de Waynox Studio en Framer.

## ✨ Características Principales

- 🚀 **7 pasos secuenciales** con barra de progreso visual
- 💰 **Cálculo automático de precios** basado en selecciones del usuario
- 📊 **Integración completa con GA4** para tracking de eventos
- 📧 **Envío automático a FormSpark** para captura de leads
- 📅 **CTAs integrados** a Calendly y WhatsApp
- 📱 **Diseño responsive** y accesible (móvil primero)
- 🔒 **Validación RGPD** completa y configurable
- ⏱️ **Medición de tiempo** de completado del formulario
- 🎨 **Estilos personalizables** con paleta de colores configurable

## 📁 Estructura del Proyecto

```
waynox-landing/
├── BudgetEstimator.tsx              # Componente React principal
├── BudgetEstimator.css              # Estilos CSS del componente
├── BudgetEstimator-Example.tsx      # Ejemplo de implementación
├── IMPLEMENTACION_BUDGET_ESTIMATOR.md # Documentación completa
├── ZAPIER_SETUP.md                  # Configuración de Zapier
└── README_BUDGET_ESTIMATOR.md       # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **React 18+** con TypeScript
- **CSS3** con variables CSS y animaciones
- **Google Analytics 4** para tracking
- **FormSpark** para captura de formularios
- **Zapier** para automatizaciones
- **Google Sheets** para almacenamiento
- **Brevo** para email marketing

## 🚀 Instalación Rápida

### 1. Copiar Archivos
```bash
# Copia estos archivos a tu proyecto Framer
BudgetEstimator.tsx
BudgetEstimator.css
```

### 2. Importar Componente
```tsx
import BudgetEstimator from './BudgetEstimator';
```

### 3. Configurar Props
```tsx
<BudgetEstimator
  formsparkEndpoint="https://submit.formspark.io/TU_ID"
  calendlyUrl="https://calendly.com/waynox/15min"
  whatsappUrl="https://wa.me/34TU_NUMERO?text=Hola%20Waynox%2C%20acabo%20de%20calcular%20mi%20presupuesto."
  brandAccent="#0EA5E9"
  rgpdPrivacyUrl="https://waynox.es/privacidad"
/>
```

## 🎯 Flujo del Formulario

### Paso 1: Tipo de Proyecto
- App móvil (iOS/Android)
- Web (corporativa / reservas / catálogo)
- No lo sé / Aconséjame

### Paso 2: Objetivo Principal
- Reservas / citas
- Captación de clientes
- Catálogo / información
- Comunidad / chat / social
- No lo sé

### Paso 3: Funcionalidades (Selección Múltiple)
- Autenticación por email
- Login con Google/Facebook
- Pagos básicos
- E-commerce completo
- Chat en tiempo real
- Calendario y reservas
- Notificaciones push
- Mapas y geolocalización
- Panel de administración
- Ninguna funcionalidad especial
- No lo sé

### Paso 4: Diseño
- Plantilla limpia con tu marca (rápido)
- UI personalizada (más diferencial)
- No lo sé

### Paso 5: Publicación
- Android
- iOS
- Ambas
- No aplica / No lo sé

### Paso 6: Plazo
- 1–2 semanas (urgente)
- 3–4 semanas
- 5–8 semanas
- Flexible

### Paso 7: Datos de Contacto
- Nombre *
- Empresa
- Email *
- Teléfono
- Presupuesto aproximado
- Notas adicionales
- Acepto política de privacidad *

## 💰 Sistema de Precios

### Precio Base
- **App móvil**: 549,99€
- **Web**: 499,99€

### Incrementos por Funcionalidades
- Autenticación email: +80€
- OAuth: +150€
- Pagos básicos: +200€
- E-commerce: +350€
- Chat: +200€
- Calendario: +200€
- Push: +150€
- Mapas: +150€
- Admin: +250€

### Incrementos por Plataforma
- Android: +100€
- iOS: +150€
- Ambas: +250€

### Incrementos por Diseño
- UI personalizada: +120€

### Multiplicador por Urgencia
- Urgente (1-2 semanas): +20%

### Rango Final
- **Rango bajo**: precio × 0.9
- **Rango alto**: precio × 1.2

## 📊 Eventos GA4

### Eventos Automáticos
```javascript
// Al abrir el modal
gtag('event', 'quiz_start', { page_url, utm_*, gclid, fbclid });

// En cada paso
gtag('event', 'quiz_step', { step_index, selection_count });

// Al enviar
gtag('event', 'quiz_submit', { projectType, features_count, deadline, price_low, price_high });

// CTAs
gtag('event', 'quiz_book_call');        // Calendly
gtag('event', 'quiz_whatsapp_click');   // WhatsApp
```

## 🔗 Integración con FormSpark

### Payload del Formulario
```json
{
  "source": "budget_estimator",
  "projectType": "app",
  "goal": "reservas",
  "features": ["auth_email", "chat"],
  "design": "template",
  "publish": "both",
  "deadline": "3-4w",
  "contact": { "name": "...", "email": "...", ... },
  "rangeLow": 999,
  "rangeHigh": 1234,
  "consentRGPD": true,
  "utm_source": "...",
  "time_to_complete": 75
}
```

## 🔄 Automatizaciones con Zapier

### Zap 1: FormSpark → Google Sheets
- Crea fila automática con todos los datos del lead
- 25 columnas de información completa
- Formateo condicional automático

### Zap 2: FormSpark → Brevo
- Crea/actualiza contacto automáticamente
- Atributos personalizados para segmentación
- Email automático con estimación

### Zap 3: Notificaciones (Opcional)
- Slack, Telegram o Email
- Resumen del lead en tiempo real

## 🎨 Personalización

### Colores Configurables
```css
:root {
  --budget-primary: #0EA5E9;           /* Color principal */
  --budget-primary-hover: #0284C7;     /* Hover */
  --budget-secondary: #6B7280;         /* Secundario */
  --budget-success: #10B981;           /* Éxito */
  --budget-error: #EF4444;             /* Error */
}
```

### Props Personalizables
- `brandAccent`: Color de acento principal
- `rgpdPrivacyUrl`: URL de política de privacidad
- `formsparkEndpoint`: Endpoint de FormSpark
- `calendlyUrl`: URL de Calendly
- `whatsappUrl`: URL de WhatsApp

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Móvil**: < 480px

### Características
- Layout de 1 columna en móvil
- Botones de navegación apilados
- Tamaños de fuente optimizados
- Espaciado adaptativo

## ♿ Accesibilidad

### Implementado
- Navegación por teclado (Tab, Enter, Escape)
- Focus visible en todos los elementos
- Roles ARIA para el modal
- Soporte para lectores de pantalla
- Contraste de colores optimizado
- Reducción de movimiento respetada

## 🧪 Testing

### Checklist de Verificación
- [ ] Modal se abre y cierra correctamente
- [ ] Navegación entre pasos funciona
- [ ] Cálculo de precios es correcto
- [ ] Validación RGPD bloquea envío
- [ ] Formulario se envía a FormSpark
- [ ] Eventos GA4 se disparan
- [ ] CTAs de Calendly y WhatsApp funcionan
- [ ] Responsive en móvil y desktop
- [ ] Accesibilidad por teclado funciona

## 📈 Métricas y Analytics

### Datos Capturados
- Tiempo de completado del formulario
- UTM parameters y referrer
- Información del dispositivo
- Selecciones del usuario
- Datos de contacto
- Estimación de presupuesto

### KPIs Recomendados
- Tasa de conversión del formulario
- Tiempo promedio de completado
- Abandono por paso
- Calidad de leads (con RGPD)
- Distribución de presupuestos

## 🚀 Optimizaciones Recomendadas

### Performance
- Lazy loading del componente
- Debounce en inputs de texto
- Memoización de cálculos de precio

### SEO
- Meta tags optimizados
- Schema markup para formularios
- URLs amigables para pasos

### Analytics
- Funnel de conversión por pasos
- A/B testing de opciones
- Heatmaps de interacción

## 🔧 Solución de Problemas

### Errores Comunes
1. **Modal no se abre**: Verificar que React esté montado
2. **Estilos no se aplican**: Verificar que CSS esté importado
3. **Formulario no envía**: Verificar endpoint de FormSpark
4. **GA4 no funciona**: Verificar que gtag esté disponible

### Debug
- Usar consola del navegador
- Verificar eventos GA4 en DebugView
- Comprobar respuestas de FormSpark
- Revisar logs de Zapier

## 📚 Documentación Adicional

- **[IMPLEMENTACION_BUDGET_ESTIMATOR.md](IMPLEMENTACION_BUDGET_ESTIMATOR.md)** - Guía completa de implementación
- **[ZAPIER_SETUP.md](ZAPIER_SETUP.md)** - Configuración detallada de Zapier
- **[BudgetEstimator-Example.tsx](BudgetEstimator-Example.tsx)** - Ejemplo de uso

## 🤝 Contribución

### Reportar Bugs
1. Describir el problema claramente
2. Incluir pasos para reproducir
3. Especificar navegador y dispositivo
4. Adjuntar logs de consola si es posible

### Sugerencias
- Crear issue con descripción detallada
- Incluir casos de uso específicos
- Proponer soluciones si es posible

## 📞 Soporte

### Contacto
- **Email**: soporte@waynox.es
- **WhatsApp**: +34 XXX XXX XXX
- **Documentación**: [docs.waynox.es](https://docs.waynox.es)

### Recursos
- [FormSpark Documentation](https://formspark.io/docs)
- [GA4 Developer Guide](https://developers.google.com/analytics/devguides/collection/ga4)
- [Zapier Help Center](https://help.zapier.com)

## 📄 Licencia

Este componente está desarrollado específicamente para Waynox Studio. Todos los derechos reservados.

## 🔄 Versiones

### v1.0.0 (Diciembre 2024)
- ✅ Componente base funcional
- ✅ 7 pasos de formulario
- ✅ Cálculo automático de precios
- ✅ Integración GA4
- ✅ Envío a FormSpark
- ✅ CTAs a Calendly y WhatsApp
- ✅ Validación RGPD
- ✅ Diseño responsive
- ✅ Accesibilidad completa

### Próximas Versiones
- 🔄 Navegación con flechas del teclado
- 🔄 Guardado de progreso en localStorage
- 🔄 A/B testing integrado
- 🔄 Más opciones de personalización
- 🔄 Integración con más CRMs

---

**Desarrollado por**: Waynox Studio  
**Versión**: 1.0.0  
**Última actualización**: Diciembre 2024  
**Compatibilidad**: React 18+, TypeScript 4.5+, Framer 2024+
