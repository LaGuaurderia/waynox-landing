import React, { useState, useRef } from 'react'
import { Button } from '../Button'

type Status = "idle" | "loading" | "success" | "error";

// Obtener el endpoint desde las variables de entorno
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "https://script.google.com/macros/s/AKfycbyhkObe0Jmd3IJdHB8Dc9ztRqWpXqZgfhoTlNxuB8S4PQc0gCV6ru2UNQO17B0jFRFEzg/exec";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [company, setCompany] = useState<string>(""); // Honeypot
  const formRef = useRef<HTMLFormElement>(null);

  // Validar que el endpoint esté configurado
  if (!ENDPOINT || ENDPOINT.includes('TU_SCRIPT_ID_AQUI')) {
    console.error('❌ VITE_CONTACT_ENDPOINT no está configurado correctamente');
    return (
      <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
        <p className="text-red-800 dark:text-red-200 font-medium">
          Error de configuración: La variable VITE_CONTACT_ENDPOINT no está configurada.
        </p>
        <p className="text-red-600 dark:text-red-300 text-sm mt-1">
          Por favor, configura la variable de entorno VITE_CONTACT_ENDPOINT en tu archivo .env.local
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: si el bot rellena "company", abortar
    if (company.trim() !== "") {
      setStatus("success"); // simulamos éxito pero no enviamos
      form.reset();
      return;
    }

    // Validaciones mínimas
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Por favor, completa los campos obligatorios.");
      return;
    }

    setStatus("loading");

    try {
      // URLSearchParams evita preflight/CORS con Apps Script
      const params = new URLSearchParams();
      fd.forEach((v, k) => params.append(k, String(v)));

      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: params,
      });

      const text = await res.text();
      // tu script devuelve JSON con ok:true; comprobamos de forma segura
      if (res.ok && /"ok"\s*:\s*true/.test(text)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg("No se pudo enviar. Inténtalo más tarde.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error de red. Revisa tu conexión e inténtalo de nuevo.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
      >
        {/* Honeypot oculto */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Nombre */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Nombre *
          </label>
          <input 
            name="name" 
            required 
            placeholder="Tu nombre completo"
            className="w-full px-3 sm:px-4 py-3 rounded-lg border transition-all duration-200 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-border-hover text-base border-border"
            autoComplete="name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full px-3 sm:px-4 py-3 rounded-lg border transition-all duration-200 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-border-hover text-base border-border"
            autoComplete="email"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Teléfono (opcional)
          </label>
          <input 
            name="phone" 
            type="tel"
            placeholder="+34 600 000 000"
            className="w-full px-3 sm:px-4 py-3 rounded-lg border transition-all duration-200 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-border-hover text-base border-border"
            autoComplete="tel"
          />
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Mensaje *
          </label>
          <textarea
            name="message"
            required
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={5}
            className="w-full px-3 sm:px-4 py-3 rounded-lg border transition-all duration-200 resize-none bg-background text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-border-hover border-border"
          />
        </div>

        {/* Botón de envío */}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
        </Button>

        {/* Mensaje de estado */}
        <div aria-live="polite" className="min-h-[20px] text-center">
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400 m-0 font-medium">
              ¡Enviado! Te contactaremos en breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 m-0 font-medium">
              {errorMsg || "Ha ocurrido un error."}
            </p>
          )}
        </div>
      </form>
      
      {/* Información adicional */}
      <p className="text-xs text-muted-foreground mt-4 text-center">
        * Campos obligatorios
      </p>
    </div>
  )
}

export default ContactForm
