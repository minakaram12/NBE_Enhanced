import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const PhoneSvg = (props: SvgProps) => (
  <Svg width={6} height={7} fill="none" {...props}>
    <Path
      fill={props.fill || '#B7B7B7'}
      d="M5.824 4.992 4.512 4.43c-.035-.012-.07-.024-.117-.024a.285.285 0 0 0-.211.106l-.586.715a4.349 4.349 0 0 1-2.075-2.075l.715-.586a.29.29 0 0 0 .106-.222c0-.035-.012-.07-.024-.106L1.758.926a.296.296 0 0 0-.27-.176c-.011 0-.035.012-.058.012l-1.22.281a.275.275 0 0 0-.21.27A5.426 5.426 0 0 0 5.438 6.75a.275.275 0 0 0 .269-.21l.281-1.22v-.058a.306.306 0 0 0-.164-.27Z"
    />
  </Svg>
);
export default PhoneSvg;
