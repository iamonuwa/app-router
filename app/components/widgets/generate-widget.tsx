import { ResizablePanel } from "@/components/ui/resizable";

export const GenerateWidget = () => {
  return (
    <ResizablePanel minSize={24}>
      <p className="text-foreground">Generator</p>
    </ResizablePanel>
  );
};
