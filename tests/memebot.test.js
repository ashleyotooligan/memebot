import test from "node:test";
import assert from "node:assert/strict";
import { createMemebot } from "../src/memebot.js";

test("creates a bot with the correct name", () => {
  const bot = createMemebot();
  assert.equal(bot.name, "Memebot");
});

test("returns a non-empty response", () => {
  const bot = createMemebot();
  const reply = bot.respond("give me a reaction");
  assert.equal(typeof reply, "string");
  assert.ok(reply.length > 0);
});
