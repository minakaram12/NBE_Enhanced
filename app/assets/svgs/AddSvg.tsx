import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const AddSvg = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill={props.fill || '#fff'}
      d="M10.613 6.83v.34a.34.34 0 0 1-.339.338H7.508v2.766a.34.34 0 0 1-.339.339h-.338a.34.34 0 0 1-.34-.339V7.508H3.727a.34.34 0 0 1-.339-.339v-.338a.34.34 0 0 1 .339-.34h2.766V3.727a.34.34 0 0 1 .339-.339h.338a.34.34 0 0 1 .34.339v2.766h2.765a.34.34 0 0 1 .339.339ZM14 7c0 3.867-3.133 7-7 7s-7-3.133-7-7 3.133-7 7-7 7 3.133 7 7Zm-.903 0A6.097 6.097 0 1 0 .903 7a6.097 6.097 0 1 0 12.194 0Z"
    />
  </Svg>
);
export default AddSvg;
