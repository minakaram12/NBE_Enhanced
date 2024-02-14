import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const HomeSvg = (props: SvgProps) => (
  <Svg width={34} height={31} fill="none" {...props}>
    <Path
      fill={props.fill || '#fff'}
      d="m33.523 14.637-3.398-3.047V3.563c0-.47-.469-.938-.938-.938h-3.75c-.527 0-.937.469-.937.938v3.046l-5.977-5.214c-.41-.41-.937-.586-1.523-.586-.645 0-1.172.175-1.582.586l-15 13.242c-.176.175-.352.41-.352.703 0 .234.118.469.293.586l1.23 1.406c.177.176.411.352.704.352.234 0 .469-.118.644-.293L16.355 5.555c.176-.117.352-.235.586-.235.293 0 .47.117.645.235L31.004 17.39c.176.175.41.234.644.234a.97.97 0 0 0 .704-.293l1.23-1.406c.176-.117.234-.352.234-.586a.97.97 0 0 0-.293-.703ZM17 7.488 4.168 18.797c-.117.117-.234.117-.293.234v10.782c0 .527.41.937.938.937h7.5c.468 0 .937-.41.937-.938v-7.5c0-.468.41-.937.938-.937h5.624c.47 0 .938.469.938.938v7.5c0 .527.41.937.938.937h7.5c.468 0 .937-.41.937-.938v-10.78c-.117-.118-.234-.118-.352-.235L17 7.488Z"
    />
  </Svg>
);
export default HomeSvg;
