import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRecentContacts, ContactSubmission } from '../../lib/firebaseService';
import { Button } from '../Button';

interface ContactListProps {
  className?: string;
}

export const ContactList: React.FC<ContactListProps> = ({ className = '' }) => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const recentContacts = await getRecentContacts(50);
      setContacts(recentContacts);
    } catch (err) {
      setError('No se pudieron cargar los contactos');
      console.error('Error loading contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getBudgetLabel = (budget: string) => {
    const budgetMap: Record<string, string> = {
      '549-1200': 'Desde 549,99€ (App Lite)',
      '1200-2500': '1.200€ - 2.500€',
      '2500-5500': '2.500€ - 5.500€',
      '5500-10000': '5.500€ - 10.000€',
      '6000-12000': '6.000€ - 12.000€ (App Deluxe)',
      '>12000': 'Más de 12.000€',
      'consultar': 'A consultar'
    };
    return budgetMap[budget] || budget;
  };

  const getProjectTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      'app': '🚀 App móvil',
      'web': '🌐 Web corporativa',
      'ecommerce': '🛒 Ecommerce',
      'landing': '⚡ Landing page',
      'sistema': '🔧 Sistema personalizado',
      'otro': '💡 Otro'
    };
    return typeMap[type] || type;
  };

  if (loading) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando contactos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={loadContacts} variant="primary">
          Reintentar
        </Button>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <p className="text-gray-600">No hay contactos registrados</p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Solicitudes de Contacto ({contacts.length})</h2>
        <Button onClick={loadContacts} variant="ghost" size="sm">
          Actualizar
        </Button>
      </div>

      <div className="grid gap-4">
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {contact.nombre}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(contact.fechaEnvio)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {getProjectTypeLabel(contact.tipo || '')}
                </p>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  {getBudgetLabel(contact.presupuesto || '')}
                </p>
                {contact.ip && (
                  <p className="text-xs text-gray-500">IP: {contact.ip}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Teléfono</p>
                <a 
                  href={`tel:${contact.telefono}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contact.telefono}
                </a>
              </div>
            </div>

            {contact.empresa && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Empresa</p>
                <p className="text-gray-900 dark:text-white">{contact.empresa}</p>
              </div>
            )}

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mensaje</p>
              <p className="text-gray-900 dark:text-white leading-relaxed">
                {contact.mensaje}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => window.open(`mailto:${contact.email}?subject=Respuesta a tu consulta - Waynox Studio`)}
                >
                  Responder
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(`tel:${contact.telefono}`)}
                >
                  Llamar
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
