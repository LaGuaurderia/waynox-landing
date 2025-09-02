import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path: string
  icon?: React.ReactNode
}

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/', icon: <Home size={16} /> }
  ]

  if (segments.length === 0) return breadcrumbs

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Mapear rutas a nombres legibles
    const routeNames: Record<string, string> = {
      'servicios': 'Servicios',
      'proyectos': 'Proyectos',
      'precios': 'Precios',
      'nosotros': 'Nosotros',
      'blog': 'Blog',
      'contacto': 'Contacto',
      'privacidad': 'Privacidad',
      'terminos': 'Términos y Condiciones'
    }

    const label = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    breadcrumbs.push({
      label,
      path: currentPath
    })
  })

  return breadcrumbs
}

interface BreadcrumbsProps {
  className?: string
  showHomeIcon?: boolean
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  className = '', 
  showHomeIcon = true 
}) => {
  const location = useLocation()
  const breadcrumbs = getBreadcrumbs(location.pathname)

  if (breadcrumbs.length <= 1) return null

  return (
    <motion.nav
      className={`breadcrumbs ${className}`}
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                size={16} 
                className="mx-2 text-brand-gray-light" 
                aria-hidden="true"
              />
            )}
            
            {index === breadcrumbs.length - 1 ? (
              // Último elemento (página actual)
              <span 
                className="text-brand-blue font-medium"
                aria-current="page"
              >
                {showHomeIcon && index === 0 ? item.icon : null}
                <span className={showHomeIcon && index === 0 ? 'ml-2' : ''}>
                  {item.label}
                </span>
              </span>
            ) : (
              // Enlaces navegables
              <NavLink
                to={item.path}
                className="flex items-center text-brand-gray-light hover:text-white transition-colors duration-200 hover:underline"
                aria-label={`Ir a ${item.label}`}
              >
                {showHomeIcon && index === 0 ? item.icon : null}
                <span className={showHomeIcon && index === 0 ? 'ml-2' : ''}>
                  {item.label}
                </span>
              </NavLink>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  )
}

export default Breadcrumbs
