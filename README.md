# Memebot



![Memebot](./memebot.png)

**Memebot** is a meme-native bot experiment built around internet culture, reaction images, caption formats, absurd one-liners, and deliberately over-online humor.

> memes in.

**v0.3.0 / GrokBot Workroom** adds a creative operator pack for Grok Bot: three focused roles, shared task artifacts, reusable routine instructions, and a visual review queue. Scout builds the context. Studio develops original directions. Editor returns a draft worth reviewing.

![Memebot v0.3.0 GrokBot Workroom: three focused creative roles](assets/grokbot/01-workroom.png)

[Open the local workroom](preview/grokbot-workroom.html) · [Grok Bot setup](integrations/grokbot/README.md) · [Workflow details](docs/grokbot-workflow.md) · [v0.3.0 release](docs/releases/0.3.0.md)

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

| Path | Role |
|---|---|
| `src/` | Existing meme responses, personality, request routing and the new task builder |
| `integrations/grokbot/` | Three role instructions, two routine templates and pack manifest |
| `data/grokbot/` | Attributed example creative session |
| `preview/` | Self-contained local GrokBot Workroom |
| `assets/grokbot/` | Four application-generated workflow views |
| `prompts/` | Provider-agnostic personality and meme prompts |
| `docs/` | Methods, examples, integration setup and release notes |
| `tests/` | Existing behavior plus packet, provenance and review tests |

## Local demo

Requires Node.js 20+.

```bash
npm install
npm run demo
npm test
```

## The GrokBot operator pack

Memebot's GrokBot workflow keeps creative work in inspectable files. It is built around Grok Bot's persistent workspace and role-based collaboration model. The pack is configured through the user's own Grok Bot conversations; the repository's JSON manifest describes Memebot's file contract.

| Role | Primary job | Handoff artifact |
|---|---|---|
| **Scout** | Organize source material, context and creative angles | `brief.md` |
| **Studio** | Create three original directions and short captions | `directions.json` |
| **Editor** | Check voice, source references and final wording | `review.json` |

The brief moves between roles with its source IDs intact. Stable voice preferences belong with the roles. Current observations, creative premises and the decision trail belong in each task's files.

### Start with the local workroom

Download [preview/grokbot-workroom.html](preview/grokbot-workroom.html) and open the saved file in a browser. It embeds the original Memebot artwork and an example session. On GitHub, download the HTML rather than expecting the file page to run the application.

Switch between Workroom, Brief, Studio and Review. Export a task packet, inspect the three sample directions, mark a draft reviewed locally, and save a view as PNG. Every workroom view identifies its source as a repository example.

```sh
npm run grokbot:demo
npm run grokbot:packet -- "Three original meme directions about Solana wallet dust"
```

The first command renders a readable handoff brief. The second returns structured task JSON. Both run locally using Node's standard library. The task includes the supplied source notes, Memebot voice, allowed formats and role handoffs.

### Scout / context before captions

![Scout brief with a creative premise and source ledger](assets/grokbot/02-brief.png)

The example is an invented wallet scene, supplied as a creative note. A factual source and a fictional premise have different roles: neither should silently become the other. Scout instructions require source URLs and retrieval times when current external research is requested.

### Studio / three original treatments

![Studio shows three original meme directions with caption lengths](assets/grokbot/03-studio.png)

The same brief becomes a two-panel contrast, an invented interface, and an original starter pack. Each direction carries a caption, setup, twist, art direction and source references. The local example uses authored sample captions; a configured Grok Bot follows the supplied role instructions to produce its own work.

### Editor / a reviewable finish

![Editor view with the selected caption and source-backed review fields](assets/grokbot/04-review.png)

Review preserves the chosen direction and its source references. The local review control exports a local record. Posting to X remains a separate owner action.

### Use the pack in Grok Bot

Follow [the setup guide](integrations/grokbot/README.md) to create the three named roles, provide a task packet, and test one handoff. The included daily-brief and queue-review files are reusable routine instructions to configure in your account.

**Connection model:** user-managed file handoff. The local workroom prepares and reviews artifacts; Grok Bot runs through the user's configured account. This release supplies role instructions and artifact contracts rather than a bundled Grok Bot runtime. It does not claim an official partnership.

The official product is named **Grok Bot**; this repository uses **GrokBot Workroom** for Memebot's own operator-pack view. Sources and verification date are recorded in [the integration reference notes](docs/grokbot-sources.md).

## Design principles

1. **Meme first.** The punchline matters more than the explanation.
2. **Short replies.** Most responses should fit in a screenshot.
3. **Recognizable formats.** Use structures people understand immediately.
4. **No fake confidence.** If context is missing, lean into the joke rather than invent facts.
5. **Remixable.** Meme formats and reactions live in data files.

## Current status

**Version 0.3.0.** The existing personality layer, response templates and local demo are retained. The release adds task-packet generation, Grok Bot role and routine instructions, an attributed example session, four visual workroom views, local review exports and integration tests.

Rebuild the standalone workroom with `npm run grokbot:build`. Figure generation uses an optional native Canvas renderer; see [the release notes](docs/releases/0.3.0.md).

See [`docs/roadmap.md`](./docs/roadmap.md).
