import { useEffect, useState } from "react";

export const useTime = () => {
  const [value, setValue] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return value;
};
