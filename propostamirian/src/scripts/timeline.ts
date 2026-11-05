import { swapText } from './motion';

type Lane = { name: string; hs: number; he: number; kind?: 'pos' | 'cart' };
type Week = { title: string; body: string; pos: string };

const active = (l: Lane, w: number) => l.hs <= 2 * w && l.he >= 2 * w - 1;
const PLAY = '<path d="M4 2.5v11l9-5.5z"/>';
const PAUSE = '<path d="M4 3h3v10H4zM9 3h3v10H9z"/>';

export function initTimeline() {
  const root = document.getElementById('tl');
  if (!root) return;
  const lanes: Lane[] = JSON.parse(root.dataset.lanes!);
  const weeks: Week[] = JSON.parse(root.dataset.weeks!);
  const N = weeks.length;
  const $ = (id: string) => document.getElementById(id)!;

  const btns = Array.from(root.querySelectorAll<HTMLButtonElement>('.tl-wk'));
  const rows = Array.from($('tl-lanes').querySelectorAll<HTMLElement>('.tl-row'));
  const scrub = $('tl-scrub');
  const layer = root.querySelector<HTMLElement>('.tl-scrub-layer')!;
  const txt = $('tl-txt');
  const playBtn = $('tl-play') as HTMLButtonElement;
  let week = 1;
  let timer: number | null = null;

  function render(w: number, animate: boolean) {
    scrub.style.setProperty('--w', String(w - 1));
    btns.forEach((b, i) => {
      const on = i + 1 === w;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    rows.forEach((r, i) => r.classList.toggle('is-active', active(lanes[i], w)));
    $('tl-readout').textContent = `Semana ${w} de ${N}`;
    $('tl-num').textContent = `S${w}`;
    swapText(txt, 'is-swap', () => {
      $('tl-sr').textContent = `Semana ${w}: `;
      $('tl-title').textContent = weeks[w - 1].title;
      $('tl-body').textContent = weeks[w - 1].body;
      $('tl-pos').textContent = weeks[w - 1].pos;
      const chips = $('tl-chips');
      chips.textContent = '';
      lanes.forEach((l) => {
        if (!active(l, w) || l.kind === 'pos') return;
        const c = document.createElement('span');
        c.className = 'tl-chip' + (l.kind === 'cart' ? ' is-cart' : '');
        c.textContent = l.name;
        chips.appendChild(c);
      });
    }, animate);
  }

  function setWeek(w: number, animate = true) {
    w = Math.max(1, Math.min(N, w));
    if (w === week) return;
    week = w;
    render(w, animate);
  }

  function stop() {
    if (timer === null) return;
    clearInterval(timer);
    timer = null;
    $('tl-play-lbl').textContent = 'Percorrer';
    $('tl-play-ic').innerHTML = PLAY;
    playBtn.setAttribute('aria-pressed', 'false');
  }

  btns.forEach((b) => b.addEventListener('click', () => { stop(); setWeek(+b.dataset.w!); }));
  $('tl-prev').addEventListener('click', () => { stop(); setWeek(week - 1); });
  $('tl-next').addEventListener('click', () => { stop(); setWeek(week + 1); });

  // Setas no grupo de semanas: move a seleção e o foco juntos.
  root.addEventListener('keydown', (e) => {
    let w: number | null = null;
    if (e.key === 'ArrowRight') w = week + 1;
    else if (e.key === 'ArrowLeft') w = week - 1;
    else if (e.key === 'Home') w = 1;
    else if (e.key === 'End') w = N;
    if (w === null) return;
    e.preventDefault();
    stop();
    setWeek(w);
    btns[week - 1].focus();
  });

  // Arrastar pela grade: a coluna acompanha o dedo 1:1.
  const lanesEl = $('tl-lanes');
  const weekAt = (x: number) => {
    const r = layer.getBoundingClientRect();
    return Math.floor(((x - r.left) / r.width) * N) + 1;
  };
  let pointer: number | null = null;
  lanesEl.addEventListener('pointerdown', (e) => {
    if (pointer !== null) return; // ignora um segundo dedo
    if (e.clientX < layer.getBoundingClientRect().left) return;
    stop();
    pointer = e.pointerId;
    try { lanesEl.setPointerCapture(e.pointerId); } catch {}
    setWeek(weekAt(e.clientX));
  });
  lanesEl.addEventListener('pointermove', (e) => {
    if (e.pointerId === pointer) setWeek(weekAt(e.clientX));
  });
  const release = (e: PointerEvent) => { if (e.pointerId === pointer) pointer = null; };
  lanesEl.addEventListener('pointerup', release);
  lanesEl.addEventListener('pointercancel', release);

  playBtn.addEventListener('click', () => {
    if (timer !== null) { stop(); return; }
    if (week >= N) setWeek(1);
    $('tl-play-lbl').textContent = 'Pausar';
    $('tl-play-ic').innerHTML = PAUSE;
    playBtn.setAttribute('aria-pressed', 'true');
    timer = window.setInterval(() => {
      if (week >= N) { stop(); return; }
      setWeek(week + 1);
    }, 1600);
  });
  // Pausa se a seção sair da tela ou a aba ficar oculta.
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  new IntersectionObserver(([en]) => { if (!en.isIntersecting) stop(); }).observe(root);
}
