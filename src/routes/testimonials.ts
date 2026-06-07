import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.testimonial.findMany();
  res.json({ success: true, data });
});

export default router;
