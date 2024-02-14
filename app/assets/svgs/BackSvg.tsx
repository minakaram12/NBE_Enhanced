import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const BackSvg = (props: SvgProps) => (
  <Svg width={9} height={16} fill="none" {...props}>
    <Path
      fill={props.fill || '#fff'}
      d="m7.92 14.863.664-.63c.133-.167.133-.432 0-.565l-6.01-6.043 6.01-6.01c.133-.133.133-.398 0-.564L7.92.42a.382.382 0 0 0-.565 0L.383 7.36a.45.45 0 0 0 0 .564l6.972 6.94a.382.382 0 0 0 .565 0Z"
    />
  </Svg>
);
export default BackSvg;
