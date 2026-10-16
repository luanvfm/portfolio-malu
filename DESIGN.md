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
- Retrato profissional fornecido pela proprietária, com remoção do fundo, no destaque inicial e em Sobre Mim. Silhueta com transparência sobre um recorte salmão; o retrato não recebe link ou botão de vídeo. Os trabalhos publicados continuam nos cartões do portfólio.
- Textura de papel criada com image_gen e otimizada em WebP, 1536 × 1024, cerca de 26kB. É decoração; não representa uma reportagem ou pessoa real.
- A marca Voz é SVG, compartilhada entre cabeçalho, rodapé e favicon.

## Restrições preservadas

- Manter os sete trabalhos reais e os quatro posts selecionados, com links diretos.
- Não inventar matérias, imagens documentais, vínculos ou dados biográficos.
- Manter a estrutura da faixa de números: fundo claro, quatro indicadores, duas colunas no celular e quatro no desktop; valores atuais definidos pelo usuário: 15+ matérias, 15+ jogos, 500+ seguidores e 10+ clubes.
- Cartões de matérias clicáveis por inteiro; links dos veículos continuam independentes e válidos.
- Sobre Mim, Minha trajetória e demais textos de apresentação em primeira pessoa.
- Rodapé minimalista em uma única seção, com logo no topo, CTA "Enviar uma proposta" e ícones de e-mail, LinkedIn e Instagram. O endereço de e-mail não aparece no rodapé; o ícone e o CTA usam o contato confirmado. Sem divisórias internas ou faixa decorativa antiga. Ícones acima do botão de proposta e subtexto de convite abaixo do botão, em português e inglês.
- Trechos importantes dos parágrafos destacados com `strong` e peso 650; sublinhado salmão no hover, sem mover palavras ou alterar as quebras de linha. Texto creme nos fundos escuros e versão em inglês equivalente. Os marcadores de ênfase ficam apenas no dicionário local e são renderizados como elementos React, sem HTML dinâmico.
- Não há conexão com a API do Instagram.

## Interação

Um movimento inicial discreto posiciona o recorte principal. Hover e toque dão retorno aos cartões, botões, indicadores e retrato profissional; as bolinhas da trajetória têm entrada única e resposta a hover/foco; os filtros fazem uma transição curta. Conteúdo visível antes do JavaScript; nenhuma animação infinita ou alteração da rolagem nativa. `prefers-reduced-motion`, foco, Escape e menu móvel acessíveis preservados.

### Fechamento editorial

Rodapé com composição central, papel rosado texturizado, assinatura Voz no topo e chamada Fraunces em duas linhas, com final em itálico terracota. Contatos em ícones com alvo de 44px, botão azul abaixo e convite curto em seguida. Mantém uma única seção, sem divisórias, endereço de e-mail visível ou elementos decorativos externos. Referências de composição: personalidade de recortes do portfólio Carolyn Lee e presença tipográfica central de The Design Society; os ativos, cores e fontes pertencem ao Malu Informa.
