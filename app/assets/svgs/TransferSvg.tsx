import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const TransferSvg = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.fill || '#B7B7B7'}
      d="M28.188 1.043 1.938 16.16c-1.348.762-1.231 2.754.175 3.34l8.262 3.398v5.977c0 1.816 2.168 2.578 3.281 1.23l3.574-4.335 7.383 3.046a1.874 1.874 0 0 0 2.578-1.464l3.75-24.434c.235-1.523-1.406-2.695-2.753-1.875ZM12.25 28.875v-5.156l3.164 1.289-3.164 3.867Zm13.125-1.758-12.129-5.039 11.719-13.77c.293-.351-.176-.82-.527-.527L9.495 20.555 2.875 17.8l26.25-15.176-3.75 24.492Z"
    />
  </Svg>
);
export default TransferSvg;
