import { scrollBehavior } from './motion';

// Galeria das peças: padrão ARIA tabs, setas nas duas direções.
export function initPieces() {
  const list = document.getElementById('mk-steps');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const narrow = window.matchMedia('(max-width: 760px)');

  function pick(t: HTMLButtonElement, focus = false) {
    tabs.forEach((x) => {
      const on = x === t;
      const was = x.getAttribute('aria-selected') === 'true';
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      const p = document.getElementById(x.getAttribute('aria-controls')!)!;
      p.hidden = !on;
      if (on && !was) {
        p.classList.remove('is-in');
        void p.offsetWidth;
        p.classList.add('is-in');
      }
    });
    if (focus) t.focus();
    if (narrow.matches) {
      const l = t.offsetLeft - (list!.clientWidth - t.offsetWidth) / 2;
      list!.scrollTo({ left: l, behavior: scrollBehavior() });
    }
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', (e) => {
      let n: HTMLButtonElement | null = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') n = tabs[0];
      if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); pick(n, true); }
    });
  });
}
