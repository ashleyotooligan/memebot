import { detectIntent } from "./intent.js";
import { personality } from "./personality.js";
import { templates } from "./templates/replies.js";
import { pick } from "./utils/random.js";

function render(template) {
  return typeof template === "function" ? template() : template;
}

export function createMemebot() {
  return {
    name: personality.name,
    personality,

    respond(message = "") {
      const intent = detectIntent(message);
      const pool = templates[intent] ?? templates.fallback;
      return render(pick(pool));
    }
  };
}
