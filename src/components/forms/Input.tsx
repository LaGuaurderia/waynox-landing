import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, id, error, ...props }) => {
  const inputId = id ?? props.name ?? `input-${Math.random().toString(36).slice(2)}`
  return (
    <div style={{ display: 'grid', gap: 6 }}>
      <label htmlFor={inputId} style={{ fontWeight: 600 }}>{label}</label>
      <input id={inputId} className="card" style={{ padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--color-border)' }} aria-invalid={!!error} aria-describedby={error ? `${inputId}-error` : undefined} {...props} />
      {error && <span id={`${inputId}-error`} role="alert" style={{ color: 'crimson', fontSize: 12 }}>{error}</span>}
    </div>
  )
}

export default Input


