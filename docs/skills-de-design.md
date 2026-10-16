# Skills de design instaladas

Registro de 16/10/2026. Foram instaladas 20 skills em `C:/Users/l.ferreira.de.moura/.codex/skills/` (`~/.codex/skills`), fora do repositório do site. A instalação preservou as skills existentes e não executou instaladores ou scripts arbitrários dos repositórios de origem.

A coluna **Nome no catálogo** corresponde ao campo `name` do `SKILL.md`; o nome da pasta pode ser diferente. Esses são os aliases a usar para solicitar uma skill.

| Nome no catálogo             | Pasta instalada            | Fonte                                                                                                                                |
| ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `brandkit`                   | `brandkit`                 | [Leonxlnx/taste-skill · brandkit](https://github.com/Leonxlnx/taste-skill/tree/main/skills/brandkit)                                 |
| `design-taste-frontend`      | `taste-skill`              | [Leonxlnx/taste-skill · taste-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill)                           |
| `gpt-taste`                  | `gpt-tasteskill`           | [Leonxlnx/taste-skill · gpt-tasteskill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/gpt-tasteskill)                     |
| `high-end-visual-design`     | `soft-skill`               | [Leonxlnx/taste-skill · soft-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/soft-skill)                             |
| `image-to-code`              | `image-to-code-skill`      | [Leonxlnx/taste-skill · image-to-code-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/image-to-code-skill)           |
| `imagegen-frontend-mobile`   | `imagegen-frontend-mobile` | [Leonxlnx/taste-skill · imagegen-frontend-mobile](https://github.com/Leonxlnx/taste-skill/tree/main/skills/imagegen-frontend-mobile) |
| `imagegen-frontend-web`      | `imagegen-frontend-web`    | [Leonxlnx/taste-skill · imagegen-frontend-web](https://github.com/Leonxlnx/taste-skill/tree/main/skills/imagegen-frontend-web)       |
| `industrial-brutalist-ui`    | `brutalist-skill`          | [Leonxlnx/taste-skill · brutalist-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/brutalist-skill)                   |
| `minimalist-ui`              | `minimalist-skill`         | [Leonxlnx/taste-skill · minimalist-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/minimalist-skill)                 |
| `redesign-existing-projects` | `redesign-skill`           | [Leonxlnx/taste-skill · redesign-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/redesign-skill)                     |
| `stitch-design-taste`        | `stitch-skill`             | [Leonxlnx/taste-skill · stitch-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/stitch-skill)                         |
| `impeccable`                 | `impeccable`               | [pbakaus/impeccable · .agents/skills/impeccable](https://github.com/pbakaus/impeccable/tree/main/.agents/skills/impeccable)          |
| `design-consultation`        | `design-consultation`      | [garrytan/gstack · design-consultation](https://github.com/garrytan/gstack/tree/main/design-consultation)                            |
| `design-html`                | `design-html`              | [garrytan/gstack · design-html](https://github.com/garrytan/gstack/tree/main/design-html)                                            |
| `design-review`              | `design-review`            | [garrytan/gstack · design-review](https://github.com/garrytan/gstack/tree/main/design-review)                                        |
| `design-shotgun`             | `design-shotgun`           | [garrytan/gstack · design-shotgun](https://github.com/garrytan/gstack/tree/main/design-shotgun)                                      |
| `ios-design-review`          | `ios-design-review`        | [garrytan/gstack · ios-design-review](https://github.com/garrytan/gstack/tree/main/ios-design-review)                                |
| `plan-design-review`         | `plan-design-review`       | [garrytan/gstack · plan-design-review](https://github.com/garrytan/gstack/tree/main/plan-design-review)                              |
| `huashu-design`              | `huashu-design`            | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design)                                                              |
| `caveman`                    | `caveman`                  | [JuliusBrussee/caveman · skills/caveman](https://github.com/JuliusBrussee/caveman/tree/main/skills/caveman)                          |

## Disponibilidade e uso nesta revisão

Após a instalação, as novas skills entram no catálogo automático no próximo turno. Nesta revisão, os arquivos instalados foram lidos diretamente para aplicar as orientações pertinentes sem depender dessa atualização do catálogo.

Foram usados:

- **redesign-existing-projects:** inspeção do projeto e ajustes pontuais na estrutura existente, mantendo marca, conteúdo e funcionamento.
- **impeccable:** contexto do projeto e referências `polish.md` e `craft-floor.md`, com atenção a acessibilidade, estados, foco, responsividade e preservação da direção visual.
- **design-taste-frontend:** critérios de acabamento e inspector sobre o navegador via CDP, como apoio à inspeção visual. Isso não equivale à execução integral do fluxo de sorteio de direções e redesign da Taste.

As demais skills ficam disponíveis para tarefas em que seu propósito seja adequado. Não foram executados os workflows integrais gstack. As skills que exigem geração de imagens, novos conceitos de marca ou propostas alternativas não foram usadas para produzir imagens nesta revisão. `caveman` foi instalada como orientação opcional de comunicação; nenhum CLI, proxy ou hook Caveman foi instalado.

## Limitações do gstack

Os seis diretórios solicitados contêm seus `SKILL.md` e materiais internos. A infraestrutura completa gstack não foi instalada: faltam os utilitários `bin/`, o navegador `browse/dist/browse`, o designer `design/dist/design` e as bibliotecas compartilhadas normalmente procuradas em `~/.claude/skills/gstack/`.

Assim, a presença das skills não significa que seus comandos de navegador, geração de variantes, relatórios, revisão de iOS ou telemetria estejam operacionais. As dependências e o ambiente devem ser verificados antes de executar esses workflows. A revisão deste site não dependeu desses binários.

## Fonte classificada como aplicação

[OmniRoute](https://github.com/diegosouzapw/OmniRoute) é um gateway/aplicação para provedores de modelos. O repositório também inclui cerca de 47 skills em [`skills/`](https://github.com/diegosouzapw/OmniRoute/tree/release/v3.8.52/skills), voltadas à API, CLI e administração do próprio serviço.

Essas skills e a aplicação não foram instaladas porque não se aplicam ao acabamento do portfólio. Nenhum servidor OmniRoute, provedor, credencial ou configuração de roteamento foi criado ou alterado.
