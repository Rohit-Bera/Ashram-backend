import 'dotenv/config';
import { createApp } from './app.js';
import { prisma } from './db/prisma.js';

const PORT = parseInt(process.env.PORT || '3001', 10);

async function main() {
  await prisma.$connect();
  const app = createApp();
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✨ Ashram backend running on port ${PORT}`);
  });
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});

process.on('SIGINT', async () => { await prisma.$disconnect(); process.exit(0); });
process.on('SIGTERM', async () => { await prisma.$disconnect(); process.exit(0); });
