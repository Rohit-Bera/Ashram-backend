import { Router } from 'express';
import { upload } from '../middleware/multerConfig.js';
import { uploadToCloudinary } from '../services/cloudinary.js';
import type { ImagePreset } from '../services/cloudinary.js';

const router = Router();

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No image file provided' });
  }

  const preset = (req.query.type as ImagePreset) || 'thumbnail';
  const validPresets: ImagePreset[] = ['hero', 'gallery', 'thumbnail', 'avatar'];
  const safePreset = validPresets.includes(preset) ? preset : 'thumbnail';

  try {
    const { url, publicId } = await uploadToCloudinary(req.file.buffer, safePreset);
    res.json({ success: true, url, key: publicId });
  } catch (err: any) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: 'Upload failed: ' + err.message });
  }
});

export default router;
