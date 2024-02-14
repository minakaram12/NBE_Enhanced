import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ATMsSvg = (props: SvgProps) => (
  <Svg width={23} height={31} fill="none" {...props}>
    <Path
      fill={props.fill || '#B7B7B7'}
      d="M11.5 6.375c-3.105 0-5.625 2.578-5.625 5.625a5.626 5.626 0 0 0 5.625 5.625c3.047 0 5.625-2.52 5.625-5.625 0-3.047-2.578-5.625-5.625-5.625Zm0 9.375c-2.11 0-3.75-1.64-3.75-3.75 0-2.05 1.64-3.75 3.75-3.75 2.05 0 3.75 1.7 3.75 3.75 0 2.11-1.7 3.75-3.75 3.75Zm0-15C5.23.75.25 5.79.25 12c0 4.57 1.523 5.86 10.078 18.164.527.82 1.758.82 2.285 0C21.168 17.86 22.75 16.57 22.75 12 22.75 5.79 17.71.75 11.5.75Zm0 27.773C3.297 16.746 2.125 15.81 2.125 12c0-2.46.938-4.805 2.695-6.621C6.637 3.62 8.98 2.625 11.5 2.625c2.46 0 4.805.996 6.621 2.754 1.758 1.816 2.754 4.16 2.754 6.621 0 3.809-1.23 4.746-9.375 16.523Z"
    />
  </Svg>
);
export default ATMsSvg;
