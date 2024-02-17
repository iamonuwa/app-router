import "react-clock/dist/Clock.css";

import Clock from "react-clock";
import { format } from "date-fns";
import { useTime } from "@/hooks/use-time";

export const ClockWidget = () => {
  const time = useTime();
  return (
    <div className="flex flex-col items-center gap-4">
      <Clock value={time} className="bg-white rounded-full" />
    </div>
  );
};
