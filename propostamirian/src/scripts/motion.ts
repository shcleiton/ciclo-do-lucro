export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const scrollBehavior = (): ScrollBehavior => (reduceMotion() ? 'auto' : 'smooth');

// Troca de texto com um leve desfoque, para a nota não "piscar" entre dois estados.
export function swapText(el: HTMLElement, cls: string, apply: () => void, animate: boolean) {
  const t = (el as any)._swapT as number | undefined;
  if (t) clearTimeout(t);
  if (!animate || reduceMotion()) {
    apply();
    el.classList.remove(cls);
    return;
  }
  el.classList.add(cls);
  (el as any)._swapT = window.setTimeout(() => {
    apply();
    el.classList.remove(cls);
  }, 120);
}
