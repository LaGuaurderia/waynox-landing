import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLElement>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll('h2, h3, h4');
    const tocItems: TOCItem[] = Array.from(headingElements).map((element) => ({
      id: element.id || generateId(element.textContent || ''),
      text: element.textContent || '',
      level: parseInt(element.tagName.charAt(1)),
    }));

    setHeadings(tocItems);

    // Generar IDs si no existen
    headingElements.forEach((element, index) => {
      if (!element.id) {
        element.id = tocItems[index].id;
      }
    });
  }, [contentRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontrar la entrada que está más visible
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target;
          }
        });

        if (mostVisible) {
          setActiveId(mostVisible.id);
        }
      },
      { 
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Función adicional para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset para el navbar
      
      let currentSection = '';
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = id;
          }
        }
      });
      
      if (currentSection && currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings, activeId]);



  const generateId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Ajuste para el navbar
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.div
      ref={tocRef}
      className="block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Índice</h3>
        </div>

        <nav className="space-y-2">
          {headings.map((heading) => (
            <motion.button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full text-left px-3 py-2 rounded-md transition-all duration-200 text-sm
                ${activeId === heading.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }
                ${heading.level === 2 ? 'font-medium' : 'font-normal'}
                ${heading.level === 3 ? 'ml-4' : ''}
                ${heading.level === 4 ? 'ml-8' : ''}
              `}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {heading.text}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default TableOfContents;
