const rules = [
  ["caption", /\b(caption|caption this|write a caption)\b/i],
  ["reaction", /\b(reaction|react|how would you react)\b/i],
  ["dramatic", /\b(dramatic|dramaticize|more intense|more viral)\b/i],
  ["meme", /\b(meme|make me a meme|meme about)\b/i],
  ["vibe", /\b(vibe|energy|what is this giving)\b/i],
  ["cursed", /\b(cursed|weird|unhinged|brainrot)\b/i]
];

export function detectIntent(input = "") {
  for (const [intent, pattern] of rules) {
    if (pattern.test(input)) return intent;
  }
  return "fallback";
}
