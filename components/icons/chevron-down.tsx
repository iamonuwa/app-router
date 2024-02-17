import * as React from "react"

import { SVGProps } from "react"

export const ChevronDownIcon = ({width = 16, height = 16, ...props}: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#fff"
      strokeWidth={2.053}
      d="M.918 1.185 8.103 8.37l7.185-7.185"
    />
  </svg>
)
