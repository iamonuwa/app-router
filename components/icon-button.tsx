import { Button, ButtonProps } from "./ui/button";

import { FC } from "react";

interface Props extends ButtonProps {}

export const IconButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <Button size="icon" className="rounded-full h-16 w-16" {...rest}>
      {children}
    </Button>
  );
};
