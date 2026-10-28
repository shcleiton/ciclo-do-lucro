import { scrollBehavior } from './motion';

// Abas das fases (padrão ARIA tabs) com pílula deslizante.
// Outros componentes abrem uma aba disparando `phase:select` com o id dela.
export function initPhases() {
  const list = document.getElementById('ph-tabs');
  const pill = document.getElementById('ph-pill');
  if (!list || !pill) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));

  function movePill() {
    const a = tabs.find((t) => t.getAttribute('aria-selected') === 'true')!;
    pill!.style.setProperty('--pw', `${a.offsetWidth}px`);
    pill!.style.setProperty('--px', `${a.offsetLeft - 4}px`);
  }

  function select(t: HTMLButtonElement, focus = false) {
    const prev = tabs.find((x) => x.getAttribute('aria-selected') === 'true');
    tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      const p = document.getElementById(x.getAttribute('aria-controls')!)!;
      p.hidden = !on;
      if (on && prev !== t) {
        p.classList.remove('is-in');
        void p.offsetWidth;
        p.classList.add('is-in');
      }
    });
    movePill();
    if (focus) t.focus();
    // mantém a aba visível quando a fileira rola na horizontal (celular)
    const sc = list!.parentElement!;
    const l = t.offsetLeft, r = l + t.offsetWidth;
    if (l < sc.scrollLeft || r > sc.scrollLeft + sc.clientWidth) {
      sc.scrollTo({ left: l - 24, behavior: scrollBehavior() });
    }
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      let n: HTMLButtonElement | null = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') n = tabs[0];
      if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  document.addEventListener('phase:select', (e) => {
    const t = tabs.find((x) => x.dataset.tab === (e as CustomEvent<string>).detail);
    if (t) select(t);
  });

  pill.style.transition = 'none';
  movePill();
  requestAnimationFrame(() => requestAnimationFrame(() => { pill.style.transition = ''; }));
  window.addEventListener('resize', movePill);
  document.fonts?.ready.then(movePill);
}
