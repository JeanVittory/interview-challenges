import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  return developers.reduce((detail: Developer[], dev: Developer) => {
    for (const [key, value] of Object.entries(dev)) {
      if (value === null) {
        detail.push({ ...dev, question: `Hi, could you please provide your ${key}.` });
      }
    }
    return detail;
  }, []);
}
