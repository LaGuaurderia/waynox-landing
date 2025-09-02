import React from 'react';
import { motion } from 'framer-motion';
import { BlogCategory } from '../../lib/blog.types';

interface CategoryNavProps {
  categories: BlogCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {/* Categoría "Todos" */}
        <motion.button
          onClick={() => onCategoryChange('Todos')}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-200
            ${selectedCategory === 'Todos'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Todos
        </motion.button>

        {/* Categorías específicas */}
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-200
              ${selectedCategory === category.id
                ? 'text-white shadow-lg scale-105'
                : 'text-gray-300 hover:text-white'
              }
            `}
            style={{
              backgroundColor: selectedCategory === category.id 
                ? category.color 
                : 'rgb(55 65 81)' // gray-700
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: selectedCategory === category.id 
                ? category.color 
                : 'rgb(75 85 99)' // gray-600
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
