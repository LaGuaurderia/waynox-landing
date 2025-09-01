import React from 'react'
import Section from '../components/Section'
import SEO from '../components/SEO'

const Terminos: React.FC = () => {
  return (
    <>
      <SEO
        title="Términos y Condiciones - Waynox Studio"
        description="Términos y condiciones de uso de Waynox Studio. Condiciones de contratación de servicios digitales y obligaciones de las partes."
        url="https://waynox.es/terminos"
      />
      <Section>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ marginBottom: 8 }}>Términos y Condiciones</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 32 }}>
            Condiciones de uso del sitio y contratación de servicios.
          </p>

          <div className="card" style={{ padding: 24, display: 'grid', gap: 24 }}>
            <section>
              <h2>1. Identidad del Proveedor</h2>
              <p><strong>Waynox Studio</strong></p>
              <p>Email: hola@waynox.es</p>
              <p>Ubicación: Barcelona, España</p>
              <p>Fecha de última actualización: Enero 2024</p>
            </section>

            <section>
              <h2>2. Objeto</h2>
              <p>
                Estos términos regulan el acceso y uso del sitio web y las condiciones
                de contratación de servicios de diseño, desarrollo y consultoría
                digital prestados por Waynox Studio.
              </p>
            </section>

            <section>
              <h2>3. Aceptación</h2>
              <p>
                El uso del sitio y/o la contratación de servicios implica la aceptación
                plena de estos términos. Si no estás de acuerdo, debes abstenerte de usar el sitio o contratar.
              </p>
            </section>

            <section>
              <h2>4. Proceso de Contratación</h2>
              <ul>
                <li>Solicitud de información o presupuesto a través del sitio o contacto directo.</li>
                <li>Propuesta técnica y económica con alcance, plazos y precio.</li>
                <li>Aceptación por escrito y, en su caso, pago inicial según condiciones.</li>
                <li>Ejecución por fases, entregas parciales y validaciones del cliente.</li>
              </ul>
            </section>

            <section>
              <h2>5. Precios y Pagos</h2>
              <ul>
                <li>Los precios no incluyen impuestos salvo indicación expresa.</li>
                <li>Los pagos se realizarán según el hito acordado en la propuesta.</li>
                <li>El retraso en pagos puede suspender servicios y entregas.</li>
                <li>Gastos de terceros (hosting, licencias, APIs) se facturan aparte.</li>
              </ul>
            </section>

            <section>
              <h2>6. Propiedad Intelectual</h2>
              <ul>
                <li>El código y materiales creados serán cedidos al cliente al completar el pago total, salvo librerías de terceros con sus licencias respectivas.</li>
                <li>Waynox Studio mantiene el derecho a citar y mostrar trabajos como portfolio, salvo pacto de confidencialidad.</li>
              </ul>
            </section>

            <section>
              <h2>7. Contenidos y Responsabilidades del Cliente</h2>
              <ul>
                <li>El cliente garantiza disponer de derechos sobre textos, imágenes y marcas que facilite.</li>
                <li>El cliente se compromete a revisar y aprobar entregas en plazos razonables.</li>
              </ul>
            </section>

            <section>
              <h2>8. Cambios de Alcance</h2>
              <p>
                Cualquier modificación fuera del alcance acordado será presupuestada como
                adicional y puede impactar en plazos y tarifas.
              </p>
            </section>

            <section>
              <h2>9. Garantía y Mantenimiento</h2>
              <ul>
                <li>Se ofrece garantía de corrección de errores detectados en producción durante 30 días desde la entrega final, siempre que no se hayan hecho cambios por terceros.</li>
                <li>El mantenimiento evolutivo y soporte continuo se contratan aparte.</li>
              </ul>
            </section>

            <section>
              <h2>10. Limitación de Responsabilidad</h2>
              <p>
                Waynox Studio no será responsable por daños indirectos, lucro cesante o pérdida de datos
                derivados del uso del software, salvo dolo o negligencia grave.
              </p>
            </section>

            <section>
              <h2>11. Protección de Datos</h2>
              <p>
                El tratamiento de datos personales se rige por la <a href="/privacidad">Política de Privacidad</a>.
              </p>
            </section>

            <section>
              <h2>12. Confidencialidad</h2>
              <p>
                Ambas partes se obligan a mantener la confidencialidad de la información no pública
                intercambiada con motivo del proyecto.
              </p>
            </section>

            <section>
              <h2>13. Suspensión y Resolución</h2>
              <ul>
                <li>El incumplimiento grave permite a cualquiera de las partes resolver el contrato.</li>
                <li>La falta de colaboración o pagos habilita la suspensión del servicio.</li>
              </ul>
            </section>

            <section>
              <h2>14. Legislación y Jurisdicción</h2>
              <p>
                Estos términos se rigen por la legislación española. Para cualquier controversia,
                las partes se someten a los juzgados de Barcelona, salvo normativa imperativa distinta.
              </p>
            </section>

            <section>
              <h2>15. Contacto</h2>
              <p>
                Para consultas sobre estos términos, escríbenos a hola@waynox.es o por WhatsApp al +34 621 03 35 28.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Terminos



