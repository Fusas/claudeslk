# claudeslk

Skills e agentes do Claude Code compartilhados entre sessões.

## Conteúdo

- `.claude/skills/impeccable/` — [Impeccable](https://impeccable.style) v4.5.0 (Paul Bakaus, licença em `LICENSE` na pasta), skill de design de frontend. Use `/impeccable init` e depois `/impeccable <comando> <alvo>` (ex.: `polish`, `audit`, `critique`).
- `.claude/agents/impeccable-*.md` — agentes auxiliares do Impeccable.
- Taste Skill (Leonxlnx, MIT) — 13 skills de estilo visual: `design-taste-frontend`, `design-taste-frontend-v1`, `redesign-existing-projects`, `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`, `gpt-taste`, `stitch-design-taste`, `full-output-enforcement`, `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`.
- Emil Kowalski skills — 14 skills de design engineering e animação, instaladas com `npx skills add emilkowalski/skill` (versões fixadas em `skills-lock.json`): `emil-design-eng`, `animate`, `animate-expo`, `animation-vocabulary`, `apple-design`, `ask-sonner`, `break-ui`, `find-animation-opportunities`, `improve-animations`, `review-animations`, `mobile-native`, `pick-ui-library`, `prototype`, `write-swift`.

Os hooks automáticos do plugin original (SessionStart / PostToolUse / Stop) não foram incluídos.

Origens:
- https://github.com/pbakaus/impeccable (commit 778c8a7)
- https://github.com/Leonxlnx/taste-skill (commit b482f7a)
- https://github.com/emilkowalski/skill
