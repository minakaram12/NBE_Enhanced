import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const VerticalDotsSvg = (props: SvgProps) => (
  <Svg width={4} height={19} fill="none" {...props}>
    <Path
      fill={props.fill || '#1B1B1B'}
      d="M2 7.875C.945 7.875.125 8.754.125 9.75c0 1.055.82 1.875 1.875 1.875.996 0 1.875-.82 1.875-1.875 0-.996-.879-1.875-1.875-1.875ZM.125 2.719c0 1.054.82 1.875 1.875 1.875.996 0 1.875-.82 1.875-1.875C3.875 1.723 2.996.844 2 .844.945.844.125 1.723.125 2.719Zm0 14.062c0 1.055.82 1.875 1.875 1.875.996 0 1.875-.82 1.875-1.875 0-.996-.879-1.875-1.875-1.875-1.055 0-1.875.88-1.875 1.875Z"
    />
  </Svg>
);
export default VerticalDotsSvg;
