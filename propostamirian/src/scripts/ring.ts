import { reduceMotion, scrollBehavior } from './motion';

// Anel do hero: foco ou mouse mostra o prazo no centro; clique abre a aba certa e rola.
export function initRing() {
  const svg = document.getElementById('cy-svg');
  const detail = document.getElementById('cy-detail');
  if (!svg || !detail) return;
  const idle = detail.textContent;
  // o cometa só gira enquanto o anel está na tela
  const art = svg.closest('.cy-art');
  if (art && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => art.classList.toggle('is-off', !en.isIntersecting)).observe(art);
  }
  // movimento automático com mais de 5 s precisa de pausa (WCAG 2.2.2)
  const pause = document.getElementById('cy-pause');
  if (art && pause) {
    const PAUSE = '<path d="M4 3h3v10H4zM9 3h3v10H9z"/>';
    const PLAY = '<path d="M4 2.5v11l9-5.5z"/>';
    pause.addEventListener('click', () => {
      const paused = art.classList.toggle('is-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.setAttribute('aria-label', paused ? 'Retomar o movimento do anel' : 'Pausar o movimento do anel');
      pause.querySelector('svg')!.innerHTML = paused ? PLAY : PAUSE;
    });
    if (reduceMotion()) pause.hidden = true;
  }
  svg.querySelectorAll<SVGAElement>('.cy-node').forEach((n) => {
    const on = () => { n.classList.add('is-on'); detail.textContent = n.dataset.term ?? ''; };
    const off = () => { n.classList.remove('is-on'); detail.textContent = idle; };
    n.addEventListener('pointerenter', on);
    n.addEventListener('pointerleave', off);
    n.addEventListener('focus', on);
    n.addEventListener('blur', off);
    n.addEventListener('click', (e) => {
      const href = n.getAttribute('href')!;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      if (n.dataset.tab) document.dispatchEvent(new CustomEvent('phase:select', { detail: n.dataset.tab }));
      target.scrollIntoView({ behavior: scrollBehavior() });
      history.replaceState(null, '', href);
      // leva o foco junto, para quem navega por teclado
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}
