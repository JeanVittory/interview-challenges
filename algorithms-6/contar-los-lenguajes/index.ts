import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  const result = {};
  developers.forEach((dev) => {
    if (!result[dev.language]) {
      result[dev.language] = 1;
    } else {
      result[dev.language]++;
    }
  });
  return result;  return {};
}
