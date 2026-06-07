import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.aboutUsData.findUnique({ where: { id: 'singleton' } });
  res.json({ success: true, data });
});

router.put('/', async (req, res) => {
  const data = await prisma.aboutUsData.upsert({
    where: { id: 'singleton' },
    update: req.body,
    create: { id: 'singleton', ...req.body },
  });
  res.json({ success: true, data });
});

export default router;
