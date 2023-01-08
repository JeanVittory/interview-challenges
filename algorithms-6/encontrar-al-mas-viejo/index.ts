import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  const ages = developers.map((dev) => dev.age);
  const maxAges = Math.max(...ages);
  const oldestDev = developers.filter((dev) => dev.age === maxAges);
  return oldestDev;
}
