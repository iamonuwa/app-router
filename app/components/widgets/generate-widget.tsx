import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/icon-button";
import { ModelSelector } from "@/components/model-selector";
import { ResizablePanel } from "@/components/ui/resizable";
import { StarsIcon } from "lucide-react";
import { skills } from "@/data/skills";

const noop = () => {};

export const GenerateWidget = () => {
  return (
    <ResizablePanel
      minSize={10}
      className="h-72 rounded-md p-4 bg-[#201F23]"
      style={{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        overflow: "auto",
      }}
    >
      <div className="flex h-full justify-between items-center">
        <div className=""></div>
        <div className="flex h-full flex-col items-center justify-between">
          <ModelSelector className="w-32" options={skills} onChange={noop} />
          <IconButton>
            <StarsIcon size={24} />
          </IconButton>
        </div>
      </div>
    </ResizablePanel>
  );
};
