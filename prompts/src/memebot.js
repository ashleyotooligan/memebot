import { randomResponse } from "./responses.js";

export function respond(message) {
  const input = message.toLowerCase();

  if (input.includes("ticker")) {
    return `Name: DoomScroll
Ticker: $SCRL

bad idea. good branding.`;
  }

  if (input.includes("viral")) {
    return `done.

removed context.
added brainrot.`;
  }

  if (input.includes("trending")) {
    return `dogs ↑
frogs ↑
AI agents ↑
utility ↓`;
  }

  return randomResponse();
}
