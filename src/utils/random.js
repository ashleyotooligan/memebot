export function pick(items = []) {
  if (!items.length) return "";
  return items[Math.floor(Math.random() * items.length)];
}
