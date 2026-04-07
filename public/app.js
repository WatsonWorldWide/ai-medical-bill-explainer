const billEl = document.getElementById('bill');
const btnEl = document.getElementById('explain-btn');
const statusEl = document.getElementById('status');
const errorEl = document.getElementById('error');
const resultSectionEl = document.getElementById('result-section');
const explanationEl = document.getElementById('explanation');

/** Same host as the page (local Express or Vercel); avoids broken relative URLs in odd deploy setups. */
const EXPLAIN_API_URL = new URL('/api/explain', window.location.origin).href;

function setLoading(loading) {
  btnEl.disabled = loading;
  billEl.disabled = loading;
  if (loading) {
    statusEl.hidden = false;
    statusEl.textContent =
      'Explaining your bill… this may take a few seconds.';
  } else {
    statusEl.hidden = true;
    statusEl.textContent = '';
  }
}

function showError(message) {
  errorEl.hidden = !message;
  errorEl.textContent = message || '';
}

function renderExplanation(text) {
  if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
    const html = marked.parse(text, { breaks: true });
    explanationEl.innerHTML = DOMPurify.sanitize(html);
  } else {
    explanationEl.textContent = text;
  }
}

btnEl.addEventListener('click', async () => {
  showError('');
  resultSectionEl.hidden = true;
  explanationEl.innerHTML = '';

  const billText = billEl.value;
  if (!billText.trim()) {
    showError('Paste your bill text in the box above, then try again.');
    return;
  }

  setLoading(true);
  try {
    const res = await fetch(EXPLAIN_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ billText }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      showError(data.error || 'Request failed. Please try again.');
      return;
    }

    if (data.explanation) {
      renderExplanation(data.explanation);
      resultSectionEl.hidden = false;
    } else {
      showError('No explanation was returned. Please try again.');
    }
  } catch {
    showError('Could not reach the server. Make sure the app is running.');
  } finally {
    setLoading(false);
  }
});
