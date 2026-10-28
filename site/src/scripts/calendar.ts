type Phase = { name: string; from: number; to: number; desc: string };

export function initCalendar() {
  const cal = document.getElementById('cal');
  const read = document.getElementById('cal-read');
  if (!cal || !read) return;
  const phases: Phase[] = JSON.parse(cal.dataset.phases!);
  const notes: Record<string, string> = JSON.parse(cal.dataset.notes!);
  const posFrom = Number(cal.dataset.pos);
  const days = Array.from(cal.querySelectorAll<HTMLButtonElement>('.cal-day'));
  let current = 0;

  function select(i: number, focus = false) {
    i = Math.max(0, Math.min(days.length - 1, i));
    days.forEach((b, j) => {
      b.setAttribute('aria-pressed', j === i ? 'true' : 'false');
      b.tabIndex = j === i ? 0 : -1;
    });
    current = i;
    const d = i + 1;
    const ps = phases.filter((x) => d >= x.from && d <= x.to);
    const parts = [notes[d], ...ps.map((p) => p.desc), d >= posFrom ? 'Posicionamento ativo.' : ''].filter(Boolean);
    read!.textContent = '';
    const b = document.createElement('b');
    b.textContent = `Dia ${d} · ${ps.map((p) => p.name).join(' + ')}`;
    const s = document.createElement('span');
    s.textContent = parts.join(' ');
    read!.append(b, s);
    if (focus) days[i].focus();
  }

  days.forEach((b, i) => b.addEventListener('click', () => select(i)));
  // Grade navegável por setas: esquerda/direita por dia, cima/baixo por semana.
  cal.addEventListener('keydown', (e) => {
    const step: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 };
    if (e.key === 'Home') { e.preventDefault(); select(0, true); return; }
    if (e.key === 'End') { e.preventDefault(); select(days.length - 1, true); return; }
    if (!(e.key in step)) return;
    e.preventDefault();
    select(current + step[e.key], true);
  });
}
