import { Router } from 'express';
import crypto from 'crypto';
import { upload } from '../middleware/multerConfig.js';
import { processImage } from '../services/imageProcessor.js';
import { uploadToR2 } from '../services/r2.js';
import type { ImagePreset } from '../services/imageProcessor.js';

const router = Router();

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No image file provided' });
  }

  const preset = (req.query.type as ImagePreset) || 'thumbnail';
  const validPresets: ImagePreset[] = ['hero', 'gallery', 'thumbnail', 'avatar'];
  const safePreset = validPresets.includes(preset) ? preset : 'thumbnail';

  const hex = crypto.randomBytes(8).toString('hex');
  const key = `uploads/${safePreset}/${Date.now()}-${hex}.webp`;

  try {
    const webpBuffer = await processImage(req.file.buffer, safePreset);
    const url = await uploadToR2(webpBuffer, key, 'image/webp');
    res.json({ success: true, url, key });
  } catch (err: any) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: 'Upload failed: ' + err.message });
  }
});

export default router;
