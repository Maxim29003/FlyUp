import * as React from "react";
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  SvgProps,
} from "react-native-svg";
const PlaneIcon = (props: SvgProps) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 240 240"
    fill="none"
    {...props}
  >
    <Path
      opacity={0.2}
      d="M120 120c45.563 0 82.5-8.059 82.5-18S165.563 84 120 84s-82.5 8.059-82.5 18 36.936 18 82.5 18"
      fill="#000"
    />
    <Path
      d="M18 97.5 75 60l37.5 15v33L75 123l-57-18z"
      fill="url(#a)"
      stroke="#047857"
      strokeWidth={2.25}
    />
    <Path
      d="M222 97.5 165 60l-37.5 15v33l37.5 15 57-18z"
      fill="url(#b)"
      stroke="#047857"
      strokeWidth={2.25}
    />
    <Path
      opacity={0.4}
      d="m30 100.5 75-18M37.5 102 108 90m102 10.5-75-18m67.5 19.5L132 90"
      stroke="#047857"
      strokeWidth={0.75}
    />
    <Path
      opacity={0.8}
      d="m112.5 75 4.5-22.5 3 22.5zm15 0L123 52.5 120 75z"
      fill="#10b981"
      stroke="#047857"
      strokeWidth={1.5}
    />
    <Path
      d="M46.5 101.25a2.25 2.25 0 1 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0z"
      fill="url(#c)"
      stroke="#475569"
      strokeWidth={1.2}
    />
    <Path
      d="M44.25 100.5c1.243 0 2.25-.672 2.25-1.5s-1.007-1.5-2.25-1.5S42 98.172 42 99s1.007 1.5 2.25 1.5"
      fill="#64748b"
    />
    <Path d="M45 105h-1.5v4.5H45z" fill="#dc2626" />
    <Path
      d="M72 104.25a2.25 2.25 0 1 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0z"
      fill="url(#d)"
      stroke="#475569"
      strokeWidth={1.2}
    />
    <Path
      d="M69.75 103.5c1.243 0 2.25-.672 2.25-1.5s-1.007-1.5-2.25-1.5-2.25.672-2.25 1.5 1.007 1.5 2.25 1.5"
      fill="#64748b"
    />
    <Path d="M70.5 108H69v4.5h1.5z" fill="#dc2626" />
    <Path
      d="M198 101.25a2.25 2.25 0 1 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0z"
      fill="url(#e)"
      stroke="#475569"
      strokeWidth={1.2}
    />
    <Path
      d="M195.75 100.5c1.243 0 2.25-.672 2.25-1.5s-1.007-1.5-2.25-1.5-2.25.672-2.25 1.5 1.007 1.5 2.25 1.5"
      fill="#64748b"
    />
    <Path d="M196.5 105H195v4.5h1.5z" fill="#dc2626" />
    <Path
      d="M172.5 104.25a2.25 2.25 0 1 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0z"
      fill="url(#f)"
      stroke="#475569"
      strokeWidth={1.2}
    />
    <Path
      d="M170.25 103.5c1.243 0 2.25-.672 2.25-1.5s-1.007-1.5-2.25-1.5-2.25.672-2.25 1.5 1.007 1.5 2.25 1.5"
      fill="#64748b"
    />
    <Path d="M171 108h-1.5v4.5h1.5z" fill="#dc2626" />
    <Path
      d="M120 174c5.799 0 10.5-36.937 10.5-82.5S125.799 9 120 9s-10.5 36.937-10.5 82.5S114.201 174 120 174Z"
      fill="url(#g)"
      stroke="#047857"
      strokeWidth={2.25}
    />
    <Path
      opacity={0.3}
      d="M114 30v135m12-135v135"
      stroke="#047857"
      strokeWidth={0.6}
    />
    <Path d="M109.5 18 120 7.5 130.5 18z" fill="#047857" />
    <Path
      d="M120 27c4.142 0 7.5-5.373 7.5-12S124.142 3 120 3s-7.5 5.373-7.5 12 3.358 12 7.5 12Z"
      fill="#059669"
      stroke="#047857"
      strokeWidth={1.5}
    />
    <Path d="M120 7.5V3" stroke="#94a3b8" strokeWidth={1.5} />
    <Path d="M120 4.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4" fill="#94a3b8" />
    <Path
      d="M120 57c4.142 0 7.5-6.716 7.5-15s-3.358-15-7.5-15-7.5 6.716-7.5 15 3.358 15 7.5 15Z"
      fill="#1e3a8a"
      stroke="#0f172a"
      strokeWidth={1.8}
    />
    <Path
      opacity={0.5}
      d="M120 54c3.314 0 6-5.373 6-12s-2.686-12-6-12-6 5.373-6 12 2.686 12 6 12"
      fill="#3b82f6"
    />
    <Path
      d="M120 57c4.142 0 7.5-6.716 7.5-15s-3.358-15-7.5-15-7.5 6.716-7.5 15 3.358 15 7.5 15Zm-7.5-15h15"
      stroke="#0f172a"
      strokeWidth={0.9}
    />
    <Path
      opacity={0.7}
      d="M117 40.5c1.657 0 3-2.015 3-4.5s-1.343-4.5-3-4.5-3 2.015-3 4.5 1.343 4.5 3 4.5"
      fill="#93c5fd"
    />
    <Path
      d="M112.5 94.5c2.899 0 5.25-5.373 5.25-12s-2.351-12-5.25-12-5.25 5.373-5.25 12 2.351 12 5.25 12Z"
      fill="#1f2937"
      stroke="#047857"
      strokeWidth={1.5}
    />
    <Path
      d="M112.5 91.5c2.071 0 3.75-4.03 3.75-9s-1.679-9-3.75-9-3.75 4.03-3.75 9 1.679 9 3.75 9"
      fill="#374151"
    />
    <Path
      d="M127.5 94.5c2.899 0 5.25-5.373 5.25-12s-2.351-12-5.25-12-5.25 5.373-5.25 12 2.351 12 5.25 12Z"
      fill="#1f2937"
      stroke="#047857"
      strokeWidth={1.5}
    />
    <Path
      d="M127.5 91.5c2.071 0 3.75-4.03 3.75-9s-1.679-9-3.75-9-3.75 4.03-3.75 9 1.679 9 3.75 9"
      fill="#374151"
    />
    <Path
      opacity={0.3}
      d="M123.75 63h-7.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75"
      fill="#047857"
    />
    <Path
      opacity={0.2}
      d="M118.8 105h-3.6a.45.45 0 0 0-.45.45v5.1c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-5.1a.45.45 0 0 0-.45-.45m6 0h-3.6a.45.45 0 0 0-.45.45v5.1c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-5.1a.45.45 0 0 0-.45-.45m-6 15h-3.6a.45.45 0 0 0-.45.45v5.1c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-5.1a.45.45 0 0 0-.45-.45m6 0h-3.6a.45.45 0 0 0-.45.45v5.1c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-5.1a.45.45 0 0 0-.45-.45"
      fill="#047857"
    />
    <Path
      d="m111 150-3-22.5 6 22.5z"
      fill="#10b981"
      stroke="#047857"
      strokeWidth={1.8}
    />
    <Path
      opacity={0.4}
      d="m110.25 135 1.5 15"
      stroke="#047857"
      strokeWidth={0.75}
    />
    <Path
      d="m129 150 3-22.5-6 22.5z"
      fill="#10b981"
      stroke="#047857"
      strokeWidth={1.8}
    />
    <Path
      opacity={0.4}
      d="m129.75 135-1.5 15"
      stroke="#047857"
      strokeWidth={0.75}
    />
    <Path
      d="m90 157.5 22.5-7.5v12L90 165zm60 0-22.5-7.5v12l22.5 3z"
      fill="#6ee7b7"
      stroke="#047857"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.4}
      d="M102 157.5v7.5m36-7.5v7.5"
      stroke="#047857"
      strokeWidth={0.75}
    />
    <Path
      d="M112.5 175.5c3.314 0 6-3.358 6-7.5s-2.686-7.5-6-7.5-6 3.358-6 7.5 2.686 7.5 6 7.5Z"
      fill="#1f2937"
      stroke="#047857"
      strokeWidth={1.8}
    />
    <Path
      opacity={0.8}
      d="M112.5 174c2.485 0 4.5-2.686 4.5-6s-2.015-6-4.5-6-4.5 2.686-4.5 6 2.015 6 4.5 6"
      fill="url(#h)"
    />
    <Path
      opacity={0.6}
      d="M112.5 171a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      fill="#fcd34d"
    />
    <Path
      d="M127.5 175.5c3.314 0 6-3.358 6-7.5s-2.686-7.5-6-7.5-6 3.358-6 7.5 2.686 7.5 6 7.5Z"
      fill="#1f2937"
      stroke="#047857"
      strokeWidth={1.8}
    />
    <Path
      opacity={0.8}
      d="M127.5 174c2.485 0 4.5-2.686 4.5-6s-2.015-6-4.5-6-4.5 2.686-4.5 6 2.015 6 4.5 6"
      fill="url(#i)"
    />
    <Path
      opacity={0.6}
      d="M127.5 171a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      fill="#fcd34d"
    />
    <G opacity={0.7}>
      <Path
        d="M112.5 178.5c1.657 0 3-2.015 3-4.5s-1.343-4.5-3-4.5-3 2.015-3 4.5 1.343 4.5 3 4.5"
        fill="#fcd34d"
      />
      <Path
        d="M112.5 180c1.243 0 2.25-1.343 2.25-3s-1.007-3-2.25-3-2.25 1.343-2.25 3 1.007 3 2.25 3"
        fill="#f59e0b"
      />
      <Path
        d="M127.5 178.5c1.657 0 3-2.015 3-4.5s-1.343-4.5-3-4.5-3 2.015-3 4.5 1.343 4.5 3 4.5"
        fill="#fcd34d"
      />
      <Path
        d="M127.5 180c1.243 0 2.25-1.343 2.25-3s-1.007-3-2.25-3-2.25 1.343-2.25 3 1.007 3 2.25 3"
        fill="#f59e0b"
      />
    </G>
    <Path d="M120 172.5v7.5l-3 3" stroke="#94a3b8" strokeWidth={1.5} />
    <Path
      opacity={0.4}
      d="M52.5 108a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      fill="#fff"
    />
    <Path
      opacity={0.5}
      d="M52.5 106.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
      fill="#059669"
    />
    <Path
      opacity={0.4}
      d="M187.5 108a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      fill="#fff"
    />
    <Path
      opacity={0.5}
      d="M187.5 106.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
      fill="#059669"
    />
    <Path
      d="M117.41 144.144q-.823-.004-1.419-.406-.59-.403-.91-1.167-.317-.763-.314-1.837 0-1.07.317-1.825.319-.755.911-1.148.594-.396 1.415-.396t1.413.396q.594.397.914 1.151.32.751.317 1.822 0 1.076-.32 1.841-.317.764-.908 1.166-.591.403-1.416.403m0-1.148q.563 0 .899-.565.335-.566.332-1.697 0-.745-.154-1.24-.15-.496-.428-.745a.93.93 0 0 0-.649-.249q-.559 0-.894.559-.336.56-.339 1.675 0 .754.15 1.259.153.502.431.754a.95.95 0 0 0 .652.249m3.713 1.004 2.714-5.369v-.045h-3.161v-1.131h4.593v1.147L122.552 144z"
      fill="#fff"
    />
    <Path
      d="M59.55 102h-2.1a.45.45 0 0 0-.45.45v.6c0 .249.202.45.45.45h2.1a.45.45 0 0 0 .45-.45v-.6a.45.45 0 0 0-.45-.45m21 3h-2.1a.45.45 0 0 0-.45.45v.6c0 .249.201.45.45.45h2.1a.45.45 0 0 0 .45-.45v-.6a.45.45 0 0 0-.45-.45m102-3h-2.1a.45.45 0 0 0-.45.45v.6c0 .249.201.45.45.45h2.1a.45.45 0 0 0 .45-.45v-.6a.45.45 0 0 0-.45-.45m-21 3h-2.1a.45.45 0 0 0-.45.45v.6c0 .249.201.45.45.45h2.1a.45.45 0 0 0 .45-.45v-.6a.45.45 0 0 0-.45-.45"
      fill="#94a3b8"
    />
    <Path
      d="m112.5 22.5-3 1.5m18-1.5 3 1.5"
      stroke="#94a3b8"
      strokeWidth={0.75}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={4743}
        y1={60}
        x2={4743}
        y2={6360}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6ee7b7" />
        <Stop offset={0.5} stopColor="#10b981" />
        <Stop offset={1} stopColor="#059669" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={4852.5}
        y1={60}
        x2={4852.5}
        y2={6360}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6ee7b7" />
        <Stop offset={0.5} stopColor="#10b981" />
        <Stop offset={1} stopColor="#059669" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={42}
        y1={99}
        x2={889.059}
        y2={310.765}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#cbd5e1" />
        <Stop offset={0.5} stopColor="#94a3b8" />
        <Stop offset={1} stopColor="#64748b" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={67.5}
        y1={102}
        x2={914.559}
        y2={313.765}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#cbd5e1" />
        <Stop offset={0.5} stopColor="#94a3b8" />
        <Stop offset={1} stopColor="#64748b" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={193.5}
        y1={99}
        x2={1040.56}
        y2={310.765}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#cbd5e1" />
        <Stop offset={0.5} stopColor="#94a3b8" />
        <Stop offset={1} stopColor="#64748b" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={168}
        y1={102}
        x2={1015.06}
        y2={313.765}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#cbd5e1" />
        <Stop offset={0.5} stopColor="#94a3b8" />
        <Stop offset={1} stopColor="#64748b" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={109.5}
        y1={8259}
        x2={2209.5}
        y2={8259}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#047857" />
        <Stop offset={0.3} stopColor="#059669" />
        <Stop offset={0.5} stopColor="#10b981" />
        <Stop offset={0.7} stopColor="#059669" />
        <Stop offset={1} stopColor="#047857" />
      </LinearGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(4.5 0 0 6 112.5 168)"
      >
        <Stop stopColor="#fcd34d" />
        <Stop offset={0.5} stopColor="#f59e0b" />
        <Stop offset={1} stopColor="#dc2626" />
      </RadialGradient>
      <RadialGradient
        id="i"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(4.5 0 0 6 127.5 168)"
      >
        <Stop stopColor="#fcd34d" />
        <Stop offset={0.5} stopColor="#f59e0b" />
        <Stop offset={1} stopColor="#dc2626" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default PlaneIcon;
