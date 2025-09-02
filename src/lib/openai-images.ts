import OpenAI from 'openai';
import pRetry from 'p-retry';
import { validateEnvForApi } from './env';

let openai: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openai) {
    const env = validateEnvForApi();
    openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
  }
  return openai;
}

export interface ImageGenerationOptions {
  prompt: string;
  size?: '1024x1024' | '1792x1024';
  quality?: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
}

export interface ImageGenerationResult {
  buffer: Buffer;
  url: string;
  revisedPrompt?: string;
}

/**
 * Genera una imagen usando OpenAI DALL-E
 * @param options Opciones de generación
 * @returns Buffer de la imagen y metadatos
 */
export async function generateCoverImage(
  options: ImageGenerationOptions
): Promise<ImageGenerationResult> {
  const { prompt, size = '1792x1024', quality = 'standard', style = 'vivid' } = options;

  const generateWithRetry = async (): Promise<ImageGenerationResult> => {
    try {
      console.log(`🎨 Generando imagen con prompt: ${prompt.substring(0, 100)}...`);
      
      const openaiClient = getOpenAI();
      const response = await openaiClient.images.generate({
        model: 'dall-e-3',
        prompt,
        size,
        quality,
        style,
        n: 1,
      });

      const imageUrl = response.data?.[0]?.url;
      if (!imageUrl) {
        throw new Error('No se recibió URL de imagen de OpenAI');
      }

      // Descargar la imagen
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Error al descargar imagen: ${imageResponse.statusText}`);
      }

      const arrayBuffer = await imageResponse.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return {
        buffer,
        url: imageUrl,
        revisedPrompt: response.data?.[0]?.revised_prompt,
      };
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        if (error.status === 429) {
          throw new Error('Rate limit alcanzado. Espera un momento antes de reintentar.');
        }
        if (error.status === 400) {
          throw new Error(`Prompt rechazado por OpenAI: ${error.message}`);
        }
      }
      throw error;
    }
  };

  try {
    return await pRetry(generateWithRetry, {
      retries: 3,
      onFailedAttempt: (error) => {
        console.warn(
          `⚠️  Intento ${error.attemptNumber} falló. Reintentando...`
        );
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Error al generar imagen después de 3 intentos: ${errorMessage}`);
  }
}
