import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.event.findMany();
  res.json({ success: true, count: data.length, data });
});

router.post('/', async (req, res) => {
  const event = await prisma.event.create({
    data: { id: `ev-${Date.now()}`, registrationsCount: 0, ...req.body },
  });
  res.status(201).json({ success: true, data: event });
});

router.put('/:id', async (req, res) => {
  const existing = await prisma.event.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Event not found' });
  const updated = await prisma.event.update({ where: { id: req.params.id }, data: req.body });
  res.json({ success: true, data: updated });
});

router.post('/:id/register', async (req, res) => {
  const event = await prisma.event.findUnique({ where: { id: req.params.id } });
  if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
  if (event.availableTickets <= 0) {
    return res.status(400).json({ success: false, message: 'Event is fully booked' });
  }
  const updated = await prisma.event.update({
    where: { id: req.params.id },
    data: { availableTickets: { decrement: 1 }, registrationsCount: { increment: 1 } },
  });
  res.json({ success: true, data: updated });
});

router.delete('/:id', async (req, res) => {
  await prisma.event.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Event deleted successfully' });
});

export default router;
