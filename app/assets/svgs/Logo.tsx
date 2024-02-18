import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';

interface LogoProps extends SvgProps {
  width?: number;
  height?: number;
  curveColor?: string;
}

const Logo = (props: LogoProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 119 136"
    {...props}>
    <Path
      fill="url(#a)"
      d="M28.161 31.16a30.608 30.608 0 0 0-.412 5.12c0 17.56 14.208 31.78 31.738 31.78 17.524 0 31.754-14.214 31.754-31.78a31.75 31.75 0 0 0-.407-5.12H28.16Z"
    />
    <Path
      fill="url(#b)"
      d="M52.323 136h14.35V78.62h-14.35V136Zm-24.381-13.194c0 10.904 7.88 12.891 11.958 13.179h2.418V78.619H27.942v44.187ZM76.677 78.62v57.36h2.45c3.916-.278 11.263-2.082 11.915-11.757V78.614H76.677v.005Z"
    />
    <Path
      fill={props.curveColor || '#007236'}
      d="M99.622 0h-80.26C8.652 0 0 8.67 0 19.402v81.564c0 9.973 6.02 18.184 15.686 19.277V15.883h87.722v104.339c9.582-1.151 15.592-9.32 15.592-19.256V19.402C119 8.671 110.327 0 99.622 0Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(201.311 0 0 201.617 -32.464 21.786)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.005} stopColor="#FBED1F" />
        <Stop offset={0.117} stopColor="#FBE91F" />
        <Stop offset={0.24} stopColor="#FADB20" />
        <Stop offset={0.368} stopColor="#F8C520" />
        <Stop offset={0.5} stopColor="#F6A721" />
        <Stop offset={0.633} stopColor="#F28022" />
        <Stop offset={0.725} stopColor="#F06023" />
        <Stop offset={1} stopColor="#F06023" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(167.91 0 0 168.166 -4.795 54.452)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.005} stopColor="#FFEB00" />
        <Stop offset={0.879} stopColor="#F06023" />
        <Stop offset={1} stopColor="#F06023" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default Logo;
