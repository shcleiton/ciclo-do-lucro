// Junta um caminho ao prefixo da página (/propostamirian).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (p = '') => `${BASE}/${p.replace(/^\//, '')}`;
