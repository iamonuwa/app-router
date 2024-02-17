import * as React from "react"

import { SVGProps } from "react"

export const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#D9D9D9" />
  </svg>
)