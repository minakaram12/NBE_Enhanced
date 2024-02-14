import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const UtilitiesSvg = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        fill={props.fill || '#F6A721'}
        d="m2.562 3.746 5.563-.587 5.563.586c.368.04.687-.266.687-.656V1.91c0-.39-.32-.695-.687-.655l-4.938.52V.313A.312.312 0 0 0 8.437 0h-.624A.312.312 0 0 0 7.5.313v1.462l-4.938-.521c-.368-.04-.687.266-.687.656v1.18c0 .39.32.696.687.656Zm11.813 3.129H12.02a4.974 4.974 0 0 0-3.27-1.827v-.566l-.625-.066-.625.066v.566a4.974 4.974 0 0 0-3.27 1.827H.312A.312.312 0 0 0 0 7.188v.625a.312.312 0 0 0 .313.312h4.582C5.547 7.009 6.74 6.25 8.125 6.25s2.58.759 3.23 1.875h3.02A4.38 4.38 0 0 1 18.75 12.5v1.25H15V12.5a.624.624 0 0 0-.625-.625h-3.02a3.735 3.735 0 0 1-3.23 1.875c-1.384 0-2.578-.759-3.23-1.875H.313a.312.312 0 0 0-.313.313v.624a.313.313 0 0 0 .313.313H4.23a4.982 4.982 0 0 0 7.79 0h1.73v.625A1.25 1.25 0 0 0 15 15h3.75A1.25 1.25 0 0 0 20 13.75V12.5a5.631 5.631 0 0 0-5.625-5.625Zm1.25 11.875a1.25 1.25 0 0 0 2.5 0c0-.69-1.25-2.5-1.25-2.5s-1.25 1.81-1.25 2.5Z"
      />
    </Svg>
  );
};

export default UtilitiesSvg;