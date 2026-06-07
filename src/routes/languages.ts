import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../../data/languages.json');

const DEFAULT_LANGUAGES = [
  { code: 'en', label: 'English', enabled: true },
  { code: 'hi', label: 'हिन्दी', enabled: true },
  { code: 'gu', label: 'ગુજરાતી', enabled: true },
  { code: 'bn', label: 'বাংলা', enabled: true }
];

function readLanguages() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch (_e) {}
  return DEFAULT_LANGUAGES;
}

function writeLanguages(data: unknown) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const router = Router();

router.get('/', (_req, res) => {
  res.json({ success: true, data: readLanguages() });
});

router.put('/', (req, res) => {
  const langs = req.body;
  writeLanguages(langs);
  res.json({ success: true, data: langs });
});

export default router;
