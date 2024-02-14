import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const DropDownSvg = (props: SvgProps) => (
  <Svg width={16} height={10} fill="none" {...props}>
    <Path
      fill={props.fill || '#B7B7B7'}
      d="M15.629 1.156 14.96.453c-.176-.176-.457-.176-.598 0L8 6.816 1.602.453c-.141-.176-.422-.176-.598 0l-.668.703c-.176.14-.176.422 0 .598l7.348 7.348a.405.405 0 0 0 .597 0l7.348-7.348c.176-.176.176-.457 0-.598Z"
    />
  </Svg>
);
export default DropDownSvg;
