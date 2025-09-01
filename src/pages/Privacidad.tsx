import React from 'react'
import Section from '../components/Section'
import SEO from '../components/SEO'

const Privacidad: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad - Waynox Studio"
        description="Política de privacidad y protección de datos de Waynox Studio. Cumplimiento RGPD y transparencia en el tratamiento de datos personales."
        url="https://waynox.es/privacidad"
      />
      <Section>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ marginBottom: 8 }}>Política de Privacidad</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>
            Transparencia y protección de tus datos personales.
          </p>

          <div className="card" style={{ padding: 24, display: 'grid', gap: 24 }}>
            <section>
              <h2>1. Información del Responsable</h2>
              <p><strong>Waynox Studio</strong></p>
              <p>Email: hola@waynox.es</p>
              <p>Ubicación: Barcelona, España</p>
              <p>Fecha de última actualización: Enero 2024</p>
            </section>

            <section>
              <h2>2. Finalidad del Tratamiento</h2>
              <p>Recopilamos y tratamos tus datos personales para:</p>
              <ul>
                <li>Gestionar consultas y solicitudes de información</li>
                <li>Proporcionar servicios de desarrollo y consultoría</li>
                <li>Enviar comunicaciones comerciales (con tu consentimiento)</li>
                <li>Cumplir obligaciones legales y contractuales</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2>3. Datos que Recopilamos</h2>
              <h3>3.1 Datos de Identificación</h3>
              <ul>
                <li>Nombre y apellidos</li>
                <li>Nombre de empresa (si aplica)</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono (opcional)</li>
              </ul>
              <h3>3.2 Datos del Proyecto</h3>
              <ul>
                <li>Tipo de proyecto solicitado</li>
                <li>Objetivos y funcionalidades</li>
                <li>Presupuesto aproximado</li>
                <li>Cronograma del proyecto</li>
                <li>Descripción detallada del proyecto</li>
              </ul>
              <h3>3.3 Datos Técnicos</h3>
              <ul>
                <li>Dirección IP</li>
                <li>Información del navegador</li>
                <li>Cookies y tecnologías similares</li>
                <li>Datos de uso del sitio web</li>
              </ul>
            </section>

            <section>
              <h2>4. Base Legal del Tratamiento</h2>
              <ul>
                <li><strong>Consentimiento:</strong> Para envío de comunicaciones comerciales</li>
                <li><strong>Ejecución de contrato:</strong> Para prestación de servicios</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
              </ul>
            </section>

            <section>
              <h2>5. Destinatarios de los Datos</h2>
              <p>Tus datos pueden ser compartidos con proveedores técnicos y autoridades cuando sea legalmente requerido. No vendemos tus datos.</p>
            </section>

            <section>
              <h2>6. Conservación de Datos</h2>
              <ul>
                <li><strong>Datos de contacto:</strong> Hasta revocación del consentimiento</li>
                <li><strong>Datos del proyecto:</strong> Vigencia del contrato + 5 años</li>
                <li><strong>Datos técnicos:</strong> Máximo 2 años</li>
                <li><strong>Facturación:</strong> 10 años</li>
              </ul>
            </section>

            <section>
              <h2>7. Tus Derechos</h2>
              <ul>
                <li>Acceso, Rectificación, Supresión</li>
                <li>Limitación y Oposición</li>
                <li>Portabilidad</li>
                <li>Revocación del consentimiento</li>
              </ul>
            </section>

            <section>
              <h2>8. Ejercicio de Derechos</h2>
              <p>Escríbenos a hola@waynox.es o por WhatsApp al +34 621 03 35 28.</p>
            </section>

            <section>
              <h2>9. Cookies y Tecnologías Similares</h2>
              <p>Utilizamos cookies para funcionamiento, análisis y preferencias. Puedes gestionarlas desde tu navegador.</p>
            </section>

            <section>
              <h2>10. Seguridad de los Datos</h2>
              <p>Aplicamos medidas técnicas y organizativas para proteger la información.</p>
            </section>

            <section>
              <h2>11. Autoridad de Control</h2>
              <p>Puedes presentar una reclamación ante la AEPD: <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a></p>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Privacidad


