// Junta um caminho ao prefixo da página (/propostamo2).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (p = '') => `${BASE}/${p.replace(/^\//, '')}`;
