import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const RefreshIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M2.5 10A7.5 7.5 0 1 0 10 2.5a8.13 8.13 0 0 0-5.617 2.283L2.5 6.667"
      stroke="#fff"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.5 2.5v4.167h4.167"
      stroke="#fff"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default RefreshIcon;
