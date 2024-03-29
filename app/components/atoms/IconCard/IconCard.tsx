import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styles from '../IconCard/IconCard.style';

interface IconProps {
  icon: React.FC<SvgProps>|any,
  containerstyle?: StyleProp<ViewStyle>,
  Type?:'back'|'Notification',
  iconProps?: SvgProps|any;
}

const IconCard: React.FC<IconProps> = ({
  icon: IconComponent,
  containerstyle,
  Type="General",
  iconProps,
}) => {
  const getTypeStyle = () => {
    switch (Type) {
      case 'back':
        return styles.BackContainer;
      case 'Notification':
        return [styles.NotificationContainer, containerstyle];
      default:
        return [styles.defaultContainer, containerstyle];
    }
  };
  

  return (
    <View style={[getTypeStyle()]}>
      <IconComponent {...iconProps}/>
    </View>
  );
};

export default IconCard;
