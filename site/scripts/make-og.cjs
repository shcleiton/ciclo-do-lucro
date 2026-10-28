// Gera public/og.jpg (1200x630), favicon-32.png e apple-touch-icon.png.
// Uso: npm run og  (precisa do Chromium do Playwright)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const os = require('os');

const pub = path.join(__dirname, '..', 'public');
const font = 'file://' + path.join(pub, 'fonts', 'archivo-latin.woff2');
const stages = ['Concepção', 'Posicionamento', 'Aquecimento', 'Captação', 'Evento', 'Venda', 'Retenção'];

function ring(cx, cy, R, LR) {
  let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="rgba(168,230,217,.32)" stroke-width="3"/>`;
  const a0 = (-140 * Math.PI) / 180;
  s += `<path d="M${cx + R * Math.cos(a0)} ${cy + R * Math.sin(a0)} A${R} ${R} 0 0 1 ${cx} ${cy - R}" fill="none" stroke="url(#g)" stroke-width="6" stroke-linecap="round"/>`;
  s += `<circle cx="${cx}" cy="${cy - R}" r="8" fill="#EAF3F1"/>`;
  stages.forEach((n, i) => {
    const th = ((-90 + (i * 360) / 7) * Math.PI) / 180, c = Math.cos(th), sn = Math.sin(th);
    const anchor = c > 0.2 ? 'start' : c < -0.2 ? 'end' : 'middle';
    const ty = sn < -0.9 ? cy + LR * sn - 10 : sn > 0.5 ? cy + LR * sn + 30 : cy + LR * sn + 9;
    if (i > 0) s += `<circle cx="${cx + R * c}" cy="${cy + R * sn}" r="9" fill="#03354E" stroke="#A8E6D9" stroke-width="3"/>`;
    s += `<text x="${cx + LR * c}" y="${ty}" text-anchor="${anchor}" class="l">${n}</text>`;
  });
  s += `<text x="${cx}" y="${cy - 8}" text-anchor="middle" class="t">Ciclo</text><text x="${cx}" y="${cy + 38}" text-anchor="middle" class="t">do Lucro</text>`;
  return s;
}

const og = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:A;src:url(${font}) format('woff2');font-weight:300 800;font-stretch:62% 125%}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;font-family:A,sans-serif;color:#EAF3F1;
background:radial-gradient(110% 130% at 100% 0%,rgba(46,140,133,.6) 0%,rgba(46,140,133,0) 58%),linear-gradient(160deg,#03354E 0%,#03354E 40%,#0B4A5A 100%);position:relative}
body:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(168,230,217,.17) 1.4px,transparent 1.8px);background-size:26px 26px;-webkit-mask-image:linear-gradient(115deg,transparent 28%,#000 78%)}
.c{position:absolute;left:72px;top:0;bottom:0;width:500px;display:flex;flex-direction:column;justify-content:center;gap:24px}
h1{font-size:68px;line-height:1;font-stretch:118%;font-weight:740;letter-spacing:-.03em}
h1 em{font-style:normal;color:#A8E6D9}
p{font-size:25px;line-height:1.35;color:#C6D9DD}
.m{font-stretch:125%;font-weight:800;letter-spacing:.08em;font-size:20px}.m span{color:#A8E6D9}
svg{position:absolute;right:0;top:0}
.l{fill:#EAF3F1;font-family:A;font-size:23px;font-weight:620}
.t{fill:#EAF3F1;font-family:A;font-size:42px;font-weight:760;font-stretch:122%}
</style></head><body>
<div class="c"><div class="m">CR <span>CODE</span></div><h1>Ciclo do Lucro</h1><p>Um lançamento inteiro, peça por peça. Cerca de 60 dias, 5 fases e 146 entregas.</p></div>
<svg width="640" height="630" viewBox="0 0 640 630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2E8C85" stop-opacity="0"/><stop offset="1" stop-color="#A8E6D9"/></linearGradient></defs>${ring(290, 318, 160, 185)}</svg>
</body></html>`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  // página em arquivo para que a fonte local (file://) carregue
  const tmp = path.join(os.tmpdir(), 'cl-og.html');
  fs.writeFileSync(tmp, og);
  await p.goto('file://' + tmp, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(pub, 'og.jpg'), type: 'jpeg', quality: 88 }); // WhatsApp ignora imagens acima de ~300 KB
  const svg = fs.readFileSync(path.join(pub, 'favicon.svg'), 'utf8');
  for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
    const q = await b.newPage({ viewport: { width: size, height: size } });
    await q.setContent(`<style>*{margin:0}svg{width:${size}px;height:${size}px;display:block}</style>${svg.replace('rx="7"', size > 64 ? 'rx="0"' : 'rx="7"')}`);
    await q.screenshot({ path: path.join(pub, name), omitBackground: true });
  }
  await b.close();
  console.log('og.jpg, favicon-32.png e apple-touch-icon.png gerados em public/');
})();
