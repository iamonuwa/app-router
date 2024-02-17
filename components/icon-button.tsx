import { FC, PropsWithChildren } from "react";

import { Button } from "./ui/button";

interface Props extends PropsWithChildren {}

export const IconButton: FC<Props> = ({ children }) => {
  return (
    <Button size="icon" className="rounded-full h-16 w-16">
      {children}
    </Button>
  );
};
