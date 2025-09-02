import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Buscar artículos..." 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <motion.div
        className={`
          relative flex items-center bg-gray-800 rounded-lg border-2 transition-all duration-200
          ${isFocused ? 'border-blue-500 bg-gray-700' : 'border-gray-600'}
        `}
        whileFocus={{ scale: 1.02 }}
      >
        <Search 
          className={`w-5 h-5 ml-4 transition-colors duration-200 ${
            isFocused ? 'text-blue-400' : 'text-gray-400'
          }`} 
        />
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
        />
        
        {value && (
          <motion.button
            onClick={() => onChange('')}
            className="p-2 mr-2 text-gray-400 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
      
      {/* Indicador de resultados */}
      {value && (
        <motion.div
          className="absolute -bottom-8 left-0 text-sm text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Buscando "{value}"...
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
