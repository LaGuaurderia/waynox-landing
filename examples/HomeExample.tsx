import React from 'react';

export const HomeExample: React.FC = () => {
  const handleBudgetClick = () => {
    // Abrir modal BudgetEstimator
    console.log('Abrir BudgetEstimator');
  };

  const services = [
    {
      icon: "📱",
      title: "Apps móviles (Flutter)",
      bullets: [
        "iOS/Android con un solo código",
        "Rápidas y escalables",
        "MVP a producción"
      ]
    },
    {
      icon: "🌐",
      title: "Web / Web app",
      bullets: [
        "Corporativas o catálogos",
        "SEO y rendimiento",
        "Conversión clara"
      ]
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      bullets: [
        "Wireframes y prototipos",
        "Accesibilidad",
        "Diseño que acelera dev"
      ]
    }
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Análisis de necesidades y planificación estratégica"
    },
    {
      number: "02", 
      title: "Development",
      description: "Desarrollo iterativo con entregas continuas"
    },
    {
      number: "03",
      title: "Scaling",
      description: "Optimización y crecimiento del producto"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section hero-gradient min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="h1 fade-up">
            Apps y webs profesionales a medida, rápido y con precios accesibles.
          </h1>
          
          <p className="sub fade-up delay-1 mx-auto mt-6">
            Del boceto al código. Sin perder tu esencia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={handleBudgetClick}
              className="btn btn-primary"
            >
              Calcula tu presupuesto
            </button>
            
            <a 
              href="#servicios"
              className="btn btn-secondary"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="section">
        <div className="container">
          <h2 className="h2 text-center mb-16">
            Nuestros Servicios
          </h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="text-muted flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="section">
        <div className="container">
          <h2 className="h2 text-center mb-6">
            Desarrollo de producto de extremo a extremo
          </h2>
          
          <p className="sub text-center mx-auto mb-16">
            Metodología probada que garantiza la entrega de valor desde el primer sprint hasta el lanzamiento exitoso.
          </p>
          
          <div className="timeline-grid">
            {timelineSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl font-bold text-accent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Timeline indicator */}
          <div className="timeline-indicator h-16 mt-8"></div>
        </div>
      </section>

      {/* Pack App Básica Section */}
      <section className="section">
        <div className="container">
          <div className="card col-span-full text-center max-w-4xl mx-auto">
            <h2 className="h2 mb-6">
              Pack App Básica 549,99 €
            </h2>
            
            <p className="sub mb-8">
              App móvil completa con Flutter, backend básico y despliegue en stores. 
              Ideal para validar tu idea de negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto"
                className="btn btn-primary"
              >
                Quiero esta app
              </a>
              
              <button 
                onClick={handleBudgetClick}
                className="btn btn-secondary"
              >
                No sé qué necesito, guíame
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="h2 text-center mb-16">
            ¿Listo para empezar?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Formulario */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">
                Cuéntanos sobre tu proyecto
              </h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full p-3 bg-bg border border-line rounded-lg text-white placeholder-muted focus:border-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-bg border border-line rounded-lg text-white placeholder-muted focus:border-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Describe tu proyecto"
                    rows={4}
                    className="w-full p-3 bg-bg border border-line rounded-lg text-white placeholder-muted focus:border-accent focus:outline-none resize-none"
                  ></textarea>
                </div>
                
                <div className="text-sm text-muted">
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos según el RGPD.
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            
            {/* Contacto directo */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6">
                O contacta directamente
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/34621033528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full justify-center"
                >
                  💬 WhatsApp
                </a>
                
                <a 
                  href="https://calendly.com/waynox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full justify-center"
                >
                  📅 Agendar llamada
                </a>
                
                <div className="text-center text-muted">
                  <p>O escríbenos a:</p>
                  <p className="text-accent">hola@waynox.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
