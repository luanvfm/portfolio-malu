# Malu Informa

## Direção aprovada

Portfólio de jornalismo de Maria Luiza para apresentar reportagens e facilitar o contato de possíveis contratantes. O conteúdo conduz a experiência. Apresentação em primeira pessoa, em português e inglês.

O usuário escolheu a opção A (Fraunces + Work Sans), a marca Voz (microfone + aspas) e pediu personalidade de journaling, com papel e recortes de revista, mantendo uma aparência jovem e moderna. Em seguida, definiu salmão como a cor principal. Essa instrução substitui o dourado da proposta inicial.

## Paleta

| Uso                                   | Cor       |
| ------------------------------------- | --------- |
| Salmão, marca e ações principais      | `#ECA18D` |
| Creme de papel, fundo                 | `#FBF5ED` |
| Azul profundo, tinta e títulos        | `#24394B` |
| Terracota, links e detalhes legíveis  | `#983F34` |
| Verde petróleo, contraponto editorial | `#2B6669` |
| Papel branco quente                   | `#FFFDF8` |
| Papel rosado                          | `#F3D4C8` |

Texto escuro sobre salmão; texto creme sobre azul/verde. Salmão não é cor de texto sobre creme. Tokens em `src/styles.css`.

## Tipografia e material

- Fraunces nos títulos, cortes tipográficos e assinatura; Work Sans nos textos e controles.
- Fontes WOFF2 locais, com licenças OFL em `public/fonts`.
- Papel claro, fotografia real em moldura de recorte, fita translúcida, pequenas rotações e anotações em itálico.
- Textura de papel criada com image_gen e otimizada em WebP, 1536 × 1024, cerca de 26kB. É decoração; não representa uma reportagem ou pessoa real.
- A marca Voz é SVG, compartilhada entre cabeçalho, rodapé e favicon.

## Restrições preservadas

- Manter os sete trabalhos reais e os quatro posts selecionados, com links diretos.
- Não inventar matérias, imagens documentais, vínculos ou dados biográficos.
- Manter a estrutura da faixa de números: fundo claro, quatro indicadores, duas colunas no celular e quatro no desktop; valores existentes preservados.
- Cartões de matérias clicáveis por inteiro; links dos veículos continuam independentes e válidos.
- Sobre Mim, Minha trajetória e demais textos de apresentação em primeira pessoa.
- Não há conexão com a API do Instagram.

## Interação

Um movimento inicial discreto posiciona o recorte principal. Hover e toque dão retorno aos cartões e botões; os filtros fazem uma transição curta. Conteúdo visível antes do JavaScript; nenhuma animação infinita ou alteração da rolagem nativa. `prefers-reduced-motion`, foco, Escape e menu móvel acessíveis preservados.
