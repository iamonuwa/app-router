import * as React from "react";

import { SVGProps } from "react";

export const Scanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="252"
    height="252"
    viewBox="0 0 252 252"
    fill="none"
  >
    <circle cx="126" cy="126" r="126" fill="url(#paint0_angular_54_2124)" />
    <defs>
      <radialGradient
        id="paint0_angular_54_2124"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(126 126) rotate(90) scale(126)"
      >
        <stop offset="0%" stop-color="#9681FF" id="stop1">
          <animate
            attributeName="offset"
            values="0%;0%;25%;0%"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="25%" stop-color="#9681FF" stop-opacity="0" id="stop2">
          <animate
            attributeName="offset"
            values="25%;25%;50%;25%"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stop-opacity"
            values="0;1;0;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stop-color="#9681FF" stop-opacity="0" id="stop3">
          <animate
            attributeName="offset"
            values="100%;100%;125%;100%"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
      </radialGradient>
    </defs>
  </svg>
);
