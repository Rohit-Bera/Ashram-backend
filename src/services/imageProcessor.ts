import sharp from 'sharp';

export type ImagePreset = 'hero' | 'gallery' | 'thumbnail' | 'avatar';

interface PresetConfig {
  width: number;
  height: number;
  quality: number;
  fit: 'inside' | 'cover' | 'contain' | 'fill' | 'outside';
}

const PRESETS: Record<ImagePreset, PresetConfig> = {
  hero:      { width: 1920, height: 1080, quality: 85, fit: 'inside' },
  gallery:   { width: 1200, height: 900,  quality: 82, fit: 'inside' },
  thumbnail: { width: 600,  height: 600,  quality: 80, fit: 'cover'  },
  avatar:    { width: 200,  height: 200,  quality: 75, fit: 'cover'  },
};

export async function processImage(inputBuffer: Buffer, preset: ImagePreset = 'thumbnail'): Promise<Buffer> {
  const { width, height, quality, fit } = PRESETS[preset];
  return sharp(inputBuffer)
    .rotate()
    .resize({ width, height, fit, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toBuffer();
}
