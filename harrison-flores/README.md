# Harrison Flores — site institucional

Site estático (HTML + CSS + um pouco de JavaScript) da floricultura Harrison Flores. Não precisa instalar nada.

## Como abrir

- **No computador:** dê dois cliques em `index.html`.
- **Para publicar:** envie a pasta inteira para qualquer hospedagem de site estático (GitHub Pages, Netlify, Vercel, a hospedagem da sua loja).

## Páginas

| Arquivo | Página |
|---|---|
| `index.html` | Início: promessa, 3 benefícios, depoimentos, perguntas frequentes e o pedido pelo WhatsApp |
| `servicos.html` | Buquês e arranjos, plantas e vasos, e como funciona um pedido |
| `sobre.html` | Sobre a loja e como ela trabalha |
| `contato.html` | Formulário que monta a mensagem e abre o WhatsApp, mais endereço e horário |

## O que trocar antes de publicar

Tudo o que precisa de dado real aparece no site **com fundo listrado em rosa**. Procure por `class="ph"` nos arquivos HTML.

1. **Número do WhatsApp:** em `js/main.js`, troque `5500000000000` pelo número da loja (55 + DDD + número, só dígitos). Todos os botões "Pedir pelo WhatsApp" usam esse número.
2. **Endereço, horário, WhatsApp e Instagram:** no rodapé das 4 páginas e na página `contato.html`.
3. **Depoimentos:** em `index.html`, os três depoimentos são **exemplos**. Troque pelos comentários reais dos clientes e apague as etiquetas "Exemplo" e o aviso abaixo deles.
4. **Perguntas frequentes:** em `index.html`, complete entrega, prazo mínimo de encomenda e formas de pagamento.
5. **História da loja:** em `sobre.html`, escreva quem começou a loja, quando e onde.
6. **Foto da loja ou da equipe:** em `sobre.html` há um espaço reservado com uma ilustração.
7. **Confirme estes pontos:** cartão com mensagem e dicas de rega aparecem como espaços marcados em `servicos.html` e nas perguntas frequentes. Se a loja oferecer, troque pelo texto final; se não, apague a linha.

## Identidade visual

- **Cores:** branco `#FFFFFF`, rosa pó `#F3E3E0`, grafite `#2B2B2B`, verde sálvia `#8A9A7B`, com tons de apoio em `css/styles.css` (bloco `:root`).
- **Fontes:** Bodoni Moda (títulos) e Hanken Grotesk (texto), as duas com licença livre (SIL OFL, em `assets/fonts/`). Ficam embutidas em `css/fonts.css`, por isso o site funciona até aberto direto do disco.
- **Ilustrações:** desenhadas em SVG dentro de cada página, com traço que se desenha ao aparecer na tela (no buquê do topo e no arranjo dos benefícios). Se quiser usar fotos reais, elas podem substituir as ilustrações aos poucos.

## Acessibilidade

Navegação por teclado com foco visível, link "Pular para o conteúdo", menu móvel que fecha com Esc, animações desligadas para quem prefere menos movimento, e textos com contraste dentro do padrão WCAG AA.
