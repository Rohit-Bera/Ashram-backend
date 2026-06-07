import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';
import fs from 'fs';

let r2Client: S3Client | null = null;

function getR2Client(): S3Client | null {
  if (!process.env.R2_ACCOUNT_ID || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    return null;
  }
  if (!r2Client) {
    r2Client = new S3Client({
      region: 'auto',
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
  }
  return r2Client;
}

export async function uploadToR2(buffer: Buffer, key: string, contentType: string = 'image/webp'): Promise<string> {
  const client = getR2Client();

  if (!client) {
    // Dev fallback: write to local uploads dir
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const localFilename = key.replace(/\//g, '-');
    const localPath = path.join(uploadsDir, localFilename);
    fs.writeFileSync(localPath, buffer);
    return `/uploads/${localFilename}`;
  }

  await client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  }));

  return `${process.env.R2_PUBLIC_URL}/${key}`;
}
