// As partes de cada bloco marcado com data-rv sobem uma vez quando o bloco entra na tela.
// Sem script, a classe .js não existe e nada fica escondido.
export function initReveal() {
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));
  if (!('IntersectionObserver' in window)) {
    blocks.forEach((b) => b.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  blocks.forEach((b) => {
    // o que já está na tela ao carregar aparece sem esperar
    if (b.getBoundingClientRect().top < window.innerHeight) b.classList.add('is-in');
    else io.observe(b);
  });
}
