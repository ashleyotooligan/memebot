# Architecture

Memebot is split into small layers so meme behavior can evolve independently.

## Request flow

```text
user input
   ↓
intent detection
   ↓
response template pool
   ↓
personality constraints
   ↓
final reply
```

## Modules

- `src/intent.js` — lightweight request classification
- `src/templates/replies.js` — response pools grouped by intent
- `src/personality.js` — stable tone and behavior rules
- `data/` — structured meme formats and reaction language
- `prompts/` — provider-agnostic prompt drafts

## Future model integration

```text
input
  → intent
  → context builder
  → model adapter
  → response guard
  → output
```
