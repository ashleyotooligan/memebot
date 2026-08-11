const responses = [
  "cooked one.",
  "this has absolutely no utility. perfect.",
  "the timeline will decide.",
  "removed context. added brainrot.",
  "bad idea. good branding.",
  "ship it."
];

export function randomResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}
