import React from 'react';
import { ContactList } from '../components/admin/ContactList';
import SEO from '../components/SEO';
import Section from '../components/Section';

const Admin: React.FC = () => {
  return (
    <>
      <SEO 
        title="Administración - Waynox Studio" 
        description="Panel de administración para gestionar solicitudes de contacto"
        noindex={true}
      />
      
      <Section className="py-8 md:py-10">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gestiona las solicitudes de contacto recibidas a través del formulario
              </p>
            </div>
            
            <ContactList />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Admin;
