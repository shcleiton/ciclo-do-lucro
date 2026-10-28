// Verifica as regras de escrita do briefing no HTML gerado (rodar depois do build).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})('dist');

const rules = [
  [/—/, 'travessão (—)'],
  [/–/, 'meia-risca (–)'],
  [/\p{Extended_Pictographic}/u, 'emoji'],
  [/#[a-zà-ú]\w+/i, 'hashtag'],
  [/\bn[ãa]o (é|e) [^.,;]{1,40}, (é|e) /i, 'construção "não é X, é Y"'],
  [/em um mundo onde|imagine|no cenário atual/i, 'abertura genérica'],
  [/sinergia|disruptiv|alavanc|inovador|revolucion|ecossistema|jornada|transformacional|exponencial/i, 'jargão'],
  [/incr[ií]vel|fant[aá]stic|extraordin[aá]ri/i, 'adjetivo inflado'],
  [/\btalvez\b|pode ser/i, '"talvez" ou "pode ser"'],
];
// "jornada do aluno" vem do briefing, na seção de peças.
const allow = [/jornada do aluno/i, /Peças da jornada/i];

let bad = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ');
  const attrs = [...html.matchAll(/(?:aria-label|alt|content|title)="([^"]*)"/g)].map((m) => m[1]).join(' ');
  let all = text + ' ' + attrs;
  for (const a of allow) all = all.replace(new RegExp(a.source, 'gi'), '');
  for (const [re, name] of rules) {
    const m = all.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'));
    if (m) { bad++; console.log(`${f}: ${name}: ${[...new Set(m)].slice(0, 5).join(' | ')}`); }
  }
}
if (bad) { console.error(`\n${bad} problema(s) de copy.`); process.exit(1); }
console.log(`Copy ok em ${files.length} página(s).`);
