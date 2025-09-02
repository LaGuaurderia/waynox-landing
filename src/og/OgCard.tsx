import React from 'react';

interface OgCardProps {
  title: string;
  category: string;
  date: string;
  tags: string[];
}

const OgCard: React.FC<OgCardProps> = ({ title, category, date, tags }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
        padding: '60px',
        fontFamily: 'Inter, system-ui, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Logo Waynox */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1E90FF',
        }}
      >
        Waynox Studio
      </div>

      {/* Fondo decorativo */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(30, 144, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Categoría */}
        <div
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: getCategoryColor(category),
            color: 'white',
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '40px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {category}
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: '1.1',
            margin: '0 0 30px 0',
            maxWidth: '900px',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          {title}
        </h1>

        {/* Tags */}
        {tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}
          >
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span
                style={{
                  padding: '8px 16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                +{tags.length - 3} más
              </span>
            )}
          </div>
        )}

        {/* Metadatos */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          <span>{formatDate(date)}</span>
          <span>•</span>
          <span>Waynox Studio</span>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '60px',
          right: '60px',
          height: '2px',
          background: 'linear-gradient(90deg, #1E90FF 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

// Función para obtener el color de la categoría
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'IA': '#1E90FF',
    'Formación': '#FF6B6B',
    'Herramientas': '#4ECDC4',
    'Negocio': '#45B7D1',
  };
  return colors[category] || '#1E90FF';
};

// Función para formatear fecha en español
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default OgCard;
