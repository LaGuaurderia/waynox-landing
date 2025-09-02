import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
  const inputId = id ?? props.name ?? `input-${Math.random().toString(36).slice(2)}`
  return (
    <div className="space-y-2">
      <label 
        htmlFor={inputId} 
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input 
        id={inputId} 
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200
          bg-background text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          hover:border-border-hover
          ${error 
            ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
            : 'border-border'
          }
          ${className}
        `}
        aria-invalid={!!error} 
        aria-describedby={error ? `${inputId}-error` : undefined} 
        {...props} 
      />
      {error && (
        <span 
          id={`${inputId}-error`} 
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

export default Input


