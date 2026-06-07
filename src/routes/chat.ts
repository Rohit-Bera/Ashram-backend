import { Router } from 'express';
import { generateSpiritualResponse } from '../services/chatService.js';

const router = Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ success: false, message: 'Message is required' });
  }
  const text = generateSpiritualResponse(message);
  res.json({ success: true, text, mode: 'spiritual-guide' });
});

export default router;
