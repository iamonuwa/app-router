"use client";

import { ModelSelector } from "@/components/model-selector";
import { skills } from "@/data/skills";

const noop = () => {};

export const ModelHeader = () => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl p-4 h-56 lg:h-48 bg-[#201F23]">
      <h4 className="row-span-1 text-2xl font-semibold tracking-tight text-foreground">
        AI Models
      </h4>
      <div className="flex flex-row flex-wrap gap-2 row-span-1 pb-10">
        <ModelSelector
          className="w-28 h-10 rounded-full"
          onChange={noop}
          options={skills}
        />
        <ModelSelector
          className="w-28 h-10 rounded-full"
          onChange={noop}
          options={skills}
        />
        <ModelSelector
          className="w-28 h-10 rounded-full"
          onChange={noop}
          options={skills}
        />
      </div>
    </div>
  );
};
