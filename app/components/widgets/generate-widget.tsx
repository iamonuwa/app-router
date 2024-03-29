import { AIGenerateDialog } from "@/components/generate-dialog";
import { ImageOverlay } from "@/components/image-overlay";
import { ModelSelector } from "@/components/model-selector";
import { ResizablePanel } from "@/components/ui/resizable";
import { Scanner } from "@/components/scanner";
import { skills } from "@/data/skills";

const noop = () => {};

export const GenerateWidget = () => {
  return (
    <ResizablePanel
      className="h-72 rounded-md p-4 bg-[#201F23]"
      style={{
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        overflow: "auto",
      }}
    >
      <div className="flex h-full justify-between items-center">
        <div className="h-full">
          <ImageOverlay
            src="/boy-in-water.png"
            overlayColor="hsla(257, 97%, 58%, 0.38)"
          />
        </div>
        <Scanner />
        <div className="flex h-full flex-col items-center justify-between">
          <ModelSelector className="w-32" options={skills} onChange={noop} />
          <AIGenerateDialog />
        </div>
      </div>
    </ResizablePanel>
  );
};
