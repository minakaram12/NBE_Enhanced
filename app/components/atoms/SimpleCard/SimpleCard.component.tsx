import React from 'react';
import {View, Image, Text, StyleSheet, ViewStyle} from 'react-native';
import {layouts} from '../../../constants/styles';
import { px } from '../../../constants/styles/layouts';
import { theme } from '../../../theme/theme';

export interface SimpleCardProp {
  image: number; 
  name: string;
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
      <Text style={styles.simpleCardText}>{name.split(' ')[0]}</Text>
    </View>
  );
};
export default SimpleCard;

const styles = StyleSheet.create({
  simpleCardContainer: {
    aspectRatio: 0.89,
    width: px(70),
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 2,
    backgroundColor: '#ffffff',
    borderRadius: 18,
  },
  simpleCardImage: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  simpleCardText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
    color: theme?.BasicColor,
  },
});
