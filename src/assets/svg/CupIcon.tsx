import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CupIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9.997 14.655v1.626a2 2 0 0 1-.976 1.695 5 5 0 0 0-2.023 3.995m6.997-7.316v1.626a2 2 0 0 0 .976 1.695 5 5 0 0 1 2.023 3.995m1-12.974h1.5a2.5 2.5 0 0 0 0-4.998h-1.5M3.999 21.993h15.995"
      stroke="#fff"
      strokeOpacity={0.4}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.998 8.997a5.998 5.998 0 1 0 11.996 0V3a1 1 0 0 0-1-1H6.998a1 1 0 0 0-1 1z"
      stroke="#fff"
      strokeOpacity={0.4}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.998 8.997h-1.5a2.5 2.5 0 0 1 0-4.998h1.5"
      stroke="#fff"
      strokeOpacity={0.4}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CupIcon;
