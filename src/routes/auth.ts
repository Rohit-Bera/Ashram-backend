import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../db/prisma.js';

const router = Router();

router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required' });
  }
  const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (existing) {
    return res.status(409).json({ success: false, message: 'Email already registered' });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      id: `usr-${Date.now()}`,
      name,
      email: email.toLowerCase(),
      phone,
      role: 'Devotee',
      passwordHash: hash,
      savedEventIds: [],
      wishlistProductIds: [],
    },
  });
  const { passwordHash: _, ...publicUser } = user;
  res.status(201).json({ success: true, data: publicUser, message: 'Registration successful' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!user || !user.passwordHash) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  const { passwordHash: _, ...publicUser } = user;
  res.json({ success: true, data: publicUser });
});

router.put('/profile/:id', async (req, res) => {
  const existing = await prisma.user.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'User profile not found' });
  const { passwordHash: _ignored, ...safeBody } = req.body;
  const updated = await prisma.user.update({ where: { id: req.params.id }, data: safeBody });
  const { passwordHash: _, ...publicUser } = updated;
  res.json({ success: true, data: publicUser });
});

export default router;
