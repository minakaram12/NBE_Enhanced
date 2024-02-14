import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const MenuTogglerSvg = (props: SvgProps) => (
  <Svg width={15} height={13} fill="none" {...props}>
    <Path
      fill={props.fill || '#000'}
      d="M14.477 2.242c.199 0 .398-.166.398-.398V.78c0-.199-.2-.398-.398-.398H.398C.166.383 0 .582 0 .78v1.063c0 .232.166.398.398.398h14.079Zm0 5.313c.199 0 .398-.166.398-.399V6.094c0-.2-.2-.399-.398-.399H.398c-.232 0-.398.2-.398.399v1.062c0 .233.166.399.398.399h14.079Zm0 5.312c.199 0 .398-.166.398-.398v-1.063c0-.199-.2-.398-.398-.398H.398c-.232 0-.398.199-.398.398v1.063c0 .232.166.398.398.398h14.079Z"
    />
  </Svg>
);
export default MenuTogglerSvg;
