import React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: { label: string; value: string }[]
}

const Select: React.FC<SelectProps> = ({ label, id, error, options, className = '', ...props }) => {
  const selectId = id ?? props.name ?? `select-${Math.random().toString(36).slice(2)}`
  return (
    <div className="space-y-2">
      <label 
        htmlFor={selectId} 
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <div className="relative">
        <select 
          id={selectId} 
          className={`
            w-full px-3 sm:px-4 py-3 rounded-lg border transition-all duration-200 appearance-none
            bg-background text-foreground text-base
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            hover:border-border-hover cursor-pointer
            ${error 
              ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
              : 'border-border'
            }
            ${className}
          `}
          aria-invalid={!!error} 
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          <option value="">Selecciona una opción...</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <span 
          id={`${selectId}-error`} 
          role="alert" 
          className="block text-sm text-red-500 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </span>
      )}
    </div>
  )
}

export default Select


