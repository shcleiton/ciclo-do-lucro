import { swapText } from './motion';

type Step = { level: string; name: string; price: string; priceNote?: string; gives: string; role: string };

// Escada: tocar num degrau troca o detalhe ao lado.
export function initLadder() {
  const list = document.getElementById('ld-stair');
  if (!list) return;
  const steps: Step[] = JSON.parse(list.dataset.steps!);
  const btns = Array.from(list.querySelectorAll<HTMLButtonElement>('.ld-step'));
  const txt = document.getElementById('ld-txt')!;
  const $ = (id: string) => document.getElementById(id)!;
  let current = 0;

  function select(i: number) {
    if (i === current) return;
    current = i;
    btns.forEach((b) => b.setAttribute('aria-pressed', Number(b.dataset.i) === i ? 'true' : 'false'));
    const s = steps[i];
    swapText(txt, 'is-swap', () => {
      $('ld-lv').textContent = s.level;
      $('ld-name').textContent = s.name;
      $('ld-price').textContent = s.price;
      $('ld-note').textContent = s.priceNote ?? '';
      $('ld-gives').textContent = s.gives;
      $('ld-role').textContent = s.role;
    }, true);
  }
  btns.forEach((b) => b.addEventListener('click', () => select(Number(b.dataset.i))));
}
