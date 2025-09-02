import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText } from 'lucide-react';

interface EmptyStateProps {
  searchTerm?: string;
  category?: string;
  tags?: string[];
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, category, tags }) => {
  const hasFilters = searchTerm || category || (tags && tags.length > 0);

  return (
    <motion.div
      className="text-center py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        {hasFilters ? (
          <Search className="w-16 h-16 mx-auto text-gray-500 mb-4" />
        ) : (
          <FileText className="w-16 h-16 mx-auto text-gray-500 mb-4" />
        )}
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">
        {hasFilters ? 'No se encontraron resultados' : 'No hay artículos disponibles'}
      </h3>

      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        {hasFilters ? (
          <>
            No encontramos artículos que coincidan con tu búsqueda.
            {searchTerm && (
              <span className="block mt-2">
                <strong>Término:</strong> "{searchTerm}"
              </span>
            )}
            {category && category !== 'Todos' && (
              <span className="block mt-2">
                <strong>Categoría:</strong> {category}
              </span>
            )}
            {tags && tags.length > 0 && (
              <span className="block mt-2">
                <strong>Tags:</strong> {tags.join(', ')}
              </span>
            )}
          </>
        ) : (
          'Pronto tendremos contenido interesante para ti. ¡Vuelve pronto!'
        )}
      </p>

      {hasFilters && (
        <motion.button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Limpiar filtros
        </motion.button>
      )}
    </motion.div>
  );
};

export default EmptyState;
