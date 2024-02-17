import { ClockWidget as Clock } from "@/components/clock";
import Draggable from "react-draggable"; // Both at the same time
import { ResizablePanel } from "@/components/ui/resizable";
import { format } from "date-fns";
import { useState } from "react";
import { useTime } from "@/hooks/use-time";

export const ClockWidget = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const time = useTime();
  const allowedPositions = [
    { x: 0, y: 0 },
    { x: 2, y: 255 },
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  const handleStart = () => {
    setPrevPosition(position);
  };

  const handleDrag = (e: any, ui: { x: any; y: any }) => {
    setIsDragging(true);
    setPosition({ x: ui.x, y: ui.y });
  };

  const handleStop = () => {
    setIsDragging(false);
    const isAllowedPosition = allowedPositions.some(
      (pos) =>
        Math.abs(pos.x - position.x) < 50 && Math.abs(pos.y - position.y) < 50
    );

    if (!isAllowedPosition) {
      setIsDragging(false);
      setPosition(prevPosition);
    }
  };

  return (
    <ResizablePanel
      minSize={10}
      maxSize={20}
      className="relative hidden md:flex items-center justify-between flex-none flex-col asideRight rounded-md p-4 bg-clock-banner bg-cover bg-center bg-no-repeat"
    >
      {isDragging && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDragging ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(0deg, #652BFC 17.25%, rgba(101, 43, 252, 0.00) 100%)",
          }}
        />
      )}
      <div className="flex flex-col gap-8 items-center">
        <Draggable
          position={position}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <div className="handle cursor-move flex-1">
            <Clock />
          </div>
        </Draggable>
        <h3 className="text-white text-2xl font-semibold tracking-tight">
          {format(time, "HH:mm:ss")}
        </h3>
      </div>
      {isDragging && (
        <div className="h-40 z-30 w-40 rounded-full border border-dashed border-white" />
      )}
      <div
        className="absolute top-0 left-0 h-full rounded-md"
        style={{
          width: `50px`,
          backgroundColor:
            "linear-gradient(0deg, #652BFC 17.25%, rgba(101, 43, 252, 0.00) 100%)",
        }}
      />
    </ResizablePanel>
  );
};
