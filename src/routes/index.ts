import { Router } from 'express';
import healthRouter from './health.js';
import uploadRouter from './upload.js';
import gurusRouter from './gurus.js';
import ashramsRouter from './ashrams.js';
import eventsRouter from './events.js';
import productsRouter from './products.js';
import blogsRouter from './blogs.js';
import homepageRouter from './homepage.js';
import aboutRouter from './about.js';
import testimonialsRouter from './testimonials.js';
import authRouter from './auth.js';
import usersRouter from './users.js';
import ordersRouter from './orders.js';
import chatRouter from './chat.js';
import languagesRouter from './languages.js';
import translationsRouter from './translations.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/upload', uploadRouter);
router.use('/gurus', gurusRouter);
router.use('/ashrams', ashramsRouter);
router.use('/events', eventsRouter);
router.use('/products', productsRouter);
router.use('/blogs', blogsRouter);
router.use('/homepage', homepageRouter);
router.use('/about', aboutRouter);
router.use('/testimonials', testimonialsRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/chat', chatRouter);
router.use('/languages', languagesRouter);
router.use('/translations', translationsRouter);

export default router;
