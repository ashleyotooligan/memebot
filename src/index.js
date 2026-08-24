import { createMemebot } from "./memebot.js";

const bot = createMemebot();

export { createMemebot };

if (process.argv[1]?.endsWith("index.js")) {
  console.log(bot.respond("give me something cursed"));
}
