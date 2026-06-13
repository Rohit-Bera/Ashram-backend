import { google } from 'googleapis';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';

export type DriveEntity = 'gurus' | 'ashrams' | 'events' | 'products' | 'blogs' | 'testimonials' | 'about';

function loadCredentials() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  }
  if (process.env.GOOGLE_SERVICE_ACCOUNT_PATH) {
    return JSON.parse(fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_PATH, 'utf-8'));
  }
  throw new Error('Google Drive credentials not configured. Set GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_PATH.');
}

const auth = new google.auth.GoogleAuth({
  credentials: loadCredentials(),
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const drive = google.drive({ version: 'v3', auth });

// Cache folder IDs to avoid repeated Drive API lookups
const folderCache = new Map<string, string>();

async function ensureFolder(parentId: string, name: string): Promise<string> {
  const cacheKey = `${parentId}/${name}`;
  const cached = folderCache.get(cacheKey);
  if (cached) return cached;

  const { data } = await drive.files.list({
    q: `mimeType='application/vnd.google-apps.folder' and name='${name}' and '${parentId}' in parents and trashed=false`,
    fields: 'files(id)',
    spaces: 'drive',
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
  });

  let folderId = data.files?.[0]?.id;
  if (!folderId) {
    const { data: created } = await drive.files.create({
      requestBody: { name, mimeType: 'application/vnd.google-apps.folder', parents: [parentId] },
      fields: 'id',
      supportsAllDrives: true,
    });
    folderId = created.id!;
  }

  folderCache.set(cacheKey, folderId);
  return folderId;
}

async function getEntityFolder(entity: DriveEntity, mediaType: 'images' | 'videos'): Promise<string> {
  const rootId = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID;
  if (!rootId) throw new Error('GOOGLE_DRIVE_ROOT_FOLDER_ID is not set');
  const entityFolderId = await ensureFolder(rootId, entity);
  return ensureFolder(entityFolderId, mediaType);
}

export async function uploadToGoogleDrive(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
  entity: DriveEntity
): Promise<{ url: string; fileId: string }> {
  const mediaType = mimeType.startsWith('video/') ? 'videos' : 'images';
  const folderId = await getEntityFolder(entity, mediaType);
  const safeName = path.basename(decodeURIComponent(originalName));

  const { data } = await drive.files.create({
    requestBody: { name: safeName, parents: [folderId], mimeType },
    media: { mimeType, body: Readable.from(buffer) },
    fields: 'id',
    supportsAllDrives: true,
  });

  const fileId = data.id!;

  await drive.permissions.create({
    fileId,
    requestBody: { role: 'reader', type: 'anyone' },
    supportsAllDrives: true,
  });

  const url = mimeType.startsWith('video/')
    ? `https://drive.google.com/file/d/${fileId}/view`
    : `https://drive.google.com/uc?export=view&id=${fileId}`;

  return { url, fileId };
}
