import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.ashram.findMany();
  res.json({ success: true, count: data.length, data });
});

router.post('/', async (req, res) => {
  const ashram = await prisma.ashram.create({
    data: { id: `ash-${Date.now()}`, ...req.body },
  });
  res.status(201).json({ success: true, data: ashram });
});

router.put('/:id', async (req, res) => {
  const existing = await prisma.ashram.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Ashram not found' });
  const updated = await prisma.ashram.update({ where: { id: req.params.id }, data: req.body });
  res.json({ success: true, data: updated });
});

router.delete('/:id', async (req, res) => {
  await prisma.ashram.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Ashram deleted successfully' });
});

export default router;
