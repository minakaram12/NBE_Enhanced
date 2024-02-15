import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SimSvg = (props: SvgProps) => (
  <Svg width={30} height={23} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M25.69 0H3.31C1.482 0 0 1.515 0 3.383v16.234C0 21.485 1.482 23 3.31 23h22.38c1.828 0 3.31-1.515 3.31-3.383V3.383C29 1.515 27.518 0 25.69 0Z"
    />
    <Path
      fill="#231912"
      d="M29 11.76v-.526H18.439V7.85l2.769-2.837h7.818v-.526H21l-2.925 2.99h-3.317V0h-.514v7.478h-3.31l-2.926-2.99H0v.526h7.818l2.776 2.837v3.383H0v.526h10.568v3.39l-3.036 3.095H0v.527h7.747l3.186-3.25h3.31V23h.514v-7.478h3.317l3.18 3.25H29v-.526h-7.5l-3.061-3.097v-3.39H29Zm-11.076 3.236h-6.848V7.99h6.841l.007 7.005Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={1.023}
        x2={29.892}
        y1={0.213}
        y2={23.362}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B56110" />
        <Stop offset={0.15} stopColor="#B56110" />
        <Stop offset={0.46} stopColor="#E5AD5C" />
        <Stop offset={0.61} stopColor="#F9CC7B" />
        <Stop offset={0.72} stopColor="#FFE6A6" />
        <Stop offset={0.84} stopColor="#F9CC7B" />
        <Stop offset={1} stopColor="#B56110" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={0}
        x2={1290.79}
        y1={397.21}
        y2={397.21}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B56110" />
        <Stop offset={0.15} stopColor="#B56110" />
        <Stop offset={0.46} stopColor="#E5AD5C" />
        <Stop offset={0.61} stopColor="#F9CC7B" />
        <Stop offset={0.72} stopColor="#FFE6A6" />
        <Stop offset={0.84} stopColor="#F9CC7B" />
        <Stop offset={1} stopColor="#B56110" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SimSvg;
