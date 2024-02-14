import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const PasswordSvg = (props: SvgProps) => {
  return (
    <Svg width={18} height={21} fill="none" {...props}>
      <Path
        fill={props.fill || '#B7B7B7'}
        d="M9 16.594c.586 0 1.094-.469 1.094-1.094V13c0-.586-.508-1.094-1.094-1.094-.625 0-1.094.508-1.094 1.094v2.5c0 .625.469 1.094 1.094 1.094Zm8.75-6.719C17.75 8.859 16.89 8 15.875 8h-1.25V6.203C14.625 3.078 12.125.54 9 .5a5.626 5.626 0 0 0-5.625 5.625V8h-1.25C1.07 8 .25 8.86.25 9.875v8.75c0 1.055.82 1.875 1.875 1.875h13.75c1.016 0 1.875-.82 1.875-1.875v-8.75ZM5.25 8V6.125c0-2.031 1.68-3.75 3.75-3.75 2.031 0 3.75 1.719 3.75 3.75V8h-7.5Zm10.625 1.875v8.75H2.125v-8.75h13.75Z"
      />
    </Svg>
  );
};

export default PasswordSvg;
