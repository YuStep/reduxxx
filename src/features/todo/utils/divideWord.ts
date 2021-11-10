export function divideWord(text: string) {
  let firstCount = (text.length - (text.length % 2)) / 2;
  let first = text.slice(0, firstCount);
  let second = text.slice(firstCount);
  return [first, second];
}
