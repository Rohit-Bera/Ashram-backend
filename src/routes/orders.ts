import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.post('/', async (req, res) => {
  const { userId, items, subtotal, couponCode, discount, total, shippingAddress } = req.body;
  if (!userId || !items || !items.length || !shippingAddress) {
    return res.status(400).json({ success: false, message: 'Incomplete order information' });
  }

  const [order] = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        id: `ord-${Math.floor(1000 + Math.random() * 9000)}`,
        userId,
        items,
        subtotal,
        couponCode,
        discount,
        total,
        shippingAddress,
        paymentStatus: 'Paid',
        orderStatus: 'Processing',
        trackingNumber: `TRK-VRN-${Math.floor(100000 + Math.random() * 900000)}`,
        orderDate: new Date().toISOString(),
      },
    });

    for (const item of items) {
      const product = await tx.product.findUnique({ where: { id: item.productId } });
      if (product) {
        const remaining = Math.max(0, product.stock - item.quantity);
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: remaining, isAvailable: remaining > 0 },
        });
      }
    }

    return [newOrder];
  });

  res.status(201).json({ success: true, data: order });
});

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const data = userId
    ? await prisma.order.findMany({ where: { userId: userId as string } })
    : await prisma.order.findMany();
  res.json({ success: true, data });
});

router.put('/:id/status', async (req, res) => {
  const existing = await prisma.order.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Order not found' });
  const updated = await prisma.order.update({
    where: { id: req.params.id },
    data: { orderStatus: req.body.orderStatus },
  });
  res.json({ success: true, data: updated });
});

export default router;
