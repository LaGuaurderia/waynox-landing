import React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: { label: string; value: string }[]
}

const Select: React.FC<SelectProps> = ({ label, id, error, options, ...props }) => {
  const selectId = id ?? props.name ?? `select-${Math.random().toString(36).slice(2)}`
  return (
    <div style={{ display: 'grid', gap: 6 }}>
      <label htmlFor={selectId} style={{ fontWeight: 600 }}>{label}</label>
      <select id={selectId} className="card" style={{ padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--color-border)' }} aria-invalid={!!error} aria-describedby={error ? `${selectId}-error` : undefined} {...props}>
        <option value="">Selecciona...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <span id={`${selectId}-error`} role="alert" style={{ color: 'crimson', fontSize: 12 }}>{error}</span>}
    </div>
  )
}

export default Select


