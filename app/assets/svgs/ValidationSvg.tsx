import React from 'react';
import {Circle, Svg, SvgProps} from 'react-native-svg';

const ValidationSvg = (props: SvgProps) => {
  return (
    <Svg width={12} height={12} fill="none" {...props}>
      <Circle cx={6} cy={6} r={6} fill={props.fill || '#B7B7B7'} />
    </Svg>
  );
};

export default ValidationSvg;
