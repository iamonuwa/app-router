import "react-clock/dist/Clock.css";

import { useEffect, useState } from "react";

import Clock from "react-clock";
import { format } from "date-fns";

export const ClockWidget = () => {
  const [value, setValue] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Clock value={value} className="bg-white rounded-full" />
      <h3 className="text-white text-2xl font-semibold tracking-tight">
        {format(value, "HH:mm:ss")}
      </h3>
    </div>
  );
};
