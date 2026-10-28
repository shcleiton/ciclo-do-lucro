# DESIGN.md · Ciclo do Lucro

O sistema visual da página do método Ciclo do Lucro, da CR CODE. Agentes e pessoas que mexerem na
página leem este arquivo antes de alterar o visual.

## Ideia

O lançamento é um ciclo de peças. A página mostra o ciclo (o anel do hero), o tempo (linha de 9 semanas
e calendário de 63 dias) e as peças (mockups das telas que o público vê). Tudo que aparece é material
do próprio método: nenhuma ilustração genérica, nenhuma foto de banco.

## Cor

Um campo petróleo carrega a página; faixas claras entram onde há listas longas. Uma cor de ação.

| Papel | Token | Valor | Uso |
| --- | --- | --- | --- |
| Chão | `--petrol` | #03354E | Fundo principal |
| Chão elevado | `--petrol-2` | #0A4561 | Superfícies sobre o chão (um degrau de tom, sem borda) |
| Fundo profundo | `--abyss` | #011B28 | Seções interativas, cabeçalho e rodapé |
| Verde petróleo | `--moss` | #1E333D | Seção de papéis, início do posicionamento |
| Mar | `--sea` | #2E8C85 | Barras ativas, degradê da marca |
| Vidro | `--glass` | #A8E6D9 | A ação (botão principal), números, destaques |
| Espuma | `--foam` | #EAF3F1 | Texto principal no escuro |
| Névoa | `--mist` | #A9C3C9 | Só texto secundário (notas, legendas) |
| Papel / Tinta | `--paper` / `--ink` | #EEF3F1 / #0B2230 | Faixa clara e seu texto |

Regras:
- Superfícies se separam por degrau de tom, nunca por borda de 1px ou sombra.
- Texto corrido em `--text` (#D3E3E5), quase espuma. Névoa só em notas.
- O vermelho existe só no selo AO VIVO da mockup.
- O degradê petróleo para mar é da marca: só no hero, na faixa do posicionamento e na conversa final.

## Tipo

Uma família: Archivo variável (largura 62 a 125), hospedada no site. Suissnord entra no lugar quando o
arquivo chegar.

| Papel | Tamanho | Largura / peso | Uso |
| --- | --- | --- | --- |
| Display | clamp(2.6rem, 7.2vw, 6.4rem) | 118% / 740 | Título do hero, número da semana |
| Título | clamp(2rem, 4.2vw, 3.5rem) | 116% / 720 | Título de cada seção |
| Subtítulo | 1.375rem | 110% / 680 | Itens, abas, painéis |
| Corpo | 1.0625rem | 100% / 400 | Texto corrido |
| Nota | 0.875rem | 100% / 500 | Legendas, prazos |

Sem palavra destacada em cor dentro de título. Sem rótulo pequeno em cima de título. Sem caixa alta
espaçada.

## Composição

- Moldura: 1240px, margens iguais de 16 a 32px.
- Seções separadas por clamp(88px, 11vw, 168px). Nenhuma seção repete o layout da vizinha.
- Botões em pílula: um preenchimento vidro para a ação, cápsula translúcida para a secundária.
- Mockups são fragmentos de interface (`data-ui`): mantêm a sombra e as bordas da tela que imitam.

## Movimento

`cubic-bezier(0.23,1,0.32,1)`, até 300ms em interações, `scale(0.97)` ao pressionar. Um momento
orquestrado: a entrada do hero. Seções revelam suas partes uma vez, em sequência curta. O cometa do
anel tem controle de pausa. Tudo cai para opacidade simples em `prefers-reduced-motion`.

## Referências

`design/references/` guarda três análises do repositório
[awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (licença MIT), usadas só como
referência de estrutura, nunca de identidade:

- `runwayml`: heros escuros com faixas claras de leitura.
- `nerdwallet`: uma cor profunda com escala de mentas, separação sem sombra.
- `mercury`: fintech escura, uma única ação saturada em pílula, cartões por preenchimento.

`design/web-interface-guidelines.md` é a cópia das diretrizes da Vercel usada na última revisão.
