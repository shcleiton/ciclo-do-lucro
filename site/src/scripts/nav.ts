// Marca no menu a seção que está na tela e mantém o link visível na fileira rolável.
export function initNav() {
  const nav = document.querySelector<HTMLElement>('.hd-nav');
  if (!nav || !('IntersectionObserver' in window)) return;
  const links = new Map<string, HTMLAnchorElement>();
  nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => links.set(a.hash.slice(1), a));
  let current: HTMLAnchorElement | null = null;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const a = links.get(en.target.id) ?? null;
        if (a === current) return;
        current?.removeAttribute('aria-current');
        current = a;
        if (!a) return;
        a.setAttribute('aria-current', 'true');
        const l = a.offsetLeft, r = l + a.offsetWidth;
        if (l < nav.scrollLeft || r > nav.scrollLeft + nav.clientWidth) nav.scrollTo({ left: l - 16 });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
}
