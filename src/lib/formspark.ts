export type ContactPayload = {
  nombre: string
  email: string
  telefono?: string
  tipo: string
  presupuesto: string
  mensaje: string
}

export async function submitToFormspark(payload: ContactPayload): Promise<{ ok: boolean }> {
  const formId = import.meta.env.VITE_FORMSPARK_ID
  if (!formId) {
    await new Promise((r) => setTimeout(r, 600))
    console.log('[MOCK FORMSPARK]', payload)
    return { ok: true }
  }
  const res = await fetch(`https://submit-form.com/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  return { ok: res.ok }
}


