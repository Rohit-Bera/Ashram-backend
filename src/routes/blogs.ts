import { Router } from 'express';
import { prisma } from '../db/prisma.js';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await prisma.blog.findMany();
  res.json({ success: true, data });
});

router.post('/', async (req, res) => {
  const blog = await prisma.blog.create({
    data: {
      id: `blog-${Date.now()}`,
      publishDate: new Date().toISOString().split('T')[0],
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      author: req.body.author || 'Ashram Scribe',
      imageUrl: req.body.imageUrl || 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600',
      readTime: req.body.readTime || '5 min read',
    },
  });
  res.status(201).json({ success: true, data: blog });
});

router.put('/:id', async (req, res) => {
  const existing = await prisma.blog.findUnique({ where: { id: req.params.id } });
  if (!existing) return res.status(404).json({ success: false, message: 'Blog Article not found' });
  const updated = await prisma.blog.update({ where: { id: req.params.id }, data: req.body });
  res.json({ success: true, data: updated });
});

router.delete('/:id', async (req, res) => {
  await prisma.blog.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Blog Article deleted successfully' });
});

export default router;
