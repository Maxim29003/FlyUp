import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9.668 4.135a2.34 2.34 0 0 1 4.657 0 2.34 2.34 0 0 0 3.318 1.914 2.34 2.34 0 0 1 2.33 4.032 2.338 2.338 0 0 0 0 3.83 2.34 2.34 0 0 1-2.33 4.031 2.34 2.34 0 0 0-3.318 1.915 2.339 2.339 0 0 1-4.657 0 2.34 2.34 0 0 0-3.32-1.915A2.339 2.339 0 0 1 4.02 13.91a2.338 2.338 0 0 0 0-3.83 2.34 2.34 0 0 1 2.328-4.03 2.34 2.34 0 0 0 3.318-1.914"
      stroke="#fff"
      strokeOpacity={0.4}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.996 14.995a2.999 2.999 0 1 0 0-5.998 2.999 2.999 0 0 0 0 5.998"
      stroke="#fff"
      strokeOpacity={0.4}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SettingsIcon;
