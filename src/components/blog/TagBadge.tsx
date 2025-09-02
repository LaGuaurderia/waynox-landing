import React from 'react';
import { motion } from 'framer-motion';

interface TagBadgeProps {
  tag: string;
  onClick?: () => void;
  isSelected?: boolean;
  variant?: 'default' | 'selectable';
}

const TagBadge: React.FC<TagBadgeProps> = ({ 
  tag, 
  onClick, 
  isSelected = false, 
  variant = 'default' 
}) => {
  const baseClasses = `
    inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
    transition-all duration-200 cursor-pointer
    ${variant === 'selectable' ? 'hover:scale-105' : ''}
  `;

  const variantClasses = {
    default: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
    selectable: isSelected 
      ? 'bg-blue-600 text-white shadow-lg' 
      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <motion.span
      className={classes}
      onClick={onClick}
      whileHover={{ scale: variant === 'selectable' ? 1.05 : 1 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {tag}
    </motion.span>
  );
};

export default TagBadge;
