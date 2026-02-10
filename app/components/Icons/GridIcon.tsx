import React from "react";
import Svg, { Path } from "react-native-svg";

export default function GridIcon({ color = "white", size = 24 }) {
  
  return (
     <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
     
      <Path
        d="M3 3H21V21H3z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M9.01486 3V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M14.98514 3V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M21 9.01486H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M21 14.98514H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}
