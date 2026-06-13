import { Router } from 'express';
import { upload } from '../middleware/multerConfig.js';
import { uploadToR2 } from '../services/r2.js';
import type { R2Entity } from '../services/r2.js';

const router = Router();

const VALID_ENTITIES: R2Entity[] = ['gurus', 'ashrams', 'events', 'products', 'blogs', 'testimonials', 'about'];

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file provided' });
  }

  const entity = req.query.entity as R2Entity;
  if (!entity || !VALID_ENTITIES.includes(entity)) {
    return res.status(400).json({ success: false, message: `Missing or invalid ?entity= param. Must be one of: ${VALID_ENTITIES.join(', ')}` });
  }

  try {
    const { url, key } = await uploadToR2(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      entity
    );
    res.json({ success: true, url, key });
  } catch (err: any) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: 'Upload failed: ' + err.message });
  }
});

export default router;
