import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const HardTokenSvg = (props: SvgProps) => (
  <Svg width={14} height={15} fill="none" {...props}>
    <Path
      fill={props.fill || '#1B1B1B'}
      d="M12.363 0H1.483C1.09 0 .714.148.436.412A1.37 1.37 0 0 0 0 1.406v12.188c0 .373.156.73.435.994.278.264.655.412 1.049.412h10.879c.393 0 .77-.148 1.049-.412a1.37 1.37 0 0 0 .434-.994V1.406c0-.373-.156-.73-.434-.994A1.526 1.526 0 0 0 12.362 0Zm-5.44 14.063c-.196 0-.387-.056-.55-.159a.95.95 0 0 1-.364-.42.892.892 0 0 1-.056-.542.923.923 0 0 1 .27-.48 1.039 1.039 0 0 1 1.078-.203c.181.07.336.191.444.345a.903.903 0 0 1-.123 1.184 1.017 1.017 0 0 1-.699.274Zm5.44-3.165a.342.342 0 0 1-.109.249.381.381 0 0 1-.262.103H1.854a.381.381 0 0 1-.262-.103.342.342 0 0 1-.108-.249v-9.14c0-.093.039-.183.108-.249a.381.381 0 0 1 .262-.103h10.138c.098 0 .192.037.262.103s.109.156.109.249v9.14Z"
      opacity={0.4}
    />
    <Path
      fill={props.fill || '#1B1B1B'}
      d="M1.483 1.758c0-.093.04-.183.109-.249a.381.381 0 0 1 .262-.103h10.138c.098 0 .192.037.262.103s.109.156.109.249v9.14c0 .094-.04.183-.11.249a.381.381 0 0 1-.261.103H1.854a.381.381 0 0 1-.262-.103.342.342 0 0 1-.109-.249v-9.14Z"
    />
  </Svg>
);
export default HardTokenSvg;