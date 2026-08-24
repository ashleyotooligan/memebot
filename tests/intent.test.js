import test from "node:test";
import assert from "node:assert/strict";
import { detectIntent } from "../src/intent.js";

test("detects caption requests", () => {
  assert.equal(detectIntent("caption this"), "caption");
});

test("detects meme requests", () => {
  assert.equal(detectIntent("make me a meme about monday"), "meme");
});

test("falls back for unknown requests", () => {
  assert.equal(detectIntent("hello there"), "fallback");
});
