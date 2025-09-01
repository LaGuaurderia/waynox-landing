# Implementación del Componente BudgetEstimator en Framer

## 📋 Descripción General

El componente `BudgetEstimator` es un formulario interactivo de 7 pasos que calcula estimaciones de presupuesto para proyectos de desarrollo web y móvil. Está diseñado para integrarse perfectamente en la landing de Waynox Studio.

## 🚀 Características Principales

- **7 pasos secuenciales** con barra de progreso
- **Cálculo automático de precios** basado en selecciones
- **Integración con GA4** para tracking de eventos
- **Envío a FormSpark** para captura de leads
- **CTAs integrados** a Calendly y WhatsApp
- **Diseño responsive** y accesible
- **Validación RGPD** completa
- **Medición de tiempo** de completado

## 📁 Archivos del Componente

1. **`BudgetEstimator.tsx`** - Componente React principal
2. **`BudgetEstimator.css`** - Estilos CSS del componente
3. **`BudgetEstimator-Example.tsx`** - Ejemplo de implementación
4. **`IMPLEMENTACION_BUDGET_ESTIMATOR.md`** - Esta documentación

## 🛠️ Instalación en Framer

### Paso 1: Preparar el Proyecto
- Asegúrate de que tu proyecto Framer tenga React y TypeScript habilitados
- Copia los archivos del componente a tu proyecto

### Paso 2: Importar el Componente
```tsx
import BudgetEstimator from './BudgetEstimator';
```

### Paso 3: Configurar Props
```tsx
<BudgetEstimator
  formsparkEndpoint="https://submit.formspark.io/TU_ID"
  calendlyUrl="https://calendly.com/waynox/15min"
  whatsappUrl="https://wa.me/34TU_NUMERO?text=Hola%20Waynox%2C%20acabo%20de%20calcular%20mi%20presupuesto."
  brandAccent="#0EA5E9"
  rgpdPrivacyUrl="https://waynox.es/privacidad"
/>
```

## 🎯 Integración en el Hero

### Botón Principal
Añade este botón en tu sección hero:

```html
<button class="cta-button primary" onclick="openBudgetEstimator()">
  Calcula tu presupuesto
</button>
<p class="hero-microcopy">
  En 1 minuto tendrás una estimación orientativa.
</p>
```

### Función JavaScript
```javascript
function openBudgetEstimator() {
  // Esta función se conectará con el componente React
  // El modal se abrirá automáticamente
}
```

## 🔧 Configuración de Props

### Props Requeridos

| Prop | Tipo | Descripción | Ejemplo |
|------|------|-------------|---------|
| `formsparkEndpoint` | string | URL de FormSpark para envío | `https://submit.formspark.io/abc123` |
| `calendlyUrl` | string | URL de Calendly para agendar | `https://calendly.com/waynox/15min` |
| `whatsappUrl` | string | URL de WhatsApp con mensaje | `https://wa.me/34XXXXXXXXX?text=...` |

### Props Opcionales

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `brandAccent` | string | `#0EA5E9` | Color de acento principal |
| `rgpdPrivacyUrl` | string | `https://waynox.es/privacidad` | URL de política de privacidad |

## 📊 Flujo del Formulario

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

### Paso 3: Funcionalidades (Múltiple)
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

## 💰 Cálculo de Precios

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

## 📈 Eventos GA4

### Eventos Automáticos
```javascript
// Al abrir el modal
gtag('event', 'quiz_start', {
  page_url: window.location.href,
  utm_source: '...',
  utm_medium: '...',
  utm_campaign: '...',
  gclid: '...',
  fbclid: '...'
});

// En cada paso
gtag('event', 'quiz_step', {
  step_index: 1-7,
  selection_count: 1-6
});

// Al enviar
gtag('event', 'quiz_submit', {
  projectType: 'app|web',
  features_count: 0-9,
  deadline: 'urgent|3-4w|5-8w|flex',
  price_low: 999,
  price_high: 1234
});

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
  "contact": {
    "name": "Juan Pérez",
    "company": "Mi Empresa",
    "email": "juan@empresa.com",
    "phone": "+34 600 000 000",
    "budgetBand": "1-3k",
    "notes": "Proyecto urgente"
  },
  "budgetBand": "1-3k",
  "notes": "Proyecto urgente",
  "rangeLow": 999,
  "rangeHigh": 1234,
  "consentRGPD": true,
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "presupuesto",
  "gclid": "abc123",
  "fbclid": "xyz789",
  "page_url": "https://waynox.es",
  "referrer": "https://google.com",
  "device": "desktop",
  "time_to_complete": 75
}
```

## 🔄 Configuración de Zapier

### Zap 1: FormSpark → Google Sheets
**Trigger**: FormSpark - New Submission
**Action**: Google Sheets - Create Row

**Columnas de Sheets**:
- timestamp
- name, company, email, phone
- projectType, goal, features
- design, publish, deadline
- budgetBand, notes
- rangeLow, rangeHigh
- consentRGPD
- utm_source, utm_medium, utm_campaign
- gclid, fbclid
- page_url, referrer, device
- time_to_complete

### Zap 2: FormSpark → Brevo
**Trigger**: FormSpark - New Submission
**Action**: Brevo - Create/Update Contact

**Lista**: Leads - Presupuesto
**Atributos**:
- FIRSTNAME, COMPANY
- PROJECT_TYPE, GOAL, FEATURES
- DEADLINE, RANGE_LOW, RANGE_HIGH

**Email**: Plantilla "Tu estimación Waynox Studio"

### Zap 3: Notificaciones (Opcional)
**Trigger**: FormSpark - New Submission
**Action**: Slack/Telegram - Send Message

**Mensaje**: `Nuevo lead: {name} - {rangeLow}-{rangeHigh}€`

## 📧 Plantilla de Email Brevo

### Asunto
`Tu estimación Waynox Studio`

### Cuerpo
```
Hola {{FIRSTNAME}},

¡Gracias por confiar en Waynox Studio! Según tus respuestas, tu rango orientativo es {{RANGE_LOW}}–{{RANGE_HIGH}} €.

Próximos pasos:
• Agenda una llamada de 15 min para afinar el alcance: {{CALENDLY_URL}}
• O respóndenos a este email con cualquier duda.

Resumen: Proyecto {{PROJECT_TYPE}} · Objetivo {{GOAL}} · Plazo {{DEADLINE}}

Un saludo,
Waynox Studio
```

## 🎨 Personalización de Estilos

### Variables CSS Personalizables
```css
:root {
  --budget-primary: #0EA5E9;           /* Color principal */
  --budget-primary-hover: #0284C7;     /* Hover del color principal */
  --budget-secondary: #6B7280;         /* Color secundario */
  --budget-success: #10B981;           /* Color de éxito */
  --budget-error: #EF4444;             /* Color de error */
  --budget-warning: #F59E0B;           /* Color de advertencia */
}
```

### Modificar Colores
Para cambiar el esquema de colores, modifica las variables CSS en `BudgetEstimator.css` o sobrescribe los estilos en tu CSS principal.

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Móvil**: < 480px

### Adaptaciones Automáticas
- Layout de 1 columna en móvil
- Botones de navegación apilados en móvil
- Tamaños de fuente optimizados
- Espaciado adaptativo

## ♿ Accesibilidad

### Características Implementadas
- Navegación por teclado (Tab, Enter, Escape)
- Focus visible en todos los elementos
- Roles ARIA para el modal
- Soporte para lectores de pantalla
- Contraste de colores optimizado
- Reducción de movimiento respetada

### Navegación por Teclado
- **Tab**: Navegar entre elementos
- **Enter**: Seleccionar opción o avanzar
- **Escape**: Cerrar modal
- **Flechas**: Navegar entre opciones (en desarrollo)

## 🧪 Testing y QA

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

### Errores Comunes
1. **Modal no se abre**: Verificar que React esté montado
2. **Estilos no se aplican**: Verificar que CSS esté importado
3. **Formulario no envía**: Verificar endpoint de FormSpark
4. **GA4 no funciona**: Verificar que gtag esté disponible

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

## 📞 Soporte

### Contacto
- **Email**: soporte@waynox.es
- **WhatsApp**: +34 XXX XXX XXX
- **Documentación**: [docs.waynox.es](https://docs.waynox.es)

### Recursos Adicionales
- [Guía de FormSpark](https://formspark.io/docs)
- [Documentación de GA4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Zapier Templates](https://zapier.com/templates)

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2024  
**Compatibilidad**: React 18+, TypeScript 4.5+, Framer 2024+
