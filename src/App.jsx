import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [billText, setBillText] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleExplain() {
    setError('');
    setExplanation('');

    if (!billText.trim()) {
      setError('Paste your bill text in the box above, then try again.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ billText }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Request failed. Please try again.');
        return;
      }

      setExplanation(data.explanation || '');
    } catch {
      setError('Could not reach the server. Is `npm run dev` running?');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <header className="header">
        <h1>AI Medical Bill Explainer</h1>
        <p className="lede">
          Paste the text from a medical bill (or an explanation of benefits). We
          will ask Claude to summarize it in everyday language.
        </p>
      </header>

      <main className="main">
        <label className="label" htmlFor="bill">
          Bill text
        </label>
        <textarea
          id="bill"
          className="textarea"
          placeholder="Paste your bill here…"
          value={billText}
          onChange={(e) => setBillText(e.target.value)}
          rows={14}
          disabled={loading}
        />

        <button
          type="button"
          className="button"
          onClick={handleExplain}
          disabled={loading}
        >
          Explain My Bill
        </button>

        {loading && (
          <p className="status" role="status" aria-live="polite">
            Explaining your bill… this may take a few seconds.
          </p>
        )}

        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}

        {!loading && explanation && (
          <section className="result" aria-label="Explanation">
            <h2>Explanation</h2>
            <div className="markdown">
              <ReactMarkdown>{explanation}</ReactMarkdown>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>
          <strong>Disclaimer:</strong> This tool is for general information only.
          It is not medical advice, legal advice, or a substitute for talking to
          your doctor, hospital billing office, or insurance plan. Always verify
          charges and coverage with your providers and insurer.
        </p>
      </footer>
    </div>
  );
}
