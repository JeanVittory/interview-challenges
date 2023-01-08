import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const totalAge: number = developers.reduce((acc, dev) => {
    acc += dev.age;
    return acc;
  }, 0);
  let result = Math.round(totalAge / developers.length);
  return result;
}
