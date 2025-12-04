import Image from 'next/image';
import path from 'path';
import fs from 'fs';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

// Generate blur placeholder for better loading
function getBlurDataURL(imagePath: string): string | undefined {
  // For local development, skip blur generation
  if (process.env.NODE_ENV !== 'production') return undefined;
  
  try {
    // Try to use sharp for blur generation
    const sharp = require('sharp');
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      const { data } = sharp(imageBuffer)
        .resize(20) // Small blur placeholder
        .webp({ quality: 20 })
        .toBuffer({ resolveWithObject: { data: true } });
      
      return `data:image/webp;base64,${data.toString('base64')}`;
    }
  } catch {
    // Fallback if sharp is not available
    return undefined;
  }
}

// Optimized image component
export function OptimizedImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600,
  priority = false,
  className = '' 
}: OptimizedImageProps) {
  const blurDataURL = getBlurDataURL(src);
  
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="rounded-lg object-cover transition-transform hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
    </div>
  );
}

// Get image dimensions for optimization
export function getImageDimensions(imagePath: string): { width: number; height: number } | null {
  try {
    const sharp = require('sharp');
    if (fs.existsSync(imagePath)) {
      const metadata = require('sharp')(imagePath).metadata();
      return {
        width: metadata.width || 800,
        height: metadata.height || 600
      };
    }
  } catch {
    return null;
  }
}

// Generate responsive image sources
export function getResponsiveImageSources(basePath: string, slug: string) {
  const extensions = ['.webp', '.jpg', '.png'];
  const sizes = [384, 640, 828, 1200, 1920];
  
  return extensions.map(ext => 
    sizes.map(size => ({
      src: `${basePath}${slug}-${size}${ext}`,
      sizes: `${size}w`
    }))
  ).flat();
}