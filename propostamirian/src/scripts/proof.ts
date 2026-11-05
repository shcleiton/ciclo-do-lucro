import { reduceMotion } from './motion';

// As barras crescem uma vez, quando entram na tela. Sem JS ou com movimento reduzido, já aparecem cheias.
export function initProofBars() {
  if (reduceMotion() || !('IntersectionObserver' in window)) return;
  const cases = Array.from(document.querySelectorAll<HTMLElement>('[data-pv]'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      requestAnimationFrame(() => en.target.classList.remove('is-pending'));
    });
  }, { threshold: 0.4 });
  cases.forEach((c) => {
    const r = c.getBoundingClientRect();
    if (r.top < window.innerHeight) return; // já visível: não esconde nada
    c.classList.add('is-pending');
    io.observe(c);
  });
}
