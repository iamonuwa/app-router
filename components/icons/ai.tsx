import * as React from "react"

import { SVGProps } from "react"

export const AIIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#764FFF"
        d="m15.833.834-1.05 2.292L12.5 4.167l2.283 1.05 1.05 2.284 1.042-2.284 2.291-1.05-2.291-1.041M7.5 3.334 5.416 7.917.833 10.001l4.583 2.083L7.5 16.667l2.083-4.583 4.583-2.083-4.583-2.084m6.25 4.584-1.05 2.283-2.283 1.05 2.283 1.042 1.05 2.291 1.042-2.291 2.291-1.042-2.291-1.05"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)