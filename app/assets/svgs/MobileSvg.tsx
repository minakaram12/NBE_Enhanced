import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const MobileSvg = (props: SvgProps) => {
  return (
    <Svg width={15} height={24} fill="none" {...props}>
      <Path
        fill={props.fill || '#B7B7B7'}
        d="M12.531.875H2.47A2.157 2.157 0 0 0 .313 3.031V21.72c0 1.213.943 2.156 2.156 2.156H12.53a2.157 2.157 0 0 0 2.156-2.156V3.03c0-1.168-.988-2.156-2.156-2.156Zm-.27 20.844H2.739c-.18 0-.27-.09-.27-.27V3.301c0-.135.09-.27.27-.27h9.524a.29.29 0 0 1 .27.27v18.148c0 .18-.136.27-.27.27ZM9.118 20.28c.27 0 .54-.224.54-.539v-.36c0-.269-.27-.538-.54-.538H5.883c-.315 0-.54.27-.54.539v.36c0 .314.225.538.54.538h3.234Z"
      />
    </Svg>
  );
};

export default MobileSvg;
