import { swapText } from './motion';

type Front = { name: string; count: number; body: string; who: string };

export function initProduction() {
  const bar = document.getElementById('pr-bar');
  if (!bar) return;
  const fronts: Front[] = JSON.parse(bar.dataset.fronts!);
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('#pr-bar .pr-seg, .pr-legend button'));
  const txt = document.getElementById('pr-txt')!;
  const $ = (id: string) => document.getElementById(id)!;
  let current = 0;

  function select(i: number) {
    if (i === current) return;
    current = i;
    btns.forEach((b) => b.setAttribute('aria-pressed', Number(b.dataset.i) === i ? 'true' : 'false'));
    const f = fronts[i];
    swapText(txt, 'is-swap', () => {
      $('pr-n').textContent = String(f.count);
      $('pr-name').textContent = f.name;
      $('pr-body').textContent = f.body;
      $('pr-who').textContent = f.who;
    }, true);
  }
  btns.forEach((b) => b.addEventListener('click', () => select(Number(b.dataset.i))));
}
