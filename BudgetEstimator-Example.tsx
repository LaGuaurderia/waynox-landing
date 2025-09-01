import React from 'react';
import BudgetEstimator from './BudgetEstimator';

// Ejemplo de implementación del componente BudgetEstimator en Framer
// Este archivo muestra cómo configurar y usar el componente

const BudgetEstimatorExample: React.FC = () => {
  // Configuración de props del componente
  const formsparkEndpoint = "https://submit.formspark.io/TU_ID_AQUI";
  const calendlyUrl = "https://calendly.com/waynox/15min";
  const whatsappUrl = "https://wa.me/34TU_NUMERO?text=Hola%20Waynox%2C%20acabo%20de%20calcular%20mi%20presupuesto.";
  const rgpdPrivacyUrl = "https://waynox.es/privacidad";
  
  // Color de acento personalizable (opcional)
  const brandAccent = "#0EA5E9"; // Azul eléctrico por defecto

  return (
    <div>
      {/* 
        Componente BudgetEstimator configurado para Framer
        Props disponibles:
        - formsparkEndpoint: URL de FormSpark (requerido)
        - calendlyUrl: URL de Calendly (requerido)
        - whatsappUrl: URL de WhatsApp (requerido)
        - brandAccent: Color de acento (opcional, default #0EA5E9)
        - rgpdPrivacyUrl: URL de política de privacidad (opcional, default waynox.es/privacidad)
      */}
      <BudgetEstimator
        formsparkEndpoint={formsparkEndpoint}
        calendlyUrl={calendlyUrl}
        whatsappUrl={whatsappUrl}
        brandAccent={brandAccent}
        rgpdPrivacyUrl={rgpdPrivacyUrl}
      />
    </div>
  );
};

export default BudgetEstimatorExample;

/*
INSTRUCCIONES PARA FRAMER:

1. IMPORTAR EL COMPONENTE:
   - Copia el archivo BudgetEstimator.tsx a tu proyecto Framer
   - Asegúrate de que React y TypeScript estén habilitados

2. CONFIGURAR PROPS EN FRAMER:
   - formsparkEndpoint: Tu endpoint de FormSpark
   - calendlyUrl: Tu URL de Calendly
   - whatsappUrl: Tu URL de WhatsApp con mensaje predefinido
   - brandAccent: Color de acento (opcional)
   - rgpdPrivacyUrl: URL de tu política de privacidad (opcional)

3. INTEGRAR EN EL HERO:
   - Añade un botón "Calcula tu presupuesto" en tu hero
   - Conecta el botón para abrir el modal del BudgetEstimator
   - Añade la microcopia: "En 1 minuto tendrás una estimación orientativa."

4. ESTILOS:
   - El componente incluye sus propios estilos CSS
   - Los estilos son responsivos y accesibles
   - Usa la tipografía Inter por defecto
   - Paleta de colores: blanco/negro/gris + acento azul

5. FUNCIONALIDADES:
   - 7 pasos de formulario
   - Cálculo automático de precios
   - Integración con GA4
   - Envío a FormSpark
   - CTAs a Calendly y WhatsApp
   - Validación RGPD
   - Accesibilidad completa

6. EVENTOS GA4:
   - quiz_start: Al abrir el modal
   - quiz_step: En cada paso
   - quiz_submit: Al enviar el formulario
   - quiz_book_call: Al hacer clic en Calendly
   - quiz_whatsapp_click: Al hacer clic en WhatsApp

7. INTEGRACIÓN CON ZAPIER:
   - FormSpark → Google Sheets
   - FormSpark → Brevo (Sendinblue)
   - Notificaciones opcionales a Slack/Telegram

VALORES POR DEFECTO RECOMENDADOS:
- formsparkEndpoint: https://submit.formspark.io/TU_ID
- calendlyUrl: https://calendly.com/waynox/15min
- whatsappUrl: https://wa.me/34TU_NUMERO?text=Hola%20Waynox%2C%20acabo%20de%20calcular%20mi%20presupuesto.
- rgpdPrivacyUrl: https://waynox.es/privacidad
- brandAccent: #0EA5E9 (azul eléctrico)

NOTAS IMPORTANTES:
- El componente es completamente autónomo
- Incluye manejo de errores y validaciones
- Es responsive y accesible
- Soporta navegación por teclado
- Incluye medición de tiempo de completado
- Captura automáticamente UTM parameters y referrer
*/
