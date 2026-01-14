import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m11.996 18.994-6.998-6.998 6.998-6.998m6.998 6.998H4.998"
      stroke="#fff"
      strokeOpacity={0.6}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackIcon;
