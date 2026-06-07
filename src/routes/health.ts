import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/', (_req, res) => {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  res.json({ status: 'ok', uploadDirExists: fs.existsSync(uploadsDir) });
});

export default router;
