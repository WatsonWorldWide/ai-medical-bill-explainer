import Anthropic from '@anthropic-ai/sdk';

const MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';

const SYSTEM_PROMPT = `You help people understand medical bills in plain language. Explain line items, common codes (CPT/HCPCS when mentioned), charges vs adjustments, insurance terms, and what someone might want to verify or ask their provider or insurer about.

Be clear, organized, and cautious: you are not reviewing a specific person's medical record—only the text they pasted. If something is unclear or missing from the bill text, say so. Use short sections and bullet points when helpful.`;

/**
 * Calls Claude to explain bill text. Returns { ok, status, explanation?, error? }.
 */
export async function explainBill(billText) {
  if (typeof billText !== 'string' || !billText.trim()) {
    return {
      ok: false,
      status: 400,
      error: 'Please paste your bill text first.',
    };
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      ok: false,
      status: 500,
      error:
        'Server is missing ANTHROPIC_API_KEY. Add it to your .env file (local) or Vercel project settings (deployed).',
    };
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

    return { ok: true, status: 200, explanation: text };
  } catch (err) {
    console.error(err);
    const msg =
      err?.error?.message ??
      err?.message ??
      'Something went wrong talking to Claude.';
    return { ok: false, status: 500, error: msg };
  }
}
