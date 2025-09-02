import { config } from 'dotenv';

// Cargar variables de entorno desde .env
config();

export interface EnvConfig {
  OPENAI_API_KEY: string;
  OPENAI_MODEL?: string;
  OPENAI_QUALITY?: 'standard' | 'hd';
  OPENAI_STYLE?: 'vivid' | 'natural';
}

function validateEnv(): EnvConfig {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  
  if (!OPENAI_API_KEY) {
    throw new Error(
      'OPENAI_API_KEY no está definida en las variables de entorno. ' +
      'Crea un archivo .env basado en env.example y añade tu API key.'
    );
  }

  return {
    OPENAI_API_KEY,
    OPENAI_MODEL: process.env.OPENAI_MODEL || 'dall-e-3',
    OPENAI_QUALITY: (process.env.OPENAI_QUALITY as 'standard' | 'hd') || 'standard',
    OPENAI_STYLE: (process.env.OPENAI_STYLE as 'vivid' | 'natural') || 'vivid',
  };
}

/**
 * Valida el entorno solo si se necesita la API key
 * Útil para modo dry-run
 */
export function validateEnvForApi(): EnvConfig {
  return validateEnv();
}

// Solo exportar la función, no ejecutar automáticamente
export const env = process.env.OPENAI_API_KEY ? validateEnv() : null;
