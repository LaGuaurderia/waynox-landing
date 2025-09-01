import React from 'react';

export const TestApp: React.FC = () => {
  return (
    <div style={{ 
      background: '#0B0B0B', 
      color: '#F5F7FA', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ color: '#F5F7FA', fontSize: '2rem', fontWeight: 'bold' }}>
        Test del Design System
      </h1>
      <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
        Si ves este texto en colores del Design System, está funcionando.
      </p>
      
      <div style={{ 
        background: '#111315', 
        border: '1px solid #2A2E33', 
        borderRadius: '16px', 
        padding: '20px', 
        margin: '20px 0' 
      }}>
        <h2 style={{ color: '#0EA5E9', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Card de prueba
        </h2>
        <p style={{ color: '#9CA3AF' }}>
          Esta es una card con los estilos del Design System.
        </p>
      </div>
      
      <button style={{
        background: '#0EA5E9',
        color: '#001018',
        padding: '12px 18px',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '1rem'
      }}>
        Botón de prueba
      </button>
    </div>
  );
};
