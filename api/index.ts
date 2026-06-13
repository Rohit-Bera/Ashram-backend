import 'dotenv/config';
import { createApp } from '../src/app.js';
import { prisma } from '../src/db/prisma.js';

const app = createApp();
let connected = false;

export default async function handler(req: any, res: any) {
  if (!connected) {
    try {
      await prisma.$connect();
      connected = true;
    } catch (e) {
      console.error('Prisma connect error:', e);
    }
  }
  app(req, res);
}
