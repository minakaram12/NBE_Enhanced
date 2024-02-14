import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const DarkModeSvg = (props: SvgProps) => (
  <Svg width={14} height={15} fill="none" {...props}>
    <Path
      fill={props.fill || '#1B1B1B'}
      d="M12.975 11.657c.316-.063.543.312.336.566A7.467 7.467 0 0 1 7.49 15C3.351 15 0 11.641 0 7.501 0 2.814 4.246-.724 8.866.127c.32.062.394.492.11.652a5.87 5.87 0 0 0-2.973 5.109c0 3.671 3.336 6.46 6.972 5.769Z"
    />
  </Svg>
);
export default DarkModeSvg;
