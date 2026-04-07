import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import { explainBill } from './lib/explainBill.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8787;

const app = express();
app.use(cors());
app.use(express.json({ limit: '512kb' }));

app.post('/api/explain', async (req, res) => {
  const result = await explainBill(req.body?.billText);
  if (!result.ok) {
    return res.status(result.status).json({ error: result.error });
  }
  res.json({ explanation: result.explanation });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App ready: open http://localhost:${PORT} in your browser`);
});
