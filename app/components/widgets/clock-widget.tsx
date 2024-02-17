import { ClockWidget as Clock } from "@/components/clock";
import { ResizablePanel } from "@/components/ui/resizable";

export const ClockWidget = () => {
  return (
    <ResizablePanel
      minSize={10}
      maxSize={20}
      className="hidden md:flex items-center justify-center flex-none flex-col asideRight rounded-md p-4 bg-clock-banner bg-cover bg-center bg-no-repeat"
    >
      <Clock />
    </ResizablePanel>
  );
};
