import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {layouts} from '../../../constants/styles';
export interface SimpleCardProp {
  image: number; //number not string as we are passing require(string name). require funciton returns a number
  name: string;
}
const SimpleCard: React.FC<SimpleCardProp> = ({image, name}) => {
  return (
    <View
      style={[
        styles.simpleCardContainer,
        layouts.xCentered,
        layouts.yCentered,
        {backgroundColor: 'white'},
      ]}>
      <Image source={image} style={styles.simpleCardImage} />
      <Text style={styles.simpleCardText}>{name}</Text>
    </View>
  );
};
export default SimpleCard;

const styles = StyleSheet.create({
  simpleCardContainer: {
    aspectRatio: 0.89,
    width: '23%',
    margin: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 18,
  },
  simpleCardImage: {
    width: '43.3%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  simpleCardText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
    
  },
});
