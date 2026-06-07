import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.guru.findMany();
  res.json({ success: true, count: data.length, data });
});

router.post('/', async (req, res) => {
  const guru = await prisma.guru.create({
    data: { id: `g-${Date.now()}`, ...req.body },
  });
  res.status(201).json({ success: true, data: guru });
});

router.put('/:id', async (req, res) => {
  const existing = await prisma.guru.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Guru not found' });
  const updated = await prisma.guru.update({ where: { id: req.params.id }, data: req.body });
  res.json({ success: true, data: updated });
});

router.delete('/:id', async (req, res) => {
  await prisma.guru.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Guru deleted successfully' });
});

export default router;
