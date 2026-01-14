import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const HomeIcon = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
   
    {...props}
  >
    <Path
      d="M12.5 17.5v-6.667a.833.833 0 0 0-.833-.833H8.333a.833.833 0 0 0-.833.833V17.5"
      stroke="#fff"
      strokeOpacity={0.6}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.5 8.333a1.67 1.67 0 0 1 .59-1.273l5.834-5a1.67 1.67 0 0 1 2.152 0l5.833 5a1.67 1.67 0 0 1 .591 1.273v7.5a1.666 1.666 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 15.833z"
      stroke="#fff"
      strokeOpacity={0.6}
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeIcon;
