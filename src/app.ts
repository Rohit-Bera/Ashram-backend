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

  app.get("/", ((_req, res) => {
    res.status(200).json({ message: `Server is running on port ${process.env.PORT || 3001}` });
  }));

  app.get("/health", ((_, res) => {
    try{

      return res.status(200).json({ message: "server is running fine!, health-check passed."})

    }catch(err: any){
      res.status(500).json({error: err.message})
    }
  }))

  // CORS
  app.use((_req, res, next) => {
    const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
    const origin = _req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (_req.method === 'OPTIONS') return res.sendStatus(200);
    next();
  });

  app.use('/api', apiRouter);

  app.use(errorHandler);

  return app;
}
