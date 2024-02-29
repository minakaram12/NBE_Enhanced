import React from 'react';
import {View, Image, Text, StyleSheet, ViewStyle} from 'react-native';
import {layouts} from '../../../constants/styles';

export interface SimpleCardProp {
  image: number; //number not string as we are passing require(string name). require funciton returns a number
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
        {backgroundColor: 'white'},
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
    width: 90,
    margin: 5,
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
  },
});
