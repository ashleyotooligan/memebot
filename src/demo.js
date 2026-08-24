import { createMemebot } from "./memebot.js";

const bot = createMemebot();

const prompts = [
  "caption this",
  "make this more dramatic",
  "give me a reaction",
  "what is the vibe",
  "make me a meme about monday",
  "give me something cursed"
];

console.log("MEMEBOT // local demo\n");

for (const prompt of prompts) {
  console.log(`you: ${prompt}`);
  console.log(`memebot: ${bot.respond(prompt)}\n`);
}
