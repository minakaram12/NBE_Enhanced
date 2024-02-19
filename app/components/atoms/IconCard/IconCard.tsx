import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import styles from '../IconCard/IconCard.style';

interface IconProps {
  icon: React.FC<SvgProps>;
  containerstyle?: object;
  iconstyle?: object;
}

const IconCard: React.FC<IconProps> = ({
  icon: IconComponent,
  containerstyle,
  iconstyle,
}) => {
  return (
    <View style={[styles.iconContainer, containerstyle]}>
      <IconComponent style={iconstyle} />
    </View>
  );
};

export default IconCard;
