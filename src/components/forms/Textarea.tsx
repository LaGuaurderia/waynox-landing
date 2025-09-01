import React from 'react'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

const Textarea: React.FC<TextareaProps> = ({ label, id, error, ...props }) => {
  const textareaId = id ?? props.name ?? `textarea-${Math.random().toString(36).slice(2)}`
  return (
    <div style={{ display: 'grid', gap: 6 }}>
      <label htmlFor={textareaId} style={{ fontWeight: 600 }}>{label}</label>
      <textarea id={textareaId} className="card" style={{ padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--color-border)', minHeight: 120 }} aria-invalid={!!error} aria-describedby={error ? `${textareaId}-error` : undefined} {...props} />
      {error && <span id={`${textareaId}-error`} role="alert" style={{ color: 'crimson', fontSize: 12 }}>{error}</span>}
    </div>
  )
}

export default Textarea


