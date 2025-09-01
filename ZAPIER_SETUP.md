# Configuración de Zapier para BudgetEstimator

## 🔄 Descripción General

Este documento detalla la configuración de los Zaps de Zapier necesarios para integrar el componente BudgetEstimator con Google Sheets y Brevo (Sendinblue) para la captura y gestión de leads.

## 📋 Prerrequisitos

### Cuentas Necesarias
- [Zapier](https://zapier.com) - Cuenta gratuita o de pago
- [FormSpark](https://formspark.io) - Para captura de formularios
- [Google Sheets](https://sheets.google.com) - Para almacenamiento de datos
- [Brevo](https://brevo.com) (anteriormente Sendinblue) - Para email marketing

### Configuración de FormSpark
1. Crear cuenta en FormSpark
2. Crear nuevo formulario
3. Obtener endpoint URL (ej: `https://submit.formspark.io/abc123`)
4. Configurar notificaciones por email (opcional)

## 🚀 Zap 1: FormSpark → Google Sheets

### Trigger: FormSpark - New Submission
1. **App**: FormSpark
2. **Event**: New Submission
3. **Form**: Seleccionar tu formulario de presupuesto

### Action: Google Sheets - Create Row
1. **App**: Google Sheets
2. **Action**: Create Row
3. **Spreadsheet**: Seleccionar o crear nueva hoja
4. **Worksheet**: Seleccionar hoja (ej: "Leads Presupuesto")

### Configuración de Columnas
Configura las siguientes columnas en tu Google Sheet:

| Columna | Tipo | Descripción | Mapeo desde FormSpark |
|---------|------|-------------|----------------------|
| A | timestamp | Fecha y hora | `{{created_at}}` |
| B | name | Nombre completo | `{{name}}` |
| C | company | Empresa | `{{company}}` |
| D | email | Email | `{{email}}` |
| E | phone | Teléfono | `{{phone}}` |
| F | projectType | Tipo de proyecto | `{{projectType}}` |
| G | goal | Objetivo principal | `{{goal}}` |
| H | features | Funcionalidades | `{{features}}` |
| I | design | Tipo de diseño | `{{design}}` |
| J | publish | Plataforma publicación | `{{publish}}` |
| K | deadline | Plazo objetivo | `{{deadline}}` |
| L | budgetBand | Banda de presupuesto | `{{budgetBand}}` |
| M | notes | Notas adicionales | `{{notes}}` |
| N | rangeLow | Rango bajo precio | `{{rangeLow}}` |
| O | rangeHigh | Rango alto precio | `{{rangeHigh}}` |
| P | consentRGPD | Consentimiento RGPD | `{{consentRGPD}}` |
| Q | utm_source | UTM Source | `{{utm_source}}` |
| R | utm_medium | UTM Medium | `{{utm_medium}}` |
| S | utm_campaign | UTM Campaign | `{{utm_campaign}}` |
| T | gclid | Google Click ID | `{{gclid}}` |
| U | fbclid | Facebook Click ID | `{{fbclid}}` |
| V | page_url | URL de la página | `{{page_url}}` |
| W | referrer | Página de origen | `{{referrer}}` |
| X | device | Dispositivo | `{{device}}` |
| Y | time_to_complete | Tiempo completado | `{{time_to_complete}}` |

### Configuración Avanzada
- **Filtros**: Solo procesar si `consentRGPD` es `true`
- **Formato de fecha**: `{{created_at \| date: "YYYY-MM-DD HH:mm:ss"}}`
- **Array a texto**: Para `features`, usar `{{features \| join: ", "}}`

## 📧 Zap 2: FormSpark → Brevo

### Trigger: FormSpark - New Submission
1. **App**: FormSpark
2. **Event**: New Submission
3. **Form**: Mismo formulario que Zap 1

### Action: Brevo - Create/Update Contact
1. **App**: Brevo (Sendinblue)
2. **Action**: Create/Update Contact
3. **List**: "Leads - Presupuesto" (crear si no existe)

### Mapeo de Atributos
```json
{
  "email": "{{email}}",
  "attributes": {
    "FIRSTNAME": "{{name}}",
    "COMPANY": "{{company}}",
    "PHONE": "{{phone}}",
    "PROJECT_TYPE": "{{projectType}}",
    "GOAL": "{{goal}}",
    "FEATURES": "{{features}}",
    "DESIGN": "{{design}}",
    "PUBLISH": "{{publish}}",
    "DEADLINE": "{{deadline}}",
    "BUDGET_BAND": "{{budgetBand}}",
    "NOTES": "{{notes}}",
    "RANGE_LOW": "{{rangeLow}}",
    "RANGE_HIGH": "{{rangeHigh}}",
    "TIME_TO_COMPLETE": "{{time_to_complete}}",
    "UTM_SOURCE": "{{utm_source}}",
    "UTM_MEDIUM": "{{utm_medium}}",
    "UTM_CAMPAIGN": "{{utm_campaign}}",
    "DEVICE": "{{device}}",
    "PAGE_URL": "{{page_url}}",
    "REFERRER": "{{referrer}}"
  }
}
```

### Configuración de Lista
Crear lista en Brevo con nombre "Leads - Presupuesto" y categoría "Leads".

## 🔔 Zap 3: Notificaciones (Opcional)

### Opción A: Slack
1. **Trigger**: FormSpark - New Submission
2. **Action**: Slack - Send Message
3. **Channel**: #leads-presupuesto
4. **Message**:
```
🎯 *Nuevo Lead de Presupuesto*
• *Nombre*: {{name}}
• *Empresa*: {{company}}
• *Proyecto*: {{projectType}} - {{goal}}
• *Rango*: {{rangeLow}}€ - {{rangeHigh}}€
• *Plazo*: {{deadline}}
• *Tiempo*: {{time_to_complete}}s
```

### Opción B: Telegram
1. **Trigger**: FormSpark - New Submission
2. **Action**: Telegram - Send Message
3. **Chat ID**: Tu chat ID de Telegram
4. **Message**: Similar al de Slack

### Opción C: Email
1. **Trigger**: FormSpark - New Submission
2. **Action**: Email by Zapier
3. **To**: tu-email@waynox.es
4. **Subject**: `Nuevo lead: {{name}} - {{rangeLow}}-{{rangeHigh}}€`
5. **Body**: Similar al de Slack

## ⚙️ Configuración de Filtros

### Filtro RGPD
```
consentRGPD equals true
```

### Filtro de Calidad
```
email contains "@"
name length greater than 2
```

### Filtro de Spam
```
time_to_complete greater than 10
```

## 📊 Configuración de Google Sheets

### Crear Nueva Hoja
1. Ir a [Google Sheets](https://sheets.google.com)
2. Crear nueva hoja
3. Nombrar: "Leads Presupuesto - Waynox"
4. Crear hoja: "Leads"

### Configurar Encabezados
```javascript
// Fila 1: Encabezados
["timestamp", "name", "company", "email", "phone", "projectType", "goal", "features", "design", "publish", "deadline", "budgetBand", "notes", "rangeLow", "rangeHigh", "consentRGPD", "utm_source", "utm_medium", "utm_campaign", "gclid", "fbclid", "page_url", "referrer", "device", "time_to_complete"]

// Fila 2: Ejemplos de datos
["2024-12-20 10:30:00", "Juan Pérez", "Mi Empresa", "juan@empresa.com", "+34 600 000 000", "app", "reservas", "auth_email, chat", "template", "both", "3-4w", "1-3k", "Proyecto urgente", 999, 1234, true, "google", "cpc", "presupuesto", "abc123", "xyz789", "https://waynox.es", "https://google.com", "desktop", 75]
```

### Formateo Automático
1. **Seleccionar toda la hoja**
2. **Formato → Formato condicional**
3. **Crear regla**: Si `consentRGPD` es `false`, fondo rojo
4. **Crear regla**: Si `time_to_complete` < 30, fondo amarillo

## 📧 Configuración de Brevo

### Crear Lista
1. Ir a [Brevo](https://brevo.com)
2. **Audience → Lists**
3. **Create a new list**
4. **Name**: "Leads - Presupuesto"
5. **Category**: Leads

### Crear Atributos Personalizados
```json
{
  "PROJECT_TYPE": "Text",
  "GOAL": "Text",
  "FEATURES": "Text",
  "DESIGN": "Text",
  "PUBLISH": "Text",
  "DEADLINE": "Text",
  "BUDGET_BAND": "Text",
  "NOTES": "Text",
  "RANGE_LOW": "Number",
  "RANGE_HIGH": "Number",
  "TIME_TO_COMPLETE": "Number",
  "UTM_SOURCE": "Text",
  "UTM_MEDIUM": "Text",
  "UTM_CAMPAIGN": "Text",
  "DEVICE": "Text",
  "PAGE_URL": "Text",
  "REFERRER": "Text"
}
```

### Crear Plantilla de Email
1. **Templates → Create a new template**
2. **Name**: "Tu estimación Waynox Studio"
3. **Subject**: `Tu estimación Waynox Studio`
4. **Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Tu estimación Waynox Studio</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #0EA5E9;">¡Hola {{FIRSTNAME}}!</h1>
        
        <p>¡Gracias por confiar en Waynox Studio! Según tus respuestas, tu rango orientativo es <strong>{{RANGE_LOW}}–{{RANGE_HIGH}} €</strong>.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Resumen de tu proyecto:</h3>
            <ul>
                <li><strong>Tipo:</strong> {{PROJECT_TYPE}}</li>
                <li><strong>Objetivo:</strong> {{GOAL}}</li>
                <li><strong>Plazo:</strong> {{DEADLINE}}</li>
            </ul>
        </div>
        
        <h3>Próximos pasos:</h3>
        <p>• <a href="https://calendly.com/waynox/15min" style="color: #0EA5E9; text-decoration: none;">📅 Agenda una llamada de 15 min</a> para afinar el alcance</p>
        <p>• O respóndenos a este email con cualquier duda</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="font-size: 14px; color: #666;">
            <em>Estimación orientativa. No incluye impuestos. Sujeta a revisión de alcance.</em>
        </p>
        
        <p>Un saludo,<br>
        <strong>Waynox Studio</strong></p>
    </div>
</body>
</html>
```

## 🧪 Testing de los Zaps

### Test 1: Formulario Básico
1. Completar formulario con datos mínimos
2. Verificar que se crea fila en Google Sheets
3. Verificar que se crea contacto en Brevo
4. Verificar notificaciones (si están configuradas)

### Test 2: Datos Completos
1. Completar formulario con todos los campos
2. Verificar que todos los datos se mapean correctamente
3. Verificar formato de arrays y fechas

### Test 3: Filtros
1. Probar sin consentimiento RGPD
2. Probar con tiempo muy bajo
3. Verificar que los filtros funcionan

## 🔧 Solución de Problemas

### Error: "FormSpark not connected"
1. Verificar credenciales de FormSpark
2. Reautenticar en Zapier
3. Verificar que el formulario existe

### Error: "Google Sheets not accessible"
1. Verificar permisos de la hoja
2. Asegurar que la hoja está compartida
3. Verificar que las columnas coinciden

### Error: "Brevo contact not created"
1. Verificar API key de Brevo
2. Verificar que la lista existe
3. Verificar formato de atributos

### Datos no se mapean
1. Verificar nombres de campos en FormSpark
2. Verificar mapeo en Zapier
3. Usar "Test Trigger" para ver datos reales

## 📈 Monitoreo y Analytics

### Métricas a Seguir
- **Tasa de conversión**: Formularios completados / Visitas
- **Tiempo promedio**: Tiempo para completar formulario
- **Abandono por paso**: En qué paso abandonan más usuarios
- **Calidad de leads**: Leads con consentimiento RGPD

### Dashboard de Google Sheets
Crear gráficos automáticos:
- Leads por día/semana
- Distribución por tipo de proyecto
- Rango de precios promedio
- Tiempo de completado por dispositivo

## 🚀 Optimizaciones

### Automatizaciones Adicionales
1. **Lead scoring** basado en funcionalidades seleccionadas
2. **Segmentación automática** por presupuesto
3. **Follow-up automático** para leads calientes
4. **Integración con CRM** (HubSpot, Pipedrive)

### Mejoras de Performance
1. **Filtros inteligentes** para reducir procesamiento
2. **Batch processing** para múltiples leads
3. **Webhooks** para notificaciones en tiempo real

---

**Última actualización**: Diciembre 2024  
**Versión Zapier**: Compatible con todas las versiones  
**Soporte**: [help.zapier.com](https://help.zapier.com)
