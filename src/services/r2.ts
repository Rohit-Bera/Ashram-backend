import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';
import crypto from 'crypto';

export type R2Entity = 'gurus' | 'ashrams' | 'events' | 'products' | 'blogs' | 'testimonials' | 'about';

function getClient() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('R2 credentials not configured. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.');
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
}

export async function uploadToR2(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
  entity: R2Entity
): Promise<{ url: string; key: string }> {
  const bucket = process.env.R2_BUCKET_NAME;
  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, '');

  if (!bucket) throw new Error('R2_BUCKET_NAME is not set');
  if (!publicUrl) throw new Error('R2_PUBLIC_URL is not set');

  const ext = path.extname(originalName) || '';
  const mediaType = mimeType.startsWith('video/') ? 'videos' : 'images';
  const key = `${entity}/${mediaType}/${crypto.randomUUID()}${ext}`;

  const client = getClient();
  await client.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: buffer,
    ContentType: mimeType,
  }));

  return { url: `${publicUrl}/${key}`, key };
}
