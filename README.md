# Memebot

![Memebot](./memebot.png)

**Memebot** is a meme-native bot experiment built around internet culture, reaction images, caption formats, absurd one-liners, and deliberately over-online humor.

> memes in.

The project is intentionally modular: prompts, meme formats, response logic, and personality rules all live in separate files so the bot can evolve without turning into one giant prompt.

## What Memebot does

- generates short meme captions
- suggests reaction formats
- rewrites normal text into meme-native language
- creates absurd names and phrases
- reacts to images and prompts
- detects common request types
- keeps replies short enough to screenshot
- avoids over-explaining jokes

## Example

```text
you: make this more dramatic

memebot:
added:
- unnecessary lore
- one suspiciously specific detail
- 40% more doom
```

## Project structure

```text
memebot/
├── .github/
├── data/
├── docs/
├── prompts/
├── src/
├── tests/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── package.json
└── README.md
```

## Local demo

Requires Node.js 20+.

```bash
npm install
npm run demo
npm test
```

## Design principles

1. **Meme first.** The punchline matters more than the explanation.
2. **Short replies.** Most responses should fit in a screenshot.
3. **Recognizable formats.** Use structures people understand immediately.
4. **No fake confidence.** If context is missing, lean into the joke rather than invent facts.
5. **Remixable.** Meme formats and reactions live in data files.

## Current status

Experimental prototype with a personality layer, request routing, response templates, meme-format data, prompt drafts, tests, and documentation.

See [`docs/roadmap.md`](./docs/roadmap.md).
