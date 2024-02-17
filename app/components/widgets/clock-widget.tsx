import { ResizablePanel } from "@/components/ui/resizable";

export const ClockWidget = () => {
  return (
    <ResizablePanel
      minSize={10}
      maxSize={20}
      className="hidden md:flex flex-none flex-col asideRight rounded-md p-4 bg-[#201F23]"
    >
      <p className="text-foreground">Clock Widget</p>
    </ResizablePanel>
  );
};
