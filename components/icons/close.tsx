import * as React from "react";

import { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8 6.77 1.231 0 .001 1.23 6.768 8 0 14.77 1.23 16 8 9.23 14.77 16 16 14.77 9.23 8 16 1.23 14.77 0 8 6.77Z"
      clipRule="evenodd"
    />
  </svg>
);
