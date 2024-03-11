// IconSvg.js
import React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

const Icon = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} fill="none" {...props}>
      <Rect
        width={43}
        height={43}
        x={4}
        y={2.5}
        stroke="#F6A721"
        strokeWidth={1.5}
        rx={11.75}
      />
  <Path
    fill="#F6A721"
    d="M25 20.292c-1.546.023-2.89.526-3.903 1.541a5.057 5.057 0 0 0-1.492 3.688 37.61 37.61 0 0 1-.765 8.17.874.874 0 0 0 .678 1.034.885.885 0 0 0 1.035-.68c.577-2.799.847-5.676.803-8.55a3.325 3.325 0 0 1 .98-2.424c1.02-1.02 2.311-1.028 2.665-1.028 2.03.03 3.632 1.651 3.663 3.613a45.988 45.988 0 0 1-.608 8.206.874.874 0 1 0 1.726.285c.463-2.793.675-5.659.632-8.52-.047-2.898-2.45-5.29-5.414-5.335ZM24.995 25a.876.876 0 0 0-.861.89c.061 4.013-.45 7.928-1.52 11.76l-.066.238c-.101.362.095 1.112.843 1.112a.876.876 0 0 0 .843-.638l.066-.239a42.853 42.853 0 0 0 1.584-12.261c-.007-.484-.45-.87-.889-.861Zm-7.834-5.808a9.33 9.33 0 0 0-2.083 6.023 33.241 33.241 0 0 1-.524 6.432.876.876 0 0 0 1.723.313c.401-2.216.586-4.494.551-6.771a7.48 7.48 0 0 1 1.69-4.893.875.875 0 1 0-1.357-1.104Zm21.833 5.634a13.423 13.423 0 0 0-.315-2.687.876.876 0 0 0-1.709.378 11.7 11.7 0 0 1 .274 2.336c.006.42.008.838.005 1.257a.875.875 0 0 0 .867.881h.007c.48 0 .872-.387.875-.868.004-.432.002-.864-.004-1.297Zm-14.18-13.823c-3.826-.074-7.343 1.358-9.968 3.984a13.009 13.009 0 0 0-3.837 9.477c.007.413.003.825-.009 1.237a.876.876 0 0 0 .851.9h.024a.876.876 0 0 0 .875-.85c.012-.438.016-.877.01-1.315a11.274 11.274 0 0 1 3.323-8.212c2.285-2.288 5.409-3.52 8.703-3.471 4.085.06 7.923 2.09 10.268 5.431a.873.873 0 1 0 1.432-1.005 14.557 14.557 0 0 0-11.672-6.176Zm.07 4.644a9.975 9.975 0 0 0-2.471.269.875.875 0 0 0 .404 1.702 8.387 8.387 0 0 1 2.04-.22c4.527.066 8.264 3.694 8.333 8.087a50.406 50.406 0 0 1-.318 6.491.875.875 0 0 0 1.739.198c.253-2.213.362-4.473.328-6.716-.081-5.33-4.593-9.73-10.055-9.81Z"
  />
    </Svg>
  );
};

export default Icon;
