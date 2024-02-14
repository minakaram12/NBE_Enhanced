import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const SignalsSvg = (props: SvgProps) => (
  <Svg width={11} height={18} fill="none" {...props}>
    <Path
      fill={props.fill || '#fff'}
      d="M7.278 18 6.25 16.978a11.232 11.232 0 0 0 3.302-7.97A11.246 11.246 0 0 0 6.25 1.035L7.278 0A12.668 12.668 0 0 1 11 9.007 12.645 12.645 0 0 1 7.278 18ZM3.889 14.609l-.992-1.03a6.42 6.42 0 0 0 1.89-4.572 6.453 6.453 0 0 0-1.89-4.587l.992-1.022a7.884 7.884 0 0 1 2.317 5.61 7.866 7.866 0 0 1-2.317 5.6ZM1.028 11.739 0 10.717a2.406 2.406 0 0 0 .724-1.71A2.443 2.443 0 0 0 0 7.282l1.028-1.021a3.884 3.884 0 0 1 1.144 2.746 3.829 3.829 0 0 1-1.144 2.732Z"
    />
  </Svg>
);
export default SignalsSvg;
