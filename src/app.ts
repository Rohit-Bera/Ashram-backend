import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export function createApp() {
  const app = express();

  app.use(express.json({ limit: '12mb' }));
  app.use(express.urlencoded({ limit: '12mb', extended: true }));

  // CORS for frontend dev server
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (_req.method === 'OPTIONS') return res.sendStatus(200);
    next();
  });

  app.use('/api', apiRouter);

  // Production: serve built frontend
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(process.cwd(), '..', 'frontend', 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.use(errorHandler);

  return app;
}
