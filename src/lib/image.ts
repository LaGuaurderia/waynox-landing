import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export interface ImageProcessingOptions {
  width: number;
  height: number;
  quality?: number;
  format?: 'png' | 'jpeg' | 'webp';
}

export interface LogoOverlayOptions {
  logoPath: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  padding: number;
  opacity: number;
  size: number; // Porcentaje del ancho de la imagen
}

/**
 * Redimensiona una imagen a las dimensiones especificadas
 * usando crop centrado para mantener la proporción
 */
export async function resizeToOg(
  buffer: Buffer,
  options: ImageProcessingOptions = { width: 1200, height: 630 }
): Promise<Buffer> {
  const { width, height, quality = 90, format = 'png' } = options;

  try {
    const image = sharp(buffer);
    
    // Obtener metadatos de la imagen original
    const metadata = await image.metadata();
    
    if (!metadata.width || !metadata.height) {
      throw new Error('No se pudieron obtener las dimensiones de la imagen');
    }

    // Calcular el crop para mantener proporción y centrar
    const aspectRatio = width / height;
    const imageAspectRatio = metadata.width / metadata.height;
    
    let cropWidth = metadata.width;
    let cropHeight = metadata.height;
    let cropX = 0;
    let cropY = 0;

    if (imageAspectRatio > aspectRatio) {
      // Imagen más ancha, crop horizontal
      cropWidth = Math.round(metadata.height * aspectRatio);
      cropX = Math.round((metadata.width - cropWidth) / 2);
    } else {
      // Imagen más alta, crop vertical
      cropHeight = Math.round(metadata.width / aspectRatio);
      cropY = Math.round((metadata.height - cropHeight) / 2);
    }

    return await image
      .extract({ left: cropX, top: cropY, width: cropWidth, height: cropHeight })
      .resize(width, height, { fit: 'fill' })
      .png({ quality })
      .toBuffer();
  } catch (error) {
    throw new Error(`Error al redimensionar imagen: ${error.message}`);
  }
}

/**
 * Aplica un overlay del logo a la imagen
 */
export async function overlayLogo(
  buffer: Buffer,
  options: LogoOverlayOptions
): Promise<Buffer> {
  const { logoPath, position, padding, opacity, size } = options;

  try {
    // Verificar que el logo existe
    if (!fs.existsSync(logoPath)) {
      console.warn(`⚠️  Logo no encontrado en ${logoPath}, continuando sin overlay`);
      return buffer;
    }

    const image = sharp(buffer);
    const logo = sharp(logoPath);
    
    // Obtener metadatos
    const imageMetadata = await image.metadata();
    const logoMetadata = await logo.metadata();
    
    if (!imageMetadata.width || !imageMetadata.height || !logoMetadata.width || !logoMetadata.height) {
      throw new Error('No se pudieron obtener las dimensiones de las imágenes');
    }

    // Calcular tamaño del logo (porcentaje del ancho de la imagen)
    const logoSize = Math.round(imageMetadata.width * (size / 100));
    const logoAspectRatio = logoMetadata.width / logoMetadata.height;
    const logoHeight = Math.round(logoSize / logoAspectRatio);

    // Redimensionar logo
    const resizedLogo = await logo
      .resize(logoSize, logoHeight, { fit: 'inside' })
      .png()
      .toBuffer();

    // Calcular posición del logo
    let logoX = padding;
    let logoY = padding;

    if (position.includes('right')) {
      logoX = imageMetadata.width - logoSize - padding;
    }
    if (position.includes('bottom')) {
      logoY = imageMetadata.height - logoHeight - padding;
    }

    // Crear composición
    const composite = [
      {
        input: resizedLogo,
        top: logoY,
        left: logoX,
        blend: 'over'
      }
    ];

    return await image
      .composite(composite)
      .png()
      .toBuffer();
  } catch (error) {
    throw new Error(`Error al aplicar overlay del logo: ${error.message}`);
  }
}

/**
 * Guarda un buffer de imagen como archivo PNG
 */
export async function savePng(
  buffer: Buffer,
  outputPath: string
): Promise<void> {
  try {
    // Crear directorio si no existe
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    await sharp(buffer)
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Imagen guardada en: ${outputPath}`);
  } catch (error) {
    throw new Error(`Error al guardar imagen: ${error.message}`);
  }
}

/**
 * Procesa una imagen completa: redimensiona y aplica logo
 */
export async function processCoverImage(
  buffer: Buffer,
  outputPath: string,
  logoPath?: string
): Promise<void> {
  try {
    // Redimensionar a 1200x630
    let processedBuffer = await resizeToOg(buffer, { width: 1200, height: 630 });

    // Aplicar logo si existe
    if (logoPath) {
      processedBuffer = await overlayLogo(processedBuffer, {
        logoPath,
        position: 'top-left',
        padding: 24,
        opacity: 0.9,
        size: 8 // 8% del ancho de la imagen
      });
    }

    // Guardar imagen procesada
    await savePng(processedBuffer, outputPath);
  } catch (error) {
    throw new Error(`Error al procesar imagen de portada: ${error.message}`);
  }
}
