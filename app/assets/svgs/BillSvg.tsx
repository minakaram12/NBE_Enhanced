import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const BillSvg = (props: SvgProps) => (
  <Svg width={4} height={7} fill="none" {...props}>
    <Path
      fill={props.fill || '#B7B7B7'}
      d="m2.762 3.492-1.266-.375a.328.328 0 0 1-.246-.328.35.35 0 0 1 .34-.352h.773a.71.71 0 0 1 .41.13c.07.046.164.035.223-.024l.41-.398c.082-.083.07-.211-.023-.293A1.721 1.721 0 0 0 2.375 1.5V.937A.202.202 0 0 0 2.187.75h-.374a.193.193 0 0 0-.188.188V1.5H1.59C.84 1.5.242 2.145.312 2.906c.047.54.458.985.985 1.137l1.195.352a.338.338 0 0 1 .258.328.35.35 0 0 1-.352.34h-.773a.69.69 0 0 1-.398-.118.192.192 0 0 0-.235.024l-.41.398a.184.184 0 0 0 .023.281c.293.235.645.352 1.02.352v.563c0 .105.082.187.188.187h.375a.193.193 0 0 0 .187-.188V6c.54-.012 1.055-.328 1.23-.844a1.281 1.281 0 0 0-.843-1.664Z"
    />
  </Svg>
);
export default BillSvg;
