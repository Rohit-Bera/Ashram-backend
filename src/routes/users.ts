import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.post('/:userId/wishlist', async (req, res) => {
  const { productId } = req.body;
  const user = await prisma.user.findUnique({ where: { id: req.params.userId } });
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });

  const already = user.wishlistProductIds.includes(productId);
  const updated = await prisma.user.update({
    where: { id: req.params.userId },
    data: {
      wishlistProductIds: already
        ? { set: user.wishlistProductIds.filter((id) => id !== productId) }
        : { push: productId },
    },
  });
  res.json({ success: true, wishlist: updated.wishlistProductIds });
});

router.post('/:userId/events', async (req, res) => {
  const { eventId } = req.body;
  const user = await prisma.user.findUnique({ where: { id: req.params.userId } });
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });

  const already = user.savedEventIds.includes(eventId);
  const updated = await prisma.user.update({
    where: { id: req.params.userId },
    data: {
      savedEventIds: already
        ? { set: user.savedEventIds.filter((id) => id !== eventId) }
        : { push: eventId },
    },
  });
  res.json({ success: true, savedEvents: updated.savedEventIds });
});

export default router;
