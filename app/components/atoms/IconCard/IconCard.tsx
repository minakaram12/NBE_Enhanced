import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styles from '../IconCard/IconCard.style';

interface IconProps {
  icon: React.FC<SvgProps>,
  customContainerstyle?: StyleProp<ViewStyle>,
  Type?:'back'|'Notification',
  iconProps?: SvgProps;
}

const IconCard: React.FC<IconProps> = ({
  icon: IconComponent,
  customContainerstyle,
  Type="General",
  iconProps,
}) => {
  const getTypeStyle = () => {
    switch (Type) {
      case 'back':
        return styles.BackContainer;
      case 'Notification':
        return styles.NotificationContainer;
      // case 'Customize':
      //   return [styles.defaultContainer, customContainerstyle]
      default:
        return [styles.defaultContainer, customContainerstyle]
    }
  };
  

  return (
    <View style={[getTypeStyle()]}>
      <IconComponent {...iconProps}/>
    </View>
  );
};

export default IconCard;
