// Vercel Analytics (sem cookies) sempre; GA4 só depois do aceite explícito.
declare global {
  interface Window { va?: (...a: unknown[]) => void; dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void }
}
const KEY = 'cl-consent';

function store(v?: string) {
  try {
    if (v) localStorage.setItem(KEY, v);
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function loadGA(id: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
}

export function initAnalytics() {
  const ga = document.body.dataset.ga;
  if (ga) {
    const choice = store();
    if (choice === 'yes') loadGA(ga);
    const box = document.getElementById('cs');
    if (box && !choice) {
      box.hidden = false;
      box.querySelectorAll<HTMLButtonElement>('[data-cs]').forEach((b) =>
        b.addEventListener('click', () => {
          store(b.dataset.cs!);
          box.hidden = true;
          if (b.dataset.cs === 'yes') loadGA(ga);
        }),
      );
    }
  }

  document.querySelectorAll<HTMLAnchorElement>('[data-track]').forEach((a) =>
    a.addEventListener('click', () => {
      const name = a.dataset.track!;
      const where = a.dataset.where ?? '';
      window.va?.('event', { name, data: { where } });
      window.gtag?.('event', name, { where });
    }),
  );
}
