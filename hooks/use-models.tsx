import { atom, useAtom } from "jotai";

import { AIModel } from "@/models/ai-model";

const modelAtom = atom<AIModel[]>([
  {
    model: "chatgpt",
    version: "2.1",
    license: "MIT",
    contributors: ["john", "bob", "jane", "alice"],
    rating: 4,
  },
  {
    model: "tensorflow",
    version: "1.1",
    license: "MIT",
    contributors: ["john", "bob", "jane", "alice"],
    rating: 3,
  },
  {
    model: "bard",
    version: "1.1",
    license: "MIT",
    contributors: ["john", "bob", "jane", "alice"],
    rating: 3,
  },
]);

export const useModels = () => {
  const [models] = useAtom(modelAtom);

  return {
    models,
  };
};
