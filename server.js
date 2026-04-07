import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8787;
const MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';

const app = express();
app.use(cors());
app.use(express.json({ limit: '512kb' }));

const SYSTEM_PROMPT = `You help people understand medical bills in plain language. Explain line items, common codes (CPT/HCPCS when mentioned), charges vs adjustments, insurance terms, and what someone might want to verify or ask their provider or insurer about.

Be clear, organized, and cautious: you are not reviewing a specific person's medical record—only the text they pasted. If something is unclear or missing from the bill text, say so. Use short sections and bullet points when helpful.`;

app.post('/api/explain', async (req, res) => {
  const billText = req.body?.billText;

  if (typeof billText !== 'string' || !billText.trim()) {
    return res.status(400).json({ error: 'Please paste your bill text first.' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: 'Server is missing ANTHROPIC_API_KEY. Add it to your .env file and restart.',
    });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Please explain this medical bill text:\n\n${billText.trim()}`,
        },
      ],
    });

    const text = message.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');

    res.json({ explanation: text });
  } catch (err) {
    console.error(err);
    const msg =
      err?.error?.message ??
      err?.message ??
      'Something went wrong talking to Claude.';
    res.status(500).json({ error: msg });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App ready: open http://localhost:${PORT} in your browser`);
});
