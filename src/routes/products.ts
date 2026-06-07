import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.product.findMany({ include: { reviews: true } });
  res.json({ success: true, count: data.length, data });
});

router.post('/', async (req, res) => {
  const product = await prisma.product.create({
    data: { id: `p-${Date.now()}`, rating: 5, ...req.body },
    include: { reviews: true },
  });
  res.status(201).json({ success: true, data: product });
});

router.put('/:id', async (req, res) => {
  const existing = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Product not found' });
  const updated = await prisma.product.update({
    where: { id: req.params.id },
    data: req.body,
    include: { reviews: true },
  });
  res.json({ success: true, data: updated });
});

router.delete('/:id', async (req, res) => {
  await prisma.product.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Product deleted successfully' });
});

router.post('/:id/reviews', async (req, res) => {
  const existing = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Product not found' });

  await prisma.productReview.create({
    data: {
      id: `rev-${Date.now()}`,
      productId: req.params.id,
      userName: req.body.userName || 'Devotee',
      rating: req.body.rating || 5,
      comment: req.body.comment || 'Radhe Radhe! Very beautiful item.',
      date: new Date().toISOString().split('T')[0],
    },
  });

  const reviews = await prisma.productReview.findMany({ where: { productId: req.params.id } });
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: { rating: parseFloat(avg.toFixed(1)) },
    include: { reviews: true },
  });

  res.status(201).json({ success: true, data: product });
});

export default router;
