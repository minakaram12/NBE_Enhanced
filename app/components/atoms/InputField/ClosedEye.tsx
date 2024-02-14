import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ClosedEye = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#B7B7B7"
      d="M19.813 14.719 1.125.109a.5.5 0 0 0-.703.079L.11.578a.5.5 0 0 0 .078.703l18.687 14.61a.5.5 0 0 0 .703-.079l.313-.39a.498.498 0 0 0-.078-.703ZM9.275 4.577l4.212 3.293a3.49 3.49 0 0 0-4.212-3.293Zm1.45 6.846L6.514 8.13a3.491 3.491 0 0 0 4.213 3.293ZM10 3.5c3.083 0 5.91 1.719 7.436 4.5a8.922 8.922 0 0 1-1.375 1.881l1.179.922a10.428 10.428 0 0 0 1.653-2.347 1.01 1.01 0 0 0 0-.912C17.197 4.237 13.842 2 10 2c-1.147 0-2.24.219-3.27.588l1.45 1.134A8.203 8.203 0 0 1 10 3.5Zm0 9c-3.083 0-5.908-1.719-7.435-4.5a8.92 8.92 0 0 1 1.377-1.88l-1.18-.923A10.425 10.425 0 0 0 1.11 7.544a1.01 1.01 0 0 0 0 .912C2.804 11.763 6.16 14 10 14c1.147 0 2.241-.22 3.27-.588l-1.45-1.134A8.216 8.216 0 0 1 10 12.5Z"
    />
  </Svg>
);
export default ClosedEye;
