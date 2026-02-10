import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SavedIcon({ color = 'white', size = 24 }) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
     
      <Path
        d="M20 21L12 13.44L4 21V3H20V21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}
