import React from 'react';
import {View, Image, Text, ViewStyle} from 'react-native';
import {layouts} from '../../../constants/styles';
import {theme} from '../../../theme/theme';
import {styles} from './simpleCardStyles';

export interface SimpleCardProp {
  image: number;
  name?: string;
  style?: ViewStyle;
}
const SimpleCard: React.FC<SimpleCardProp> = ({image, name, style}) => {
  return (
    <View
      style={[
        styles.simpleCardContainer,
        layouts.xCentered,
        layouts.yCentered,
        {backgroundColor: theme?.notificationBackground},
        style,
      ]}>
      <Image source={image} style={styles.simpleCardImage} />
      <Text style={styles.simpleCardText}>{name?.split(' ')[0]}</Text>
    </View>
  );
};
export default SimpleCard;
