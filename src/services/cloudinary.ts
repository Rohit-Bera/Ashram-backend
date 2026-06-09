import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PRESETS = {
  hero:      { width: 1920, height: 1080, crop: 'limit', quality: 85 },
  gallery:   { width: 1200, height: 900,  crop: 'limit', quality: 82 },
  thumbnail: { width: 600,  height: 600,  crop: 'fill',  quality: 80 },
  avatar:    { width: 200,  height: 200,  crop: 'fill',  quality: 75 },
} as const;

export type ImagePreset = keyof typeof PRESETS;

export async function uploadToCloudinary(
  buffer: Buffer,
  preset: ImagePreset = 'thumbnail'
): Promise<{ url: string; publicId: string }> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: `ashram/${preset}`,
        format: 'webp',
        transformation: [PRESETS[preset]],
        resource_type: 'image',
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error('Cloudinary upload returned no result'));
          return;
        }
        resolve({ url: result.secure_url, publicId: result.public_id });
      }
    ).end(buffer);
  });
}
